"use client"
import { formatAddress, formatDate } from '@/utils/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchUserReviews } from '@/app/_actions/queries';
import SkeletonLoader from '@/components/skeletons/profile';

type Props = {
    params: {
        address: string;
    }
}

export default function Profile({ params }: Props) {

    const [reviews, setReviews] = useState<Review[]>([]);
    const [avgScore, setAvgScore] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchReviews = async () => {
            const { reviews, avg_score } = await fetchUserReviews(params.address);
            setReviews(reviews);
            setAvgScore(avg_score);
            setLoading(false);
        }
        fetchReviews();
    }, [params.address]);

    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Montserrat' }}>
            <div className="flex flex-row justify-evenly items-center p-8 border-b-[1px] border-b-[#B2F1A8]">
                <div className="flex flex-row items-center gap-8">
                    <img className="bg-white rounded-lg" src="/profile.svg" height={120} width={120} alt="profile logo" />
                    <div className="text-3xl">
                        {formatAddress(params.address)}
                    </div>
                </div>
                <div className="flex flex-row gap-12">
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-4xl" style={{ fontFamily: 'Druk Trial' }}>
                            REVIEWS
                        </div>
                        <div className="text-2xl">
                            {reviews.length}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-4xl" style={{ fontFamily: 'Druk Trial' }}>
                            AVERAGE SCORE
                        </div>
                        <div className="text-2xl">
                            {avgScore.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-8 justify-center items-center gap-8">
                {reviews.length === 0 ? (
                    <div className="text-2xl">No reviews</div>
                ) : (
                    reviews.map((review, index) => {
                        return (
                            <div key={index} className="flex flex-col rounded-md border border-[#B2F1A8] p-4 w-1/2">
                                <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                                    <Image className="bg-white rounded-lg" src="/profile.svg" height={40} width={40} alt="profile logo" />
                                    <div className="text-lg">
                                        {formatAddress(params.address)}
                                    </div>
                                </div>
                                <div className='flex flex-col pt-4 gap-4'>
                                    <div className="flex flex-row justify-between">
                                        <div className='flex flex-row gap-1'>
                                            {Array.from({ length: review.rating }).map((_, i) => (
                                                <Image key={i} src={`/stars/star_${review.rating}.svg`} width={20} height={20} alt="Rating" />
                                            ))}
                                        </div>
                                        <div>
                                            {formatDate(review.updated_at)}
                                        </div>
                                    </div>
                                    <div>
                                        {review.Protocols?.protocol_name}
                                    </div>
                                    <div>
                                        {review.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
