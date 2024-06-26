import React, { createContext, Dispatch, SetStateAction } from "react";

interface WalletContextType {
    showWallet: boolean;
    setShowWallet: Dispatch<SetStateAction<boolean>>;
}

const WalletContext = createContext<WalletContextType | null>(null);

export default WalletContext;
