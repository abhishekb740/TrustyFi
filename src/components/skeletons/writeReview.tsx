import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function WriteReviewSkeleton() {
    return (
        <div className="flex flex-col items-center mt-16 gap-12">
            <div className="flex flex-col items-center gap-8 w-full">
                <Skeleton width={300} height={40} />
                <Skeleton width={150} height={40} />
            </div>
            <div className="flex flex-col items-center gap-8 w-full">
                <Skeleton width={300} height={40} />
                <Skeleton width={600} height={100} />
            </div>
            <div className="flex flex-col items-center gap-8 w-full">
                <Skeleton width={300} height={40} />
                <Skeleton width={600} height={40} />
            </div>
            <div className="flex flex-col items-center gap-8 w-full">
                <Skeleton width={300} height={40} />
                <Skeleton width={600} height={40} />
            </div>
            <Skeleton width={100} height={40} className="mt-8" />
        </div>
    );
}
