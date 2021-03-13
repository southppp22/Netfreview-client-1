// import { url } from 'inspector';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import '../scss/ReviewBanner.scss';

function ReviewBanner() {
  const { title, netflixUrl, bannerUrl } = useSelector(
    (state: RootState) => state.video.videoInfo
  );
  return (
    <div className="wrap">
      <div className="reviewbanner-wrapper">
        <div className="text-wrapper">
          <div className="wrap">
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
        <div className="reviewbanner-left"></div>

        <div
          className="reviewbanner-background"
          style={{ backgroundImage: `url(${bannerUrl})` }}
        >
          <div className="reviewbackground-left"></div>
          <div className="review-wrap"></div>
          <div className="reviewbackground-right"></div>
        </div>

        <div className="reviewbanner-right"></div>
      </div>
    </div>
  );
}

export default ReviewBanner;
