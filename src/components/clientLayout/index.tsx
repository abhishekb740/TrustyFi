"use client";
import { Footer, Navbar } from "@/components";
import { useState } from "react";
import WalletContext from "@/contexts/WalletConnect";

import { ReactNode } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const [showWallet, setShowWallet] = useState(false);

  return (
    <>
      <WalletContext.Provider value={{ showWallet, setShowWallet}}>
        <Navbar setShowWallet={setShowWallet} showWallet={showWallet} />
        <div className="relative min-h-screen">{children}</div>
        <Footer />
      </WalletContext.Provider>
    </>
  );
};

export default ClientLayout;
