"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Reviews, WriteReview } from '@/components';
import { fetchProtocolDetails, fetchUserReviewForAProtocol } from '@/app/_actions/queries';
import { useMetaMask } from '@/hooks/useMetamask';
import ProtocolSkeleton from '@/components/skeletons/protocol';
import ReviewsSkeleton from '@/components/skeletons/reviews';

type Props = {
    params: {
        protocol: string;
    }
}

export default function Protocol({ params }: Props) {
    const [writeReview, setWriteReview] = useState(false);
    const [protocolDetails, setProtocolDetails] = useState<Protocol>();
    const [userReview, setUserReview] = useState<Review>();
    const [loading, setLoading] = useState<Boolean>(true);
    const { userId } = useMetaMask();

    useEffect(() => {
        const getProtocolDetails = async () => {
            const data = await fetchProtocolDetails(params.protocol);
            console.log(data);
            setProtocolDetails(data);
            if (userId) {
                const review = await fetchUserReviewForAProtocol(userId, data.id);
                setUserReview(review);
            }
            setLoading(false);
        };
        getProtocolDetails();
    }, [params.protocol, userId]);


    const toggleWriteReview = () => {
        setWriteReview(prev => !prev);
    };

    if (loading) {
        return (
            <div>
                <ProtocolSkeleton />
                <ReviewsSkeleton />
            </div>
        )
    }

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
                            {Array.from({ length: protocolDetails?.avg_rating ?? 0 }, (_, i) => (
                                <Image key={i} src="/ratingStar.png" width={20} height={20} alt="Rating" />
                            ))}
                            <div>
                                {`${protocolDetails?.avg_rating === null ? 0 : protocolDetails?.avg_rating} (${protocolDetails?.review_count === null ? 0 : protocolDetails?.review_count} reviews)`}
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
            {!writeReview ? (
                <div className='p-4 w-[20%] flex justify-center ml-24 rounded-md mt-12 bg-[#B2F1A8] text-black hover:cursor-pointer' onClick={toggleWriteReview}>
                    <button>{userReview ? 'Update Review' : 'Write a Review'}</button>
                </div>
            ) : (
                <div className='p-4 w-[20%] flex justify-center ml-24 rounded-md mt-12 bg-[#B2F1A8] text-black hover:cursor-pointer' onClick={toggleWriteReview}>
                    <button>Cancel</button>
                </div>
            )}
            {writeReview ? <WriteReview  toggleWriteReview={toggleWriteReview} protocol_id={protocolDetails?.id ?? 0} existingReview={userReview} /> : <Reviews avg_rating={protocolDetails?.avg_rating === null ? 0 : protocolDetails?.avg_rating} protocol_id={protocolDetails?.id ?? 0} />}
        </div>
    );
}
