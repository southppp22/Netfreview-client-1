import React from "react";
// import { ReactComponent as StarSvg } from '../img/heart.svg';
import "../scss/StarIcon.scss";
import leaf from "../img/leaf.svg";
import emptyleaf from "../img/emptyleaf.svg";

type StarIconProps = {
  isActive: boolean;
};

export function StarIcon({ isActive }: StarIconProps) {
  return (
    <span>
      <img
        // src="https://svgshare.com/i/UnB.svg"
        src={leaf}
        className={isActive ? "star star-active" : "star star-no-active"}
      />
    </span>
  );
}
