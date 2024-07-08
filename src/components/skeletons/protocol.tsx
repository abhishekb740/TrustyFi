import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProtocolSkeleton() {
    return (
        <div className="flex flex-col" style={{ fontFamily: 'Montserrat' }}>
            <div className='flex flex-row items-center py-20 justify-evenly border-b-[1px] border-[#B2F1A8]'>
                <div className="flex flex-row gap-6">
                    <Skeleton circle={true} height={100} width={100} />
                    <div className="flex flex-col gap-2">
                        <Skeleton width={200} height={24} />
                        <Skeleton width={300} height={16} />
                        <Skeleton width={150} height={20} />
                    </div>
                </div>
                <div className='flex flex-row py-4 px-4 gap-8 border border-[#B2F1A8] shadow-[0_0_4px_#B2F1A8] rounded-lg'>
                    <Skeleton width={35} height={35} />
                    <div className='flex flex-col gap-4'>
                        <Skeleton width={100} height={20} />
                        <Skeleton width={50} height={20} />
                    </div>
                </div>
            </div>
            <Skeleton width={150} height={50} className="ml-24 mt-12" />
        </div>
    );
}
