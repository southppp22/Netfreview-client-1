import { url } from 'inspector';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
// import axios from 'axios';
import { RootState } from '../modules';
import '../scss/ReviewBanner.scss';

function ReviewBanner() {
  const { title, netflixUrl, bannerUrl } = useSelector(
    (state: RootState) => state.video.videoInfo
  );
  return (
    <div
      className="reviewbanner"
      style={{ backgroundImage: `url(${bannerUrl})` }}
    >
      <div className="review-wrap">
        <h1 className="reviewbanner__title"> {title || 'loading'} </h1>
        <a
          href={netflixUrl || 'https://www.netflix.com/kr/'}
          target="_blank"
          rel="noreferrer"
          className="reviewbanner__netflix"
        >
          바로보러가기
        </a>
      </div>
    </div>
  );
}

export default ReviewBanner;
