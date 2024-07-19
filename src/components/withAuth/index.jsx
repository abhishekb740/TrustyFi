"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMetaMask } from "@/hooks/useMetamask";
import Notification from "../notification";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const { connected } = useMetaMask();
    const router = useRouter();
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
      if (!connected) {
        setShowNotification(true);
        const timer = setTimeout(() => {
          router.push("/");
        }, 800);

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

  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
};

export default withAuth;