"use client"
import { useEffect } from "react";

type NotificationProps = {
  message: string;
  show: boolean;
  onClose: () => void;
  isSuccess: boolean;
};

export default function Notification ({ message, show, onClose, isSuccess }: NotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
      show ? (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${isSuccess ? 'bg-green-700' : 'bg-red-500'} text-white px-4 py-2 rounded shadow-lg z-30`}>
          {message}
        </div>
      ) : null
    );
};
