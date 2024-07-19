import Image from 'next/image';
import { formatAddress, formatDate } from '@/utils/utils';
import { fetchReviewsForAProtocol } from '@/app/_actions/queries';
import { useEffect, useState, useRef } from 'react';
import ReviewsSkeleton from '@/components/skeletons/reviews';
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { generateProfilePic } from '@/utils/utils';

type Props = {
    protocol_id: number;
    avg_rating: number;
    description: string;
    x: string;
    telegram: string;
    discord: string;
};

export default function Reviews({ protocol_id, avg_rating, description, x, telegram, discord }: Props) {
    const [reviews, setReviews] = useState<CategorizedReviews>({ 1: [], 2: [], 3: [], 4: [], 5: [] });
    const [loading, setLoading] = useState(true);
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<number | null>(null);
    const [publicationDate, setPublicationDate] = useState<string>('all');
    const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [previousSortOption, setPreviousSortOption] = useState<string | null>(null);
    const [currentSortOption, setCurrentSortOption] = useState<string | null>(null);

    const toggleSortDropdown = () => {
        setIsSortDropdownOpen(prev => !prev);
    };

    const clearFilters = () => {
        setSelectedRatings([]);
        setPublicationDate('all');
        setSelectedTab(null);
        setCurrentSortOption(null);
    }

    const handleSortOption = (option: string) => {
        if (currentSortOption === option) {
            setCurrentSortOption(null);
            setPreviousSortOption(null);
            filterReviews();
        } else {
            setPreviousSortOption(option);
            setCurrentSortOption(option);
            if (option === 'mostRecent') {
                setFilteredReviews(prevReviews => [...prevReviews].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()));
            }
            // Add more sorting logic here if needed for "moreRelevant"
        }
    };

    const handleTabRating = (rating: number) => {
        setSelectedTab(rating);
    }

    useEffect(() => {
        const getReviews = async () => {
            const data = await fetchReviewsForAProtocol(protocol_id);
            setReviews(data);
            setLoading(false);
        };
        getReviews();
    }, [protocol_id, avg_rating]);

    const toggleFilterDropdown = () => {
        setIsFilterDropdownOpen(prev => !prev);
    }

    const totalReviews = reviews[1].length + reviews[2].length + reviews[3].length + reviews[4].length + reviews[5].length;

    const handleRatingChange = (rating: number) => {
        setSelectedRatings(prev =>
            prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
        );
    };

    const filterReviews = () => {
        let result = Object.values(reviews).flat();

        if (selectedTab !== null) {
            result = result.filter(review => review.rating === selectedTab);
        }

        // Filter the reviews based on the publication date
        if (publicationDate === 'lastMonth') {
            result = result.filter(review => new Date(review.updated_at).getTime() > new Date().setMonth(new Date().getMonth() - 1));
        } else if (publicationDate === 'lastTwoMonths') {
            result = result.filter(review => new Date(review.updated_at).getTime() > new Date().setMonth(new Date().getMonth() - 2));
        } else if (publicationDate === 'lastThreeMonths') {
            result = result.filter(review => new Date(review.updated_at).getTime() > new Date().setMonth(new Date().getMonth() - 3));
        }

        if (currentSortOption === 'mostRecent') {
            result = result.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        }

        setFilteredReviews(result);
        setIsFilterDropdownOpen(false);
    }

    useEffect(() => {
        if (selectedRatings.length === 0) {
            setFilteredReviews(Object.values(reviews).flat());
        } else {
            setFilteredReviews(selectedRatings.flatMap(rating => reviews[rating as keyof CategorizedReviews]));
        }
    }, [reviews, selectedRatings]);

    if (loading) {
        return <ReviewsSkeleton />;
    }

    return (
        <div>
            <div className='flex flex-col xl:justify-evenly mt-24 xl:flex-row gap-12'>
                <div className='flex flex-col w-[80%] xl:w-[45%] gap-12 items-center mx-auto xl:mx-0'>
                    <div className='flex flex-col p-8 border border-[#B2F1A8] rounded-lg gap-8 w-full'>
                        <div className='flex flex-col gap-4 items-start'>
                            <div className='flex flex-row gap-8 justify-center items-center'>
                                <div className='text-3xl'>
                                    REVIEWS
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <div className='flex flex-row gap-1'>
                                        <Image src={`/stars/star_${Math.round(avg_rating ?? 0)}.svg`} width={20} height={20} alt="Rating" />
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
                                    <div className='flex flex-row gap-2 flex-1'>
                                        <input
                                            type='checkbox'
                                            className=''
                                            checked={selectedRatings.includes(rating)}
                                            onChange={() => handleRatingChange(rating)}
                                        />
                                        <div className=''>
                                            {rating} stars
                                        </div>
                                    </div>
                                    <div className='flex w-[65%] h-[1.5rem] rounded-full border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8]'>
                                        <div
                                            className='bg-[#B2F1A8] rounded-full'
                                            style={{
                                                width: `${totalReviews === 0 ? 0 : (reviews[rating as keyof CategorizedReviews].length / totalReviews) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className='w-[10%]'>
                                        {totalReviews === 0 ? 0 : Math.round((reviews[rating as keyof CategorizedReviews].length / totalReviews) * 100)}%
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className={`flex flex-row items-center gap-4 bg-[#B2F1A8] py-2 ${isFilterDropdownOpen ? "rounded-t-lg" : "rounded-lg"} px-4 hover:cursor-pointer`} onClick={toggleFilterDropdown}>
                                <div>
                                    <Image src="/filter.svg" width={20} height={20} alt="Filter Logo" />
                                </div>
                                <div className='text-black text-sm font-bold'>
                                    FILTER
                                </div>
                            </div>
                            <div className={`${isFilterDropdownOpen ? "block absolute" : "hidden"} bg-[#B2F1A8] flex flex-col mt-9 z-10 text-black w-1/4 rounded-r-lg rounded-bl-lg py-6 gap-4 `} >
                                <div className='flex flex-col border-b border-[black] justify-end'>
                                    <div className='font-bold text-xl pl-4' style={{ fontFamily: "Dunk Trial" }}>
                                        Rating
                                    </div>
                                    <div className='flex flex-row justify-evenly pt-2 items-center'>
                                        <div className={`flex flex-row gap-2 p-2 ${selectedTab === 5 ? "border-b-[3px] border-[#9482F2]" : ""}`} onClick={() => handleTabRating(5)}>
                                            <div>
                                                5
                                            </div>
                                            <Image src="/stars/star_5.svg" width={20} height={20} alt="Rating" />
                                        </div>
                                        <div className={`flex flex-row gap-2 p-2 ${selectedTab === 4 ? "border-b-[3px] border-[#9482F2]" : ""}`} onClick={() => handleTabRating(4)}>
                                            <div>
                                                4
                                            </div>
                                            <Image src="/stars/star_4.svg" width={20} height={20} alt="Rating" />
                                        </div>
                                        <div className={`flex flex-row gap-2 p-2 ${selectedTab === 3 ? "border-b-[3px] border-[#9482F2]" : ""}`} onClick={() => handleTabRating(3)}>
                                            <div>
                                                3
                                            </div>
                                            <Image src="/stars/star_3.svg" width={20} height={20} alt="Rating" />
                                        </div>
                                        <div className={`flex flex-row gap-2 p-2 ${selectedTab === 2 ? "border-b-[3px] border-[#9482F2]" : ""}`} onClick={() => handleTabRating(2)}>
                                            <div>
                                                2
                                            </div>
                                            <Image src="/stars/star_2.svg" width={20} height={20} alt="Rating" />
                                        </div>
                                        <div className={`flex flex-row gap-2 p-2 ${selectedTab === 1 ? "border-b-[3px] border-[#9482F2]" : ""}`} onClick={() => handleTabRating(1)}>
                                            <div>
                                                1
                                            </div>
                                            <Image src="/stars/star_1.svg" width={20} height={20} alt="Rating" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='flex flex-col '>
                                    <div className='font-bold text-xl pl-4' style={{ fontFamily: "Dunk Trial" }}>
                                        Recommended
                                    </div>
                                    <div className='flex flex-col gap-1 pl-4'>
                                        <div className='flex flex-row gap-2'>
                                            <input
                                                type='radio'
                                                name='recommended'
                                                value='verified'
                                                checked={recommended === 'verified'}
                                                onChange={(e) => setRecommended(e.target.value)}
                                            />
                                            <label>Verified</label>
                                        </div>
                                        <div className='flex flex-row gap-2'>
                                            <input
                                                type='radio'
                                                name='recommended'
                                                value='all'
                                                checked={recommended === 'all'}
                                                onChange={(e) => setRecommended(e.target.value)}
                                            />
                                            <label>All</label>
                                        </div>
                                    </div>
                                </div> */}
                                <div className='flex flex-row items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='font-bold text-xl pl-4' style={{ fontFamily: "Dunk Trial" }} >
                                            Publication Date
                                        </div>
                                        <div className='flex flex-col gap-1 pl-4'>
                                            <div className='flex flex-row gap-2'>
                                                <input
                                                    type='radio'
                                                    name='publicationDate'
                                                    value='lastMonth'
                                                    checked={publicationDate === 'lastMonth'}
                                                    onChange={(e) => setPublicationDate(e.target.value)}
                                                />
                                                <label>Last month</label>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <input
                                                    type='radio'
                                                    name='publicationDate'
                                                    value='lastTwoMonths'
                                                    checked={publicationDate === 'lastTwoMonths'}
                                                    onChange={(e) => setPublicationDate(e.target.value)}
                                                />
                                                <label>Last Two Months</label>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <input
                                                    type='radio'
                                                    name='publicationDate'
                                                    value='lastThreeMonths'
                                                    checked={publicationDate === 'lastThreeMonths'}
                                                    onChange={(e) => setPublicationDate(e.target.value)}
                                                />
                                                <label>Last Three Months</label>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <input
                                                    type='radio'
                                                    name='publicationDate'
                                                    value='all'
                                                    checked={publicationDate === 'all'}
                                                    onChange={(e) => setPublicationDate(e.target.value)}
                                                />
                                                <label>All</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-around'>
                                    <div className='py-1 px-4 rounded-full border border-black hover:cursor-pointer' onClick={clearFilters}>
                                        Clear
                                    </div>
                                    <div className='py-1 px-4 rounded-full border border-black hover:cursor-pointer' onClick={filterReviews}>
                                        Show
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    Sort by
                                </div>
                                <div className="relative">
                                    <div className={`${isSortDropdownOpen ? "rounded-t-lg" : "rounded-lg"} bg-[#B2F1A8] text-black p-2 text-xs font-bold cursor-pointer text-center`} onClick={toggleSortDropdown}>
                                        <div>
                                            MORE RELEVANT
                                        </div>
                                    </div>
                                    <div className={`absolute p-2 bg-[#B2F1A8] text-black w-[calc(100%+1rem)] left-[-1rem] rounded-tl-lg rounded-b-lg z-10 shadow-lg flex flex-col justify-center ${isSortDropdownOpen ? 'block z-10' : 'hidden'}`}>
                                        <div className="p-2 cursor-pointer text-xs flex flex-row items-center gap-1">
                                            <input
                                                type='radio'
                                                name='sortOption'
                                                value='moreRelevant'
                                                checked={previousSortOption === 'moreRelevant'}
                                                onChange={(e) => handleSortOption(e.target.value)}
                                            />
                                            <label>More Relevant</label>
                                        </div>
                                        <div className="p-2 cursor-pointer text-xs flex flex-row items-center gap-1">
                                            <input
                                                type='radio'
                                                name='sortOption'
                                                value='mostRecent'
                                                checked={previousSortOption === 'mostRecent'}
                                                onChange={(e) => handleSortOption(e.target.value)}
                                            />
                                            <label>Most Recent</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-8 gap-12">
                        <div className="flex flex-col gap-2 items-start">
                            <div className="text-3xl font-bold">
                                Bio
                            </div>
                            <div className='mt-2'>
                                {description}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-3xl font-bold">
                                Socials
                            </div>
                            <div className='mt-4'>
                                <div className="flex flex-row gap-6">
                                    <a href={`https://${x}`} target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter size={20} />
                                    </a>
                                    <a href={`https://${telegram}`} target="_blank" rel="noopener noreferrer">
                                        <FaTelegram size={20} />
                                    </a>
                                    <a href={`https://${discord}`} target="_blank" rel="noopener noreferrer">
                                        <FaDiscord size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full xl:w-[40%] gap-12 items-center'>
                    <div className='flex flex-col w-[80%] xl:w-full gap-4 h-screen scroll-auto scrollbar mx-auto xl:mx-0'>
                        {filteredReviews.map((review, index) => (
                            <div key={index} className="flex flex-col rounded-md border border-[#B2F1A8] p-4 w-full">
                                <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                                    <Image className="bg-white rounded-lg" src={generateProfilePic(review?.user_wallet_address ?? '')} height={40} width={40} alt="profile logo" />
                                    <div className="text-lg">
                                        {formatAddress(review?.user_wallet_address ?? '')}
                                    </div>
                                </div>
                                <div className='flex flex-col pt-4 gap-4'>
                                    <div className="flex flex-row justify-between">
                                        <div className='flex flex-row gap-1'>
                                            {Array.from({ length: review.rating }).map((_, i) => (
                                                <Image key={i} src={`/stars/star_${Math.round(review.rating)}.svg`} width={20} height={20} alt="Rating" />
                                            ))}
                                        </div>
                                        <div>
                                            {formatDate(review.updated_at)}
                                        </div>
                                    </div>
                                    <div>
                                        {review.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
