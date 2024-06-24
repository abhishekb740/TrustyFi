import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MetaMaskContextProvider } from "@/hooks/useMetamask";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trustify",
  description: "",
  icons: ['/TrustifyLogo.png']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <MetaMaskContextProvider>
        <body className={inter.className}>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </MetaMaskContextProvider>
    </html>
  );
}
