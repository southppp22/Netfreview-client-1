import React, { useMemo } from 'react';
import { Writeleaficon } from './Writeleaficon';

type leafProps = {
  index: number;
  rating: number;
  hoverRating: number;
  setRating: (rating: number) => void;
  setHoverRating: (hoverRating: number) => void;
};

export function Stars({
  index,
  rating,
  hoverRating,
  setRating,
  setHoverRating,
}: leafProps) {
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
