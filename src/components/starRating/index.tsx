"use client";

import { useState, useEffect } from 'react';

interface StarRatingProps {
    maxStars?: number;
    onRatingChange?: (rating: number) => void;
    initialRating?: number;
}

export default function StarRating({ maxStars = 5, onRatingChange, initialRating }: StarRatingProps) {
    const [rating, setRating] = useState<number>(initialRating ?? 0);

    useEffect(() => {
        if (initialRating !== undefined) {
            setRating(initialRating);
        }
    }, [initialRating]);

    const handleRating = (index: number) => {
        const newRating = index + 1;
        const finalRating = rating === newRating ? 0 : newRating;
        setRating(finalRating);
        if (onRatingChange) {
            onRatingChange(finalRating);
        }
    };

    return (
        <div className="flex gap-2">
            {[...Array(maxStars)].map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? `/stars/star_${rating}.svg` : '/stars/star_0.svg'}
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
