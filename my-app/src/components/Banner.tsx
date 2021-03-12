import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../modules';

import BannerSlide from './BannerSlide';
import 'swiper/swiper.scss';

type VideoInfo = {
  id: number;
  title: string;
  description: string;
  bannerUrl: string;
};

function Banner() {
  const { top5VideoList, lessReviewVidList } = useSelector(
    (state: RootState) => state.mainVideo.videoInfoList
  );

  const [topVideo, setTopVideo] = useState<VideoInfo>({
    id: 0,
    title: '',
    description: '',
    bannerUrl: '',
  });
  const [lessVideo, setLessVideo] = useState<VideoInfo>({
    id: 0,
    title: '',
    description: '',
    bannerUrl: '',
  });

  useEffect(() => {
    top5VideoList && setTopVideo(top5VideoList[0]);
    lessReviewVidList && setLessVideo(lessReviewVidList[0]);
  }, [top5VideoList, lessReviewVidList]);

  return (
    <Swiper
      className="swiper-container"
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      style={{ height: '555px' }}
    >
      <SwiperSlide>
        <BannerSlide subTitle="넷프리뷰의 NO.1" video={topVideo} />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlide video={lessVideo} />
      </SwiperSlide>
      <SwiperSlide> slide3 </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
