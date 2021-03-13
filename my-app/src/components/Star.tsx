import React, { useMemo } from 'react';

import { StarIcon } from './StarsIcon';
import { Writeleaficon } from './Writeleaficon';

type StarsProps = {
  index: number;
  rating: number;
  setRating: (rating: number) => void;
  hoverRating: number;
  setHoverRating: (rating: number) => void;
};

export function Stars({
  index,
  rating,
  setRating,
  hoverRating,
  setHoverRating,
}: StarsProps) {
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
      onMouseEnter={() => setHoverRating(index)}
      onMouseLeave={() => setHoverRating(0)}
      onClick={() => setRating(index)}
    >
      <Writeleaficon isActive={isFill} />
    </div>
  );
}
