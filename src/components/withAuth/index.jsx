"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMetaMask } from "@/hooks/useMetamask";
import Notification from "../notification";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const { connected } = useMetaMask();
    const router = useRouter();
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
      if (!connected) {
        setShowNotification(true);
        const timer = setTimeout(() => {
          router.push("/");
        }, 1000); // Redirect after the notification is displayed

        return () => clearTimeout(timer);
      }
    }, [connected, router]);

    return (
      <>
        <Notification
          message="Please connect your wallet."
          show={showNotification}
          onClose={() => setShowNotification(false)}
          isSuccess={false}
        />
        {connected && <WrappedComponent {...props} />}
      </>
    );
  };
};

export default WithAuth;
