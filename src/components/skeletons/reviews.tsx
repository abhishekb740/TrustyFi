import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ReviewsSkeleton() {
    return (
        <div>
            <div className='flex flex-row justify-evenly mt-24'>
                <div className='flex flex-col w-[40%]'>
                    <div className='flex flex-col p-8 border border-[#B2F1A8] rounded-lg gap-8'>
                        <Skeleton width={100} height={24} />
                        <Skeleton width={300} height={16} />
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className='flex flex-row gap-6'>
                                <Skeleton width={20} height={20} />
                                <Skeleton width={100} height={16} />
                                <Skeleton width={50} height={20} />
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col mt-24 gap-6'>
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex flex-col rounded-md border border-[#B2F1A8] p-4 w-full">
                                <div className="flex flex-row items-center gap-2 border-b-[1px] border-b-[#B2F1A8] pb-4">
                                    <Skeleton circle={true} height={40} width={40} />
                                    <Skeleton width={100} height={20} />
                                </div>
                                <div className='flex flex-col pt-4 gap-4'>
                                    <Skeleton width={150} height={20} />
                                    <Skeleton width={200} height={16} />
                                    <Skeleton width={300} height={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col w-[40%] gap-12'>
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-12 items-center">
                        <Skeleton width={200} height={24} />
                        <Skeleton width={300} height={16} />
                    </div>
                    <div className="flex flex-col rounded-md border border-[#B2F1A8] p-4 gap-12 items-center">
                        <Skeleton width={200} height={24} />
                        <Skeleton width={300} height={16} />
                        <Skeleton width={150} height={16} />
                    </div>
                </div>
            </div>
        </div>
    );
}
2