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

    useEffect(() => {
        const getProtocolsAndCategories = async () => {
            const res = await fetchProtocolsAndCategories();
            setProtocols(res);
            setLoading(false);
        }
        getProtocolsAndCategories();
    }, [])

    const router = useRouter();

    if (loading) {
        return <CategoriesSkeleton />;
    }

    return (
        <div className="flex flex-col items-center min-h-screen w-full" style={{ fontFamily: 'Montserrat' }}>
            <div className="flex flex-col w-full items-center mt-16">
                <div className="flex flex-row w-1/2 rounded-3xl py-1 px-5 items-center justify-center bg-white border shadow-[0_0_20px_#B2F1A8]">
                    <input
                        className="flex ml-4 w-full py-1.5 bg-transparent focus:outline-none text-black"
                        placeholder="Search..."
                    />
                    <IoIosSearch size={25} className="text-neutral-400" />
                </div>
                <div className="mt-16 overflow-hidden w-full">
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
            <div className="flex flex-row mt-16 justify-between px-8">
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
                                    <Image src={`/protocols/${protocol.protocol_name}.png`} alt="protocol logo" width={100} height={100} className="bg-white rounded-lg" />
                                    <div className="flex flex-col gap-2">
                                        <div className="text-2xl">{protocol.protocol_name}</div>
                                        <div className='flex flex-row gap-1'>
                                            {Array.from({ length: protocol.avg_rating ?? 0 }, (_, i) => (
                                                <Image key={i} src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                            ))}
                                            <div>
                                                {`${protocol?.avg_rating} (${protocol?.review_count} reviews)`}
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
                                                <div key={index} className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-1 px-4 rounded-tr-2xl rounded-br-2xl">
                                                    <div>
                                                        <Image src={`/star.png`} width={20} height={20} alt={`star Logo`} />
                                                    </div>
                                                    <div>
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
