"use client";
import { useEffect } from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useMetaMask } from "@/hooks/useMetamask";
import WithAuth from "@/components/withAuth";

function Governance() {
    const { connected } = useMetaMask();

    useEffect(() => {
        if(!connected) {
            window.location.href = "/";
        }
    }, [])

    return (
        <div className="flex flex-row justify-center mt-24">
            <div className="p-4 rounded-full flex flex-row justify-center items-center gap-1 border border-[#B2F1A8]">
                <div>
                    <IoInformationCircleSharp size={25} />
                </div>
                <div>
                    Coming Soon
                </div>
            </div>
        </div>
    );
}

export default WithAuth(Governance);