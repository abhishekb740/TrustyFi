import Image from 'next/image';
import { formatAddress, formatDate } from '@/utils/utils';
import { fetchReviewsForAProtocol } from '@/app/_actions/queries';
import { useEffect, useState, useRef } from 'react';
import ReviewsSkeleton from '@/components/skeletons/reviews';

type Props = {
    protocol_id: number;
    avg_rating: number | undefined;
};

export default function Reviews({ protocol_id, avg_rating }: Props) {
    const [reviews, setReviews] = useState<CategorizedReviews>({ 1: [], 2: [], 3: [], 4: [], 5: [] });
    const [loading, setLoading] = useState(true);
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState<boolean>(false);
    const dropdownFilterRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const getReviews = async () => {
            const data = await fetchReviewsForAProtocol(protocol_id);
            setReviews(data);
            setLoading(false);
        };
        getReviews();
    }, [protocol_id]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownFilterRef.current && !dropdownFilterRef.current.contains(event.target)) {
                setIsFilterDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const totalReviews = reviews[1].length + reviews[2].length + reviews[3].length + reviews[4].length + reviews[5].length;

    const handleRatingChange = (rating: number) => {
        setSelectedRatings(prev =>
            prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
        );
    };

    const filteredReviews = selectedRatings.length === 0
        ? Object.values(reviews).flat()
        : selectedRatings.flatMap(rating => reviews[rating as keyof CategorizedReviews]);

    if (loading) {
        return <ReviewsSkeleton />;
    }

    return (
        <div>
            <div className='flex flex-row justify-evenly mt-24'>
                <div className='flex flex-col w-[40%]'>
                    <div className='flex flex-col p-8 border border-[#B2F1A8] rounded-lg gap-8'>
                        <div className='flex flex-col gap-4 items-start'>
                            <div className='flex flex-row gap-8 justify-center items-center'>
                                <div className='text-3xl'>
                                    REVIEWS
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <div className='flex flex-row gap-1'>
                                        {Array.from({ length: avg_rating ?? 0 }, (_, i) => {
                                            return (
                                                <Image key={i} src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                            );
                                        })}
                                    </div>
                                    <div>
                                        {avg_rating}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {totalReviews} reviews
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-4'>
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <div key={rating} className='flex flex-row gap-6'>
                                    <div className='flex flex-row gap-2'>
                                        <input
                                            type='checkbox'
                                            className=''
                                            checked={selectedRatings.includes(rating)}
                                            onChange={() => handleRatingChange(rating)}
                                        />
                                        <div>
                                            {rating} stars
                                        </div>
                                    </div>
                                    <div className='flex w-[70%] rounded-full border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8]'>
                                        <div
                                            className='bg-[#B2F1A8] rounded-full'
                                            style={{
                                                width: `${totalReviews === 0 ? 0 : (reviews[rating as keyof CategorizedReviews].length / totalReviews) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div>
                                        {totalReviews === 0 ? 0 : Math.round((reviews[rating as keyof CategorizedReviews].length / totalReviews) * 100)}%
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className={`flex flex-row items-center gap-4 bg-[#B2F1A8] py-2 ${isFilterDropdownOpen ? "rounded-t-lg" : "rounded-lg"} px-4`} ref={dropdownFilterRef} onClick={() => setIsFilterDropdownOpen(true)}>
                                <div>
                                    <Image src="/filter.png" width={20} height={20} alt="Filter Logo" />
                                </div>
                                <div className='text-black text-sm font-bold'>
                                    FILTER
                                </div>
                            </div>
                            <div className={`${isFilterDropdownOpen ? "block absolute" : "hidden"} bg-[#B2F1A8] flex flex-col mt-9 z-10 text-black w-1/4 rounded-r-lg rounded-bl-lg py-6 gap-4 `} >
                                <div className='flex flex-col'>
                                    <div className='font-bold text-xl pl-4' style={{ fontFamily: "Dunk Trial" }}>
                                        Rating
                                    </div>
                                    <div className='flex flex-row pl-4'>

                                    </div>
                                </div>
                                <div className='flex flex-col '>
                                    <div className='font-bold text-xl pl-4' style={{ fontFamily: "Dunk Trial" }}>
                                        Recomended
                                    </div>
                                    <div className='flex flex-col gap-1 pl-4'>
                                        <div className='flex flex-row gap-2'>
                                            <input type='radio' />
                                            <label>Verified</label>
                                        </div>
                                        <div className='flex flex-row gap-2'>
                                            <input type='radio' />
                                            <label>All</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='font-bold text-xl pl-4' style={{ fontFamily: "Dunk Trial" }} >
                                            Publication Date
                                        </div>
                                        <div className='flex flex-col gap-1 pl-4'>
                                            <div className='flex flex-row gap-2'>
                                                <input type='radio' />
                                                <label>Last month</label>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <input type='radio' />
                                                <label>last Two Month</label>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <input type='radio' />
                                                <label>Last Three Month</label>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <input type='radio' />
                                                <label>All</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex pr-8'>
                                        <div className='py-1 px-4 rounded-full border border-black'>
                                            Show
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    Sort by
                                </div>
                                <div className='bg-[#B2F1A8] text-black rounded-lg p-2 text-xs font-bold'>
                                    MORE RELEVANT
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-24 gap-4'>
                        {filteredReviews.map((review, index) => (
                            <div key={index} className="flex flex-col rounded-md border border-[#B2F1A8] p-4 w-full">
                                <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                                    <Image className="bg-white rounded-lg" src="/profile.png" height={40} width={40} alt="profile logo" />
                                    <div className="text-lg">
                                        {formatAddress(review?.user_wallet_address ?? '')}
                                    </div>
                                </div>
                                <div className='flex flex-col pt-4 gap-4'>
                                    <div className="flex flex-row justify-between">
                                        <div className='flex flex-row gap-1'>
                                            {Array.from({ length: review.rating }).map((_, i) => (
                                                <Image key={i} src="/ratingStar.png" width={20} height={20} alt="Rating" />
                                            ))}
                                        </div>
                                        <div>
                                            {formatDate(review.created_at)}
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
                        ))}
                    </div>
                </div>
                <div className='flex flex-col w-[40%] gap-12'>
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-12 items-center">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Company Data
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Bio
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Social
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-12 items-center">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Category
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Security
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-3xl font-bold">
                                Performance
                            </div>
                            <div>
                                Sed vel ex elit. Sed condimentum lacus odio, vel pretium purus placerat sed. Mauris vel purus in nisi finibus condimentum at eget orci.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
