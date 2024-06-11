"use client"

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

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
    }
]

export default function Hero() {
    return (
        <main className="flex flex-col justify-center items-center pt-24">
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
                                            <Image src={`/${topic.icon}`} width={20} height={20} alt="Trustify Logo" />
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
        </main>
    )
}