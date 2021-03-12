import React from 'react';
// import { ReactComponent as StarSvg } from '../img/heart.svg';
import '../scss/StarIcon.scss';

type StarIconProps = {
  isActive: boolean;
};

export function StarIcon({ isActive }: StarIconProps) {
  return (
    <span>
      <img
        src="https://svgshare.com/i/UnB.svg"
        className={isActive ? 'star-active' : 'star-no-active'}
      />
    </span>
  );
}
