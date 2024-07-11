"use client";
import {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
  useContext,
  useCallback,
} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { formatBalance } from "@/utils/utils";
import { handleUserInDatabase, fetchUserByWalletAddress } from "@/app/_actions/queries";
import { fetchProtocolsAndCategories } from '@/app/_actions/queries';

interface WalletState {
  accounts: any[];
  balance: string;
  chainId: string;
}

interface MetaMaskContextData {
  wallet: WalletState;
  hasProvider: boolean | null;
  error: boolean;
  errorMessage: string;
  isConnecting: boolean;
  connectMetaMask: () => void;
  clearError: () => void;
  connected: boolean;
  userId: string | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  protocols: Protocol[];
}

const disconnectedState: WalletState = {
  accounts: [],
  balance: "",
  chainId: "",
};

const MetaMaskContext = createContext<MetaMaskContextData>(
  {} as MetaMaskContextData
);

export const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const clearError = () => setErrorMessage("");
  const [wallet, setWallet] = useState(disconnectedState);
  const [loading, setLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<string | null>(null);

  const _updateWallet = useCallback(async (providedAccounts?: any) => {
    if (!window.ethereum) return;

    const accounts =
      providedAccounts ||
      (await window.ethereum.request({ method: "eth_accounts" }));

    if (accounts.length === 0) {
      setWallet(disconnectedState);
      setUserId(null);
      return;
    }

    const balance = formatBalance(
      await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });

    if (chainId !== '0xaa36a7') {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: '0xaa36a7' }],
      });
    }
    setWallet({ accounts: [accounts[0]], balance, chainId });

    await handleUserInDatabase(accounts[0]);
    const user = await fetchUserByWalletAddress(accounts[0]);
    setUserId(user?.id || null);
  }, []);

  const updateWalletAndAccounts = useCallback(
    () => _updateWallet(),
    [_updateWallet]
  );
  const updateWallet = useCallback(
    (accounts: any) => _updateWallet(accounts),
    [_updateWallet]
  );

  useEffect(() => {
    const getProtocolsAndCategories = async () => {
      const res = await fetchProtocolsAndCategories();
      setProtocols(res);
      setLoading(false);
    }
    getProtocolsAndCategories();
  }, [])

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));
      if (provider) {
        updateWalletAndAccounts();
        window.ethereum?.on("accountsChanged", updateWallet);
        window.ethereum?.on("chainChanged", updateWalletAndAccounts);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener("accountsChanged", updateWallet);
      window.ethereum?.removeListener(
        "chainChanged",
        updateWalletAndAccounts
      );
    };
  }, [updateWallet, updateWalletAndAccounts]);

  const connectMetaMask = async () => {
    if (!window.ethereum) return;

    setIsConnecting(true);

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      clearError();
      updateWallet(accounts);
    } catch (err: any) {
      setErrorMessage(err.message);
    }
    setIsConnecting(false);
  };

  return (
    <MetaMaskContext.Provider
      value={{
        wallet,
        hasProvider,
        error: !!errorMessage,
        errorMessage,
        isConnecting,
        connectMetaMask,
        clearError,
        connected: wallet.accounts.length > 0,
        userId,
        loading,
        setLoading,
        protocols
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);
  if (context === undefined) {
    throw new Error(
      "useMetaMask must be used within a MetaMaskContextProvider"
    );
  }
  return context;
};
