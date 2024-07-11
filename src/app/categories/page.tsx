"use client"
import { Topics } from "@/utils/utils";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchProtocolsAndCategories } from '@/app/_actions/queries';
import { useState, useEffect } from 'react';
import CategoriesSkeleton from "@/components/skeletons/categories";

export default function Categories() {

    const [protocols, setProtocols] = useState<Protocol[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        const getProtocolsAndCategories = async () => {
            const res = await fetchProtocolsAndCategories();
            setProtocols(res);
            setLoading(false);
        }
        getProtocolsAndCategories();
    }, [])

    const router = useRouter();

    const filterProtocols = protocols.filter(protocol => protocol.protocol_name.toLowerCase().includes(searchQuery.toLowerCase()));

    if (loading) {
        return <CategoriesSkeleton />;
    }

    return (
        <div className="flex flex-col items-center min-h-screen w-full" style={{ fontFamily: 'Montserrat' }}>
            <div className="flex relative flex-col w-full items-center mt-16">
                <div className="flex flex-row w-1/2 rounded-3xl py-1 px-5 items-center justify-center bg-white border shadow-[0_0_20px_#B2F1A8]">
                    <input
                        className="flex ml-4 w-full py-1.5 bg-transparent focus:outline-none text-black"
                        placeholder="Search..."
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <IoIosSearch size={25} className="text-neutral-400" />
                </div>
                {searchQuery && (
                    <div className="absolute text-black top-full flex flex-col z-30 mt-1 max-h-[13rem] border border-neutral-100 bg-white/90 backdrop-blur-lg w-1/2 rounded-xl shadow-lg scroll-smooth scrollbar py-2 px-8">
                        {
                            filterProtocols.length ?
                                filterProtocols.map((protocol, index) => {
                                    return (
                                        <div onClick={() => router.push(`/protocol/${protocol.protocol_name}`)} key={index} className="border-b py-2 border-black text-lg hover:cursor-pointer flex flex-row gap-4 items-center" style={{ fontWeight: '800' }}>
                                            <div>
                                                <Image src={`/protocols/${protocol.protocol_name}.svg`} width={25} height={25} alt="protocol logo" />
                                            </div>
                                            <div>
                                                {protocol.protocol_name}
                                            </div>
                                        </div>
                                    )
                                }) :
                                <p className="text-lg py-2 text-neutral-800 font-primary">No creator found</p>
                        }
                    </div>
                )}
            </div>
            <div className="mt-16 overflow-hidden w-full">
                <div className="flex flex-row animate-marquee gap-10">
                    {
                        Topics.map((topic, index) => {
                            return (
                                <div key={index} className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-2 px-4 md:px-6 rounded-tr-2xl rounded-br-2xl whitespace-nowrap">
                                    <div className="flex-shrink-0">
                                        <Image src={`/${topic.icon}`} width={20} height={20} alt={`${topic.name} Logo`} />
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
            <div className="flex flex-row mt-16 justify-around px-8">
                <div className="flex flex-col w-1/3 gap-8">
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-3">
                        <div className="flex flex-col gap-2">
                            <div className="text-3xl font-bold">
                                COMPANY DATA
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-3xl font-bold">
                                Bio
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-3xl font-bold">
                                Social
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-3">
                        <div className="flex flex-col gap-2">
                            <div className="text-3xl font-bold">
                                Company Data
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-3xl font-bold">
                                Bio
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-3xl font-bold">
                                Social
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[50%] gap-12">
                    {protocols.map((protocol, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-4 border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8] rounded-lg p-8">
                                <div className="flex flex-row gap-6 hover:cursor-pointer" onClick={() => router.push(`/protocol/${protocol.protocol_name}`)}>
                                    <Image src={`/protocols/${protocol.protocol_name}.svg`} alt="protocol logo" width={100} height={100} className="bg-white rounded-lg" />
                                    <div className="flex flex-col gap-2">
                                        <div className="text-2xl">{protocol.protocol_name}</div>
                                        <div className='flex flex-row gap-1'>
                                            {Array.from({ length: protocol.avg_rating ?? 0 }, (_, i) => (
                                                <Image key={i} src="/ratingStar.svg" width={20} height={20} alt="Rating" />
                                            ))}
                                            <div>
                                                {`${protocol?.avg_rating.toFixed(2)} (${protocol?.review_count} reviews)`}
                                            </div>
                                        </div>
                                        <div>
                                            Algoritmic, autonomous interest rate protocol
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b-[1px] border-b-[#B2F1A8] ">
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-6 items-center">
                                        <div>
                                            <Image src="/envelope-solid.png" height={10} width={20} alt="envelope logo" />
                                        </div>
                                        <div>
                                            <Image src="/globe-solid.png" height={10} width={20} alt="globe logo" />
                                        </div>
                                        <div>
                                            <Image src="/phone-solid.png" height={10} width={20} alt="phone logo" />
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        {protocol.ProtocolCategories?.map((protocolCategory, index) => {
                                            return (
                                                <div key={index} className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-1 px-4 rounded-tr-2xl rounded-br-2xl whitespace-nowrap">
                                                    <div className="flex-shrink-0">
                                                        <Image src={`/star.svg`} width={20} height={20} alt={`star Logo`} />
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        {protocolCategory.Categories.category_name}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}