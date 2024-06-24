"use client"
import { Footer, Hero, Hero2, Navbar } from "@/components";
import { useContext } from "react";
import WalletContext from "@/contexts/WalletConnect";

export default function Home() {

  const { showWallet, setShowWallet } = useContext(WalletContext);

  return (
    <div className="relative min-h-screen">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-1"
          style={{
            backgroundImage: "url('/background.png')",
          }}
        ></div>
        <div className="relative rounded-lg">
          <Hero setShowWallet={setShowWallet} showWallet={showWallet}/>
        </div>
      </div>
      <Hero2 />
      <Footer />
    </div>
  );
}
