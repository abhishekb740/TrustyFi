import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function CategoriesSkeleton() {
    return (
        <div className="flex flex-col items-center min-h-screen w-full" style={{ fontFamily: 'Montserrat' }}>
            <div className="flex flex-col w-full items-center mt-16">
                <div className="flex flex-row w-1/2 rounded-3xl py-1 px-5 items-center bg-gray-300 justify-center border shadow-[0_0_20px_#B2F1A8]">
                    <Skeleton width="100%" height={32} />
                </div>
                <div className="mt-16 overflow-hidden w-full">
                    <div className="flex flex-row animate-marquee gap-10">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-2 px-6 rounded-tr-2xl rounded-br-2xl ">
                                <Skeleton width={20} height={20} />
                                <Skeleton width={64} height={20} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-16 justify-between px-8 w-full">
                <div className="flex flex-col w-1/3 gap-8">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-3 ">
                            <div className="flex flex-col gap-2">
                                <Skeleton width={128} height={32} />
                                <Skeleton width="100%" height={16} />
                                <Skeleton width="100%" height={16} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col w-[50%] gap-12">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="flex flex-col gap-4 border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8] rounded-lg p-8 ">
                            <div className="flex flex-row gap-6">
                                <Skeleton width={96} height={96} />
                                <div className="flex flex-col gap-2">
                                    <Skeleton width={128} height={32} />
                                    <Skeleton width="100%" height={16} />
                                    <Skeleton width="100%" height={16} />
                                </div>
                            </div>
                            <div className="border-b-[1px] border-b-[#B2F1A8]"></div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-6 items-center">
                                    <Skeleton width={32} height={32} />
                                    <Skeleton width={32} height={32} />
                                    <Skeleton width={32} height={32} />
                                </div>
                                <div className="flex flex-row gap-4">
                                    {[...Array(2)].map((_, index) => (
                                        <div key={index} className="flex flex-row gap-2 border-[2px] border-[#B2F1A8] rounded-tl-lg rounded-bl-3xl py-1 px-4 rounded-tr-2xl rounded-br-2xl ">
                                            <Skeleton width={20} height={20} />
                                            <Skeleton width={64} height={20} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
