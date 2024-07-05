"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Reviews, WriteReview } from '@/components';
import { fetchProtocolDetails } from '@/app/_actions/queries';

type Props = {
    params: {
        protocol: string;
    }
}

export default function Protocol({ params }: Props) {
    const [writeReview, setWriteReview] = useState(false);
    const [protocolDetails, setProtocolDetails] = useState<Protocol>();

    useEffect(() => {
        const getProtocolDetails = async () => {
            const data = await fetchProtocolDetails(params.protocol);
            console.log(data)
            setProtocolDetails(data);
        }
        getProtocolDetails();
    }, [])

    return (
        <div className="flex flex-col" style={{ fontFamily: 'Montserrat' }}>
            <div className='flex flex-row items-center py-20 justify-evenly border-b-[1px] border-[#B2F1A8]'>
                <div className="flex flex-row gap-6">
                    <Image src={`/protocols/${protocolDetails?.image_url}`} alt="uniswap logo" width={100} height={100} className="bg-white rounded-lg" />
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl">{protocolDetails?.protocol_name}</div>
                        <div>
                            Algoritmic, autonomous interest rate protocol
                        </div>
                        <div className='flex flex-row gap-1'>
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <Image src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            <div>
                                4.9  (32 reviews)
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row py-4 px-4 gap-8 border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8] rounded-lg'>
                    <div className=''>
                        <Image src="/redirect.png" width={35} height={35} alt="Rating" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>
                            {protocolDetails?.website_url}
                        </div>
                        <div>
                            Visit
                        </div>
                    </div>
                </div>
            </div>
            {!writeReview ? <div className='p-4 w-[20%] flex justify-center ml-24 rounded-md mt-12 bg-[#B2F1A8] text-black hover:cursor-pointer' onClick={() => setWriteReview(true)}>
                <button>WRITE A REVIEW</button>
            </div> : <div className='p-4 w-[20%] flex justify-center ml-24 rounded-md mt-12 bg-[#B2F1A8] text-black hover:cursor-pointer' onClick={() => setWriteReview(false)}>
                <button>Cancel</button>
            </div>}
            {writeReview ? <WriteReview /> : <Reviews />}
        </div>
    )
}