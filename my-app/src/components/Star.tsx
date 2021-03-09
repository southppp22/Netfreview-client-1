import React, { useMemo } from 'react';
import useReviews from '../hooks/useReviews';
import { StarIcon } from './StarsIcon';

type StarsProps = {
  index: number;
};

export function Stars({ index }: StarsProps) {
  const { reviews, onSetHoverRating, onSetRating } = useReviews();

  const {
    body: { rating, hoverRating },
  } = reviews;

  const isFill = useMemo(() => {
    if (hoverRating >= index) {
      return true;
    } else if (!hoverRating && rating >= index) {
      return true;
    }
    return false;
  }, [rating, hoverRating, index]);

  return (
    <div
      onMouseEnter={() => onSetHoverRating(index)}
      onMouseLeave={() => onSetHoverRating(0)}
      onClick={() => onSetRating(index)}
    >
      <StarIcon isActive={isFill} />
    </div>
  );
}
