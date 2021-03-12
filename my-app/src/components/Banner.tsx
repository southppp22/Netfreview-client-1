import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
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
  const {
    videoInfoList: { top5VideoList, lessReviewVidList },
    status,
  } = useSelector((state: RootState) => state.mainVideo);

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
    if (status === 'idle') {
      top5VideoList && setTopVideo(top5VideoList[0]);
      lessReviewVidList && setLessVideo(lessReviewVidList[0]);
    }
  }, [top5VideoList, lessReviewVidList, status]);

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
        <BannerSlide subTitle="당신의 리뷰가 필요한" video={lessVideo} />
      </SwiperSlide>
      <SwiperSlide> slide3 </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
