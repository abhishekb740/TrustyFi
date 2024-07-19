"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Reviews, WriteReview, Notification } from '@/components';
import { fetchProtocolDetails, fetchUserReviewForAProtocol } from '@/app/_actions/queries';
import { useMetaMask } from '@/hooks/useMetamask';
import ProtocolSkeleton from '@/components/skeletons/protocol';
import ReviewsSkeleton from '@/components/skeletons/reviews';
import formatUrl from '@/utils/utils';
import WithAuth from "@/components/withAuth";

type Props = {
    params: {
        protocol: string;
    }
}

function Protocol({ params }: Props) {
    const [writeReview, setWriteReview] = useState(false);
    const [protocolDetails, setProtocolDetails] = useState<Protocol>();
    const [userReview, setUserReview] = useState<Review>();
    const [loading, setLoading] = useState<boolean>(true);
    const [showNotification, setShowNotification] = useState(false);
    const { userId, profilePic, setProfilePic } = useMetaMask();

    useEffect(() => {
        const getProtocolDetails = async () => {
            const data = await fetchProtocolDetails(decodeURIComponent(params.protocol));
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


    const toggleWriteReview = (isSuccess: boolean) => {
        setWriteReview(prev => !prev);
        if(isSuccess){
            setShowNotification(true);
        }
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
            <Notification message="Review submitted successfully" show={showNotification} onClose={() => { setShowNotification(false) }} isSuccess={true} />
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
                                <Image key={i} src={`/stars/star_${Math.round(protocolDetails?.avg_rating ?? 0)}.svg`} width={20} height={20} alt="Rating" />
                            ))}
                            <div className='ml-3'>
                                {`${protocolDetails?.avg_rating === null ? 0 : protocolDetails?.avg_rating?.toFixed(2)} (${protocolDetails?.review_count === null ? 0 : protocolDetails?.review_count} reviews)`}
                            </div>
                        </div>
                    </div>
                </div>
                <a href={protocolDetails?.website_url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer" className='flex flex-row py-4 px-4 gap-8 border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8] rounded-lg' >
                    <div className='flex flex-row items-center'>
                        <Image src="/redirect.svg" width={35} height={35} alt="Rating" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div>
                            {formatUrl(protocolDetails?.website_url ?? "")}
                        </div>
                        <div>
                            Visit site
                        </div>
                    </div>
                </a>
            </div>
            {!writeReview ? (
                <div className='p-4 w-[20%] flex justify-center ml-24 rounded-md mt-12 bg-[#B2F1A8] text-black hover:cursor-pointer' onClick={() => toggleWriteReview(false)}>
                    <button>{userReview ? 'Update Review' : 'Write a Review'}</button>
                </div>
            ) : (
                <div className='p-4 w-[20%] flex justify-center ml-24 rounded-md mt-12 bg-[#B2F1A8] text-black hover:cursor-pointer' onClick={() => toggleWriteReview(false)}>
                    <button>Cancel</button>
                </div>
            )}
            {writeReview ? <WriteReview toggleWriteReview={toggleWriteReview} protocol_id={protocolDetails?.id ?? 0} existingReview={userReview} /> : <Reviews x={protocolDetails?.x ?? ""} telegram={protocolDetails?.telegram ?? ""} discord={protocolDetails?.discord ?? ""} description={protocolDetails?.protocol_description ?? ""} avg_rating={protocolDetails?.avg_rating === null ? 0 : Number(protocolDetails?.avg_rating?.toFixed(2))} protocol_id={protocolDetails?.id ?? 0} />}
        </div>
    );
}

export default WithAuth(Protocol);