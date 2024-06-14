"use client"
import { Footer, Hero, Hero2, Navbar } from "@/components";
import { useState } from "react";

export default function Home() {
  const [showWallet, setShowWallet] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Navbar setShowWallet={setShowWallet} showWallet={showWallet} />
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
