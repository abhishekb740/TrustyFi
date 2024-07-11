"use client";

import { useState, useEffect } from 'react';

interface StarRatingProps {
    maxStars?: number;
    onRatingChange?: (rating: number) => void;
    initialRating?: number;
}

export default function StarRating({ maxStars = 5, onRatingChange, initialRating }: StarRatingProps) {
    // Initialize rating with a default value of 0, but use initialRating if it's defined
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
                    src={index < rating ? '/ratingStar.svg' : '/Vector.png'}
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
