"use client"
import { Topics } from "@/utils/utils";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import CategoriesSkeleton from "@/components/skeletons/categories";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { useMetaMask } from "@/hooks/useMetamask";
import WithAuth from "@/components/withAuth";

function Categories() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [minRating, setMinRating] = useState<number>(0);
    const [minReviews, setMinReviews] = useState<number>(0);
    const [sortOption, setSortOption] = useState<string>("alphabetical");
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const { protocols, loading, categories, selectedCategory, setSelectedCategory } = useMetaMask();

    const router = useRouter();

    const filterProtocols = protocols.filter(protocol => {
        const matchesSearchQuery = protocol.protocol_name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || (protocol.ProtocolCategories && protocol.ProtocolCategories.some(category => category.Categories.category_name === selectedCategory));
        const matchesRating = (protocol.avg_rating ?? 0) >= minRating;
        const matchesReviews = (protocol.review_count ?? 0) >= minReviews;
        return matchesSearchQuery && matchesCategory && matchesRating && matchesReviews;
    });

    const sortProtocols = (protocols: Protocol[]) => {
        const sorted = [...protocols];

        switch (sortOption) {
            case 'alphabetical':
                sorted.sort((a, b) => a.protocol_name.localeCompare(b.protocol_name));
                break;
            case 'rating':
                sorted.sort((a, b) => (b.avg_rating ?? 0) - (a.avg_rating ?? 0));
                break;
            case 'reviews':
                sorted.sort((a, b) => (b.review_count ?? 0) - (a.review_count ?? 0));
                break;
            default:
                return protocols;
        }

        return isAscending ? sorted : sorted.reverse();
    };
    const sortedProtocols = sortProtocols(filterProtocols);

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
                            sortedProtocols.length ?
                                sortedProtocols.map((protocol, index) => {
                                    const isLast = index === sortedProtocols.length - 1;
                                    return (
                                        <div
                                            onClick={() => router.push(`/protocol/${protocol.protocol_name}`)}
                                            key={index}
                                            className={`py-2 ${!isLast ? 'border-b border-black' : ''} text-lg hover:cursor-pointer flex flex-row gap-4 items-center`}
                                            style={{ fontWeight: '800' }}
                                        >
                                            <div>
                                                <Image src={`/protocols/${protocol.image_url}`} width={25} height={25} alt="protocol logo" />
                                            </div>
                                            <div>
                                                {protocol.protocol_name}
                                            </div>
                                        </div>
                                    )
                                }) :
                                <p className="text-lg py-2 text-neutral-800 font-primary">No protocol found</p>
                        }
                    </div>
                )}
            </div>
            <div className="mt-16 overflow-hidden w-full">
                <div className="flex flex-row animate-marquee gap-4 md:gap-10">
                    {
                        [...Topics, ...Topics, ...Topics, ...Topics].map((topic, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-2 px-8 md:px-10 rounded-tr-2xl rounded-br-2xl whitespace-nowrap hover:cursor-pointer justify-center"
                                    onClick={() => setSelectedCategory(topic.name)}
                                >
                                    <div className="flex-shrink-0">
                                        <Image src={`/categories/${topic.icon}`} width={20} height={20} alt={`${topic.name} Logo`} />
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
            <div className="flex md:flex-row flex-col mt-16 md:justify-around px-8 w-full">
                <div className="flex flex-col md:w-1/3 w-full gap-8">
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-3">
                        <div className="flex flex-col gap-4">
                            <label className="font-semibold text-lg">Categories</label>
                            <select
                                className="border border-[#B2F1A8] rounded-lg p-2 bg-transparent focus:outline-none"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option className="text-black" value="all">All Categories</option>
                                {categories.map((category, index) => (
                                    <option className="text-black" key={index} value={category.category_name}>
                                        {category.category_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="font-semibold text-lg">Minimum Rating</label>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                step="0.1"
                                value={minRating}
                                onChange={(e) => setMinRating(Number(e.target.value))}
                                className="w-full"
                            />
                            <span>{minRating} Stars</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="font-semibold text-lg">Minimum Reviews</label>
                            <input
                                type="number"
                                min="0"
                                value={minReviews}
                                onChange={(e) => setMinReviews(Number(e.target.value))}
                                className="border border-[#B2F1A8] rounded-lg p-2 bg-transparent focus:outline-none"
                            />
                            <span>{minReviews} Reviews</span>
                        </div>
                        <div>
                            <label className="font-semibold text-lg">Filter by Twitter Followers</label>
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                step="1000"
                                className="w-full"
                            />
                            <span className="text-gray-500">0 - 1,000,000 Followers</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="font-semibold text-lg">Sort By</label>
                            <select
                                className="border border-[#B2F1A8] rounded-lg p-2 bg-transparent focus:outline-none"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option className="text-black" value="none">None</option>
                                <option className="text-black" value="alphabetical">Alphabetical</option>
                                <option className="text-black" value="rating">Rating</option>
                                <option className="text-black" value="reviews">Number of Reviews</option>
                            </select>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <input
                                type="checkbox"
                                id="order"
                                checked={isAscending}
                                onChange={(e) => setIsAscending(e.target.checked)}
                            />
                            <label htmlFor="order" className="font-semibold text-lg">Ascending Order</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col min-w-[50%] gap-12 h-screen scroll-auto scrollbar p-2 mt-8 md:mt-0">
                    {sortedProtocols.map((protocol, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-4 border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8] rounded-lg p-4 md:p-8">
                                <div className="flex flex-col md:flex-row gap-4 md:gap-6 hover:cursor-pointer" onClick={() => router.push(`/protocol/${protocol.protocol_name}`)}>
                                    <Image src={`/protocols/${protocol.image_url}`} alt="protocol logo" width={100} height={100} className="bg-white rounded-lg" />
                                    <div className="flex flex-col gap-2">
                                        <div className="text-xl md:text-2xl">{protocol.protocol_name}</div>
                                        <div className='flex flex-row gap-1 items-center'>
                                            {Array.from({ length: Math.round(protocol.avg_rating ?? 0) }, (_, i) => (
                                                <Image key={i} src={`/stars/star_${Math.round(protocol.avg_rating)}.svg`} width={20} height={20} alt="Rating" />
                                            ))}
                                            <div className="ml-2 text-sm md:text-base">
                                                {protocol.avg_rating?.toFixed(2)} ({protocol.review_count} reviews)
                                            </div>
                                        </div>
                                        <div className="text-sm md:text-base">
                                            Algoritmic, autonomous interest rate protocol
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b-[1px] border-b-[#B2F1A8] "></div>
                                <div className="flex md:flex-row flex-col justify-between">
                                    <div className="flex flex-row gap-6 items-center">
                                        <a href={`https://${protocol.x}`} target="_blank" rel="noopener noreferrer">
                                            <FaXTwitter size={20} />
                                        </a>
                                        <a href={`https://${protocol.telegram}`} target="_blank" rel="noopener noreferrer">
                                            <FaTelegram size={20} />
                                        </a>
                                        <a href={`https://${protocol.discord}`} target="_blank" rel="noopener noreferrer">
                                            <FaDiscord size={20} />
                                        </a>
                                    </div>
                                    <div className="flex flex-row gap-4 overflow-x-auto scrollbar md:mt-0 mt-4">
                                        {protocol.ProtocolCategories?.map((protocolCategory, index) => {
                                            return (
                                                <div key={index} className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-1 px-4 rounded-tr-2xl rounded-br-2xl whitespace-nowrap">
                                                    <div className="flex-shrink-0">
                                                        <Image src="/star.svg" width={20} height={20} alt="star Logo" />
                                                    </div>
                                                    <div className="flex-shrink-0 text-sm md:text-base">
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

export default WithAuth(Categories);
