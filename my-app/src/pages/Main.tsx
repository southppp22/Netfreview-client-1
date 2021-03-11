import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PosterContainer from '../components/PosterContainer';
import RecommendedModal from '../components/RecommendedModal';

import '../scss/Main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { fetchVideoListThunk } from '../modules/videoList';
type Video = {
  id: number;
  title: string;
  description: string;
  director?: string;
  actor?: string;
  runtime?: string;
  ageLimit?: string;
  releaseYear?: string;
  posterUrl?: string;
  bannerUrl: string;
  netflixUrl?: string;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
  rating?: number;
};
function Main() {
  const dispatch = useDispatch();
  const { top5VideoList, mostReviewVidList, lessReviewVidList } = useSelector(
    (state: RootState) => state.videoList.videoInfoList
  );
  const [isModal, setIsModal] = useState<boolean>(false);
  const [topVideo, setTopVideo] = useState<Video>({
    id: 0,
    title: '',
    description: '',
    bannerUrl: '',
  });

  const handleModal = () => {
    setIsModal(!isModal);
  };
  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    dispatch(fetchVideoListThunk('main'));
  }, []);
  useEffect(() => {
    top5VideoList && setTopVideo(top5VideoList[0]);
  }, [top5VideoList]);

  return (
    <main>
      <button className="btn-recommend" onClick={openModal}>
        <span>
          이거
          <br />
          어때?
        </span>
      </button>
      <RecommendedModal open={isModal} close={closeModal} />
      <div className="bg-color__top"></div>
      <section
        className="banner"
        style={{
          backgroundImage: `url(${topVideo?.bannerUrl})`,
        }}
      >
        <div className="bg-color">
          <div className="banner__container">
            <article>
              <h1 className="banner__title">{topVideo?.title}</h1>
              <p className="banner__synopsis">{topVideo?.description}</p>
              <Link to={`/review/${topVideo?.id}/?page=1`}>
                <button>리뷰보러가기</button>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <PosterContainer
        subTitle="넷프리뷰가 추천하는 탑 5"
        videoList={top5VideoList}
      />
      <PosterContainer
        subTitle="넷프리뷰 최다리뷰작"
        videoList={mostReviewVidList}
      />
      <PosterContainer
        subTitle="리뷰를 달아주세요!"
        videoList={lessReviewVidList}
      />
    </main>
  );
}
export default Main;
