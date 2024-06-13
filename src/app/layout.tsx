import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MetamaskContextProvider } from "@/hooks/useMetamask";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trustify",
  description: "",
  icons: ['/TrustifyLogo.png']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MetamaskContextProvider>
        <body className={inter.className}>{children}</body>
      </MetamaskContextProvider>
    </html>
  );
}
