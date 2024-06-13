"use client"

import { useState, useEffect, useContext, useCallback, createContext } from 'react';
import { formatBalance } from '@/utils/utils';
import detectEthereumProvider from "@metamask/detect-provider";

const disConnectedState = {
    accounts: "",
    balance: "",
    chainId: ""
}

const MetamaskContext = createContext({});

export const MetamaskContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [hasProvider, setHasProvider] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [wallet, setWallet] = useState(disConnectedState);
    const [connected, setConnected] = useState(false);

    const updateWalletAndAccounts = useCallback(async () => {
        try {
            const accounts = await (window as any).ethereum?.request({ method: "eth_requestAccounts" }) as string[];
            if (accounts.length === 0) {
                setWallet(disConnectedState);
                return;
            }

            const balance = formatBalance(await (window as any).ethereum?.request({
                method: 'eth_getBalance', params: [accounts[0], "latest"]
            }));

            const chainId = await (window as any).ethereum?.request({ method: 'eth_chainId' });
            if (chainId !== "0xaa36a7") {
                await (window as any).ethereum?.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xaa36a7' }]
                });
            }
            setConnected(true);
            setWallet({ accounts: accounts[0], balance, chainId });
        } catch (error) {
            console.error("Error updating wallet and accounts:", error);
        }
    }, []);

    const connectMetamask = async () => {
        setIsConnecting(true);
        try{
            if(connected){
                console.log("Connected already");
                return;
            }
            const provider = await detectEthereumProvider({silent: true});
            setHasProvider(Boolean(provider));
            if(provider){
                updateWalletAndAccounts();
                (window as any).ethereum?.on('accountsChanged', updateWalletAndAccounts);
                (window as any).ethereum?.on('chainChanged', updateWalletAndAccounts);
            }
        } catch(err) {
            console.error("Error connecting to Metamask:", err);
        }
        finally {
            setIsConnecting(false);
        }
    }

    return (
        <MetamaskContext.Provider value={{ wallet, connectMetamask, isConnecting, hasProvider, connected }}>
            {children}
        </MetamaskContext.Provider>
    )
}

export const useMetamask = () => {
    const context = useContext(MetamaskContext);
    if(!context){
        throw new Error("UseMetamask must be used within MetamaskContextProvider");
    }
    return context;
}

