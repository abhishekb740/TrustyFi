import { useState } from 'react';
import {StarRating} from '@/components';
import { fetchProtocolsAndCategories } from '@/app/_actions/queries';

export default function WriteReviews() {
    const [review, setReview] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [rating, setRating] = useState(0);
    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = async() => {
        const res = await fetchProtocolsAndCategories();
        console.log(res);

    };

    return (
        <div>
            <div className="flex flex-col items-center mt-16 gap-12">
                {/* Star Rating Section */}
                <div className="flex flex-col items-center gap-8 w-full">
                    <div className="text-4xl" style={{ fontFamily: 'Druk Trial' }}>
                        RATE YOUR EXPERIENCE
                    </div>
                    <StarRating onRatingChange={(value) => setRating(value)} />
                </div>
                
                {/* Review Textarea Section */}
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
                                minHeight: '100px'
                            }}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                    </div>
                </div>

                {/* Review Title Section */}
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

                {/* Date Section */}
                <div className="flex flex-col items-center gap-8 w-full">
                    <div className="text-4xl" style={{ fontFamily: 'Druk Trial' }}>
                        DATE OF THE EXPERIENCE
                    </div>
                    <div className="border border-[#B2F1A8] rounded-md w-1/3 p-2">
                        <input
                            type="date"
                            className="bg-transparent w-full text-center text-white"
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                            }}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            max={today}
                        />
                    </div>
                </div>

                {/* Submit Button */}
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
