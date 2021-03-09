import React, { useState } from 'react';
import InfoCard from './InfoCard';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
//import axios from 'axios';
import '../scss/SideBar.scss';
import useVideo from '../hooks/useVideo';
import { StarIcon } from './StarsIcon';

function SideBar() {
  const { video } = useVideo();
  const { rating } = video;
  return (
    <aside className="video-info">
      <ul className="video-info__wrap">
        <li className="wrap__average">
          <h5 className="wrap__average-title">총평</h5>
          <div className="wrap__average-rate">
            <span className="wrap__average-score">
              {rating?.toFixed(1) || 3.1}
            </span>
            <div className="wrap__average-emoji">
              {[1, 2, 3, 4, 5].map((el, idx) => (
                <StarIcon
                  key={idx}
                  isActive={Boolean(rating && rating >= el)}
                />
              ))}
            </div>
          </div>
        </li>
        <InfoCard />
      </ul>
    </aside>
  );
}

export default SideBar;
