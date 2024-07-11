import { useState, useEffect } from 'react';
import { StarRating, Notification } from '@/components';
import { writeReview } from '@/app/_actions/queries';
import { useMetaMask } from '@/hooks/useMetamask';
import WriteReviewSkeleton from '@/components/skeletons/writeReview';

type Props = {
    protocol_id: number;
    existingReview?: Review;
    toggleWriteReview: () => void;
}

export default function WriteReviews({ protocol_id, existingReview, toggleWriteReview }: Props) {
    const { userId, wallet } = useMetaMask();
    const [review, setReview] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [showNotification, setShowNotification] = useState(false);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        if (existingReview) {
            setReview(existingReview.description);
            setTitle(existingReview.title);
            setRating(existingReview.rating);
        }
        setLoading(false);
    }, [existingReview]);

    const handleSubmit = async () => {
        if (!userId) {
            console.error('User is not logged in');
            return;
        }
        if (!protocol_id) {
            console.error('Protocol is not selected');
            return;
        }
        try {
            await writeReview(userId, protocol_id, rating, title, review, wallet.accounts[0]);
            setShowNotification(true);
        } catch (error) {
            console.error('Error submitting review:', (error as Error).message);
        }
    };

    if (loading) {
        return <WriteReviewSkeleton />;
    }

    return (
        <div>
            <Notification message="Review submitted successfully" toggleWriteReview={toggleWriteReview} show={showNotification} onClose={() => { setShowNotification(false) }} isSuccess={true} />
            <div className="flex flex-col items-center mt-16 gap-12">
                <div className="flex flex-col items-center gap-8 w-full">
                    <div className="text-4xl" style={{ fontFamily: 'Druk Trial' }}>
                        RATE YOUR EXPERIENCE
                    </div>
                    <StarRating onRatingChange={(value) => setRating(value)} initialRating={existingReview?.rating ?? 0} />
                </div>
                <div className="flex flex-col items-center gap-8 w-full">
                    <div className="text-4xl" style={{ fontFamily: 'Druk Trial' }}>
                        EVALUATE YOUR RECENT EXPERIENCE
                    </div>
                    <div className="border border-[#B2F1A8] rounded-md p-8 w-1/3">
                        <textarea
                            className="bg-transparent w-full resize-none p-2 text-center"
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                                lineHeight: '1.5',
                                minHeight: '100px',
                            }}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8 w-full">
                    <div className="text-4xl" style={{ fontFamily: 'Druk Trial' }}>
                        GIVE YOUR REVIEW A TITLE
                    </div>
                    <div className="border border-[#B2F1A8] rounded-md w-1/3 p-2">
                        <input
                            className="bg-transparent w-full text-center"
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                            }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    className="mt-8 bg-[#B2F1A8] text-black px-4 py-2 rounded-md"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
