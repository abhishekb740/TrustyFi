"use client";

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { useMetaMask } from "@/hooks/useMetamask";
import { useEffect, useState } from "react";
import { Protocols, Topics } from "@/utils/utils";
import { useRouter } from "next/navigation";

type Props = {
    setShowWallet: (showWallet: boolean) => void;
    showWallet: boolean;
};

export default function Hero({ setShowWallet, showWallet }: Props) {

    const { connectMetaMask, connected, protocols, setSelectedCategory } = useMetaMask();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const router = useRouter();

    const filterProtocols = protocols.filter(protocol => protocol.protocol_name.toLowerCase().includes(searchQuery.toLowerCase()));

    useEffect(() => {
        if (connected) {
            setShowWallet(false);
        }
    }, [connected])

    return (
        <main className="relative flex flex-col justify-center items-center pt-20 px-4 md:px-0" style={{ fontFamily: 'Montserrat' }}>
            {showWallet && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setShowWallet(false)}></div>
            )}
            <div className={`flex flex-col items-center gap-6 ${showWallet ? 'z-30' : ''}`}>
                <div className="flex flex-col items-center gap-2 text-center">
                    <div className="text-md">LET&apos;S MAKE DEFI MORE TRUSTED</div>
                    <div className="flex flex-col items-center text-4xl md:text-8xl" style={{ fontFamily: 'Druk Trial' }}>
                        <div>VERIFIED REVIEWS</div>
                        <div>FOR EVERY <span className="text-[#B2F1A8]"> DEFI PROTOCOLS </span> </div>
                    </div>
                </div>
                <div className="text-lg text-center mb-4">
                    The first Web3 review platform that pays users for verified reviews
                </div>
                <div className="flex flex-col relative items-center gap-10 w-full">
                    <div className="flex flex-row w-full md:w-3/4 rounded-3xl py-1 px-5 items-center justify-center bg-white border shadow-[0_0_20px_#B2F1A8]">
                        <input
                            className="flex ml-4 w-full py-1.5 bg-transparent focus:outline-none text-black"
                            placeholder="Search..."
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <IoIosSearch size={25} className="text-neutral-400" />
                    </div>
                    {searchQuery && (
                        <div className="absolute text-black top-full flex flex-col z-30 mt-1 max-h-[13rem] border border-neutral-100 bg-white/90 backdrop-blur-lg w-3/4 rounded-xl shadow-lg scroll-smooth scrollbar py-2 px-8">
                            {filterProtocols.length ?
                                filterProtocols.map((protocol, index) => {
                                    const isLast = index === filterProtocols.length - 1;
                                    return (
                                        <div
                                            onClick={() => router.push(`/protocol/${protocol.protocol_name}`)}
                                            key={index}
                                            className={`py-2 ${!isLast ? 'border-b border-black' : ''} text-lg hover:cursor-pointer flex flex-row gap-4 items-center`}
                                            style={{ fontWeight: '800' }}
                                        >
                                            <div>
                                                <Image src={`/protocols/${protocol.image_url}`} width={25} height={25} alt="protocol logo" />
                                            </div>
                                            <div>
                                                {protocol.protocol_name}
                                            </div>
                                        </div>
                                    )
                                }) :
                                <p className="text-lg py-2 text-neutral-800 font-primary">No protocol found</p>
                            }
                        </div>
                    )}
                </div>
            </div>
            <div className={`w-full ${showWallet ? 'z-30' : ''}`}>
                <div className="mt-16 overflow-hidden">
                    <div className="flex flex-row animate-marquee gap-4 md:gap-10">
                        {
                            [...Topics, ...Topics, ...Topics, ...Topics].map((topic, index) => {
                                return (
                                    <div onClick={() => {
                                        setSelectedCategory(topic.name)
                                        router.push("/categories")
                                    }} key={index} className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-2 px-8 md:px-10 rounded-tr-2xl rounded-br-2xl whitespace-nowrap hover:cursor-pointer justify-center">
                                        <div className="flex-shrink-0">
                                            <Image src={`/categories/${topic.icon}`} width={20} height={20} alt={`${topic.name} Logo`} />
                                        </div>
                                        <div className="flex-shrink-0">
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
                <div className="flex flex-row justify-end pr-4 md:pr-12">
                    <button onClick={() => router.push("/categories")} >
                        See all Categories
                    </button>
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center w-full gap-12 ${showWallet ? 'z-30' : ''}`}>
                <div className="text-4xl md:text-6xl font-bold text-center" style={{ fontFamily: 'Druk Trial' }}>
                    POPULAR WEB3 PRODUCTS
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {
                        Protocols.map((protocol, index) => {
                            return (
                                <div onClick={() => router.push(`/protocol/${protocol.name}`)} key={index} className="flex flex-row border-[#B2F1A8] border-[1px] rounded-md max-w-[27rem] shadow-[0px_2px_6px_#B2F1A8] hover:cursor-pointer">
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
                                                <Image src="/ratingStar.svg" width={20} height={20} alt="Rating" />
                                                <Image src="/ratingStar.svg" width={20} height={20} alt="Rating" />
                                                <Image src="/ratingStar.svg" width={20} height={20} alt="Rating" />
                                                <Image src="/ratingStar.svg" width={20} height={20} alt="Rating" />
                                                <Image src="/ratingStar.svg" width={20} height={20} alt="Rating" />
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
                    <div className='fixed bg-[#B2F1A8] w-[90%] md:w-[25rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-black p-4 rounded-lg'>
                        <div className="text-2xl font-bold text-center">
                            CONNECT WALLET
                        </div>
                        <div className="flex flex-col justify-center items-center w-full mt-12 gap-6">
                            <button onClick={connectMetaMask} className="flex flex-row justify-center items-center gap-6 rounded-full border border-black p-2 min-w-56">
                                <Image src="/metamask.png" width={30} height={30} alt="Metamask Logo" />
                                <div className="font-bold">
                                    Metamask
                                </div>
                            </button>
                            <div className="text-sm p-2 text-center">
                                This wallet becomes your primary connected address. If you own an ENS domain, we&apos;ll make that username. You can change this later though!
                            </div>
                            <div className="text-sm p-2 text-center">
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