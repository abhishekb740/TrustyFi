"use client"

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const Protocols = [
    {
        name: "Uniswap",
        image: "uniswap.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Aave",
        image: "aave.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Curve",
        image: "curve.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Lido Finance",
        image: "lido.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Compound Finance",
        image: "compound.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "EigenLayer",
        image: "eigen.png",
        description: "Algoritmic, autonomous interest rate protocol",
    }
]

const Topics = [
    {
        name: "Yield Farming",
        icon: 'star.png'
    },
    {
        name: "LaunchPads",
        icon: 'star.png'
    },
    {
        name: "DEX",
        icon: 'star.png'
    },
    {
        name: 'AMM',
        icon: 'star.png'
    },
    {
        name: 'RWA',
        icon: 'star.png'
    },
    {
        name: 'AI',
        icon: 'star.png'
    },
    {
        name: 'NFT Marketplace',
        icon: 'star.png'
    },
    {
        name: 'Derivatives',
        icon: 'star.png'
    }
]

export default function Hero() {
    return (
        <main className="flex flex-col justify-center items-center pt-20">
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xl">LET'S MAKE DEFI MORE</div>
                    <div className="flex flex-col items-center">
                        <div className="text-7xl">VERIFIED REVIEWS</div>
                        <div className="text-7xl">FOR EVERY <span className="text-[#B2F1A8]"> DEFI PROTOCOLS </span> </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div className="text-2xl">
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
            <div className="w-full">
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
            <div className="w-full mt-8">
                <div className="flex flex-row justify-end pr-12">
                    <button>
                        See all Categories
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-12">
                <div className="text-4xl font-bold">
                    POPULAR WEB3 PRODUCTS
                </div>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 md:grid-cols-2">
                    {
                        Protocols.map((protocol, index) => {
                            return (
                                <div key={index} className="flex flex-row border-[#B2F1A8] border-[1px] rounded-md max-w-[27rem] shadow-[0px_2px_6px_#B2F1A8]">
                                    <div className="bg-[white] w-36 flex justify-center items-center rounded-md">
                                        <Image className="object-contain" src={`/${protocol.image}`} width={80} height={80} alt={`${protocol.name} Logo`} />
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
            <div className="flex flex-col mt-16 gap-16 justify-center items-center">
                <div className="text-4xl font-bold">
                    HOW TRUSTIFY WORKS
                </div>
                <div className="flex flex-col gap-12 items-center justify-center">
                    <div className="flex flex-row border border-[#B2F1A8] p-4 rounded-md max-w-[50%] gap-4">
                        <div className="w-full flex justify-center items-center">
                            <Image className="object-contain" src="/orb1.png" width={200} height={200} alt="Orb" />
                        </div>
                        <div className="flex flex-col gap-4 justify-center">
                            <div>
                                Find your favorite protocol
                            </div>
                            <div>
                                Search for your favorite protocol on our platform and check its page to see what other users think about it. Can't find the protocol you're looking for? Send us an email at info@trustyfi.io to suggest it, and we will contact them to bring it to our platform.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row border border-[#B2F1A8] p-4 rounded-md max-w-[50%] gap-4">
                        <div className="w-full flex justify-center items-center">
                            <Image className="object-contain" src="/orb2.png" width={200} height={200} alt="Orb" />
                        </div>
                        <div className="flex flex-col gap-4 justify-center">
                            <div>
                                Find your favorite protocol
                            </div>
                            <div>
                                Search for your favorite protocol on our platform and check its page to see what other users think about it. Can't find the protocol you're looking for? Send us an email at info@trustyfi.io to suggest it, and we will contact them to bring it to our platform.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row border border-[#B2F1A8] p-4 rounded-md max-w-[50%] gap-4">
                        <div className="w-full flex justify-center items-center">
                            <Image className="object-contain" src="/orb3.png" width={200} height={200} alt="Orb" />
                        </div>
                        <div className="flex flex-col gap-4 justify-center">
                            <div>
                                Find your favorite protocol
                            </div>
                            <div>
                                Search for your favorite protocol on our platform and check its page to see what other users think about it. Can't find the protocol you're looking for? Send us an email at info@trustyfi.io to suggest it, and we will contact them to bring it to our platform.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}