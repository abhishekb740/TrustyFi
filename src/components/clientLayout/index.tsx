"use client";
import { Navbar } from "@/components";
import { useState } from "react";
import WalletContext from "@/contexts/WalletConnect";

const ClientLayout = ({ children }) => {
  const [showWallet, setShowWallet] = useState(false);

  return (
    <>
      <WalletContext.Provider value={{ showWallet, setShowWallet}}>
        <Navbar setShowWallet={setShowWallet} showWallet={showWallet} />
        <div className="relative min-h-screen">{children}</div>
      </WalletContext.Provider>
    </>
  );
};

export default ClientLayout;
