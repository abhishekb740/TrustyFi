import { useState } from 'react';

interface StarRatingProps {
    maxStars?: number;
    onRatingChange?: (rating: number) => void;
}

export default function StarRating({ maxStars = 5, onRatingChange }: StarRatingProps) {
    const [rating, setRating] = useState<number>(0);

    const handleRating = (index: number) => {
        setRating(index + 1);
        if (onRatingChange) {
            onRatingChange(index + 1);
        }
    };

    return (
        <div className="flex gap-2">
            {[...Array(maxStars)].map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? '/ratingStar.png' : '/Vector.png'}
                    alt={`${index + 1} star`}
                    height={50}
                    width={50}
                    className="cursor-pointer"
                    onClick={() => handleRating(index)}
                />
            ))}
        </div>
    );
}