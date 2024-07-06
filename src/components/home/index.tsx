"use client";

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { useMetaMask } from "@/hooks/useMetamask";
import { useEffect } from "react";
import { Protocols, Topics } from "@/utils/utils";

type Props = {
    setShowWallet: (showWallet: boolean) => void;
    showWallet: boolean;
};

export default function Hero({ setShowWallet, showWallet }: Props) {

    const { wallet, connectMetaMask, isConnecting, hasProvider, connected } = useMetaMask();

    useEffect(() => {
        if (connected) {
            setShowWallet(false);
        }
    }, [connected])

    return (
        <main className="relative flex flex-col justify-center items-center pt-20" style={{fontFamily: 'Montserrat'}}>
            {showWallet && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setShowWallet(false)}></div>
            )}
            <div className={`flex flex-col items-center gap-6 ${showWallet ? 'z-30' : ''}`}>
                <div className="flex flex-col items-center gap-2">
                    <div className="text-md">LET&apos;S MAKE DEFI MORE TRUSTED</div>
                    <div className="flex flex-col items-center text-8xl" style={{fontFamily: 'Druk Trial'}}>
                        <div className="">VERIFIED REVIEWS</div>
                        <div className="">FOR EVERY <span className="text-[#B2F1A8]"> DEFI PROTOCOLS </span> </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div className="text-lg">
                        The first Web3 review platform that pays users for verified reviews
                    </div>
                    <div className="flex flex-row w-3/4 rounded-3xl py-1 px-5 items-center justify-center bg-white border shadow-[0_0_20px_#B2F1A8]">
                        <input
                            className="flex ml-4 w-full py-1.5 bg-transparent focus:outline-none text-black"
                            placeholder="Search..."
                        />
                        <IoIosSearch size={25} className="text-neutral-400" />
                    </div>
                </div>
            </div>
            <div className={`w-full ${showWallet ? 'z-30' : ''}`}>
                <div className="mt-16 overflow-hidden">
                    <div className="flex flex-row animate-marquee gap-10">
                        {
                            Topics.map((topic, index) => {
                                return (
                                    <div key={index} className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-2 px-6 rounded-tr-2xl rounded-br-2xl">
                                        <div>
                                            <Image src={`/${topic.icon}`} width={20} height={20} alt={`${topic.name} Logo`} />
                                        </div>
                                        <div>
                                            {topic.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={`w-full mt-8 ${showWallet ? 'z-30' : ''}`}>
                <div className="flex flex-row justify-end pr-12">
                    <button>
                        See all Categories
                    </button>
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center w-full gap-12 ${showWallet ? 'z-30' : ''}`}>
                <div className="text-6xl font-bold" style={{fontFamily: 'Druk Trial'}}>
                    POPULAR WEB3 PRODUCTS
                </div>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 md:grid-cols-2">
                    {
                        Protocols.map((protocol, index) => {
                            return (
                                <div key={index} className="flex flex-row border-[#B2F1A8] border-[1px] rounded-md max-w-[27rem] shadow-[0px_2px_6px_#B2F1A8]">
                                    <div className="bg-[white] w-36 flex justify-center items-center rounded-md">
                                        <Image className="object-contain" src={`/protocols/${protocol.image}`} width={80} height={80} alt={`${protocol.name} Logo`} />
                                    </div>
                                    <div className="flex flex-col p-4">
                                        <div className="text-md">{protocol.name}</div>
                                        <div className="text-sm">
                                            {protocol.description}
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <div className="flex flex-row gap-1">
                                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                                <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                            </div>
                                            <div>
                                                4.9
                                            </div>
                                            <div>
                                                (32 Reviews)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                showWallet && (
                    <div className='fixed bg-[#B2F1A8] w-[25rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-black p-4 rounded-lg'>
                        <div className="text-2xl font-bold">
                            CONNECT WALLET
                        </div>
                        <div className="flex flex-col justify-center items-center w-full mt-12 gap-6">
                            <button onClick={connectMetaMask} className="flex flex-row justify-center items-center gap-6 rounded-full border border-black p-2 min-w-56">
                                <Image src="/metamask.png" width={30} height={30} alt="Metamask Logo" />
                                <div className="font-bold">
                                    Metamask
                                </div>
                            </button>
                            <div className="text-sm p-2">
                                This wallet becomes your primary connected address. If you own an ENS domain, we&apos;ll make that username. You can change this later though!
                            </div>
                            <div className="text-sm p-2">
                                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
                            </div>
                            <button className="text-sm font-bold p-2" onClick={() => (setShowWallet(false))}>
                                Cancel
                            </button>
                        </div>
                    </div>
                )
            }
        </main>
    );
}
