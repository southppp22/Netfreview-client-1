import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PosterContainer from '../components/PosterContainer';
import RecommendedModal from '../components/RecommendedModal';

import '../scss/Main.scss';
type Video = {
  id: number;
  title: string;
  posterUrl: string;
  bannerUrl?: string;
  rating: number;
  releaseYear?: string;
  description?: string;
};
function Main() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [topRate, setTopRate] = useState<Video[] | undefined>(undefined);
  const [mostReviews, setMostReviews] = useState<Video[] | undefined>(
    undefined
  );
  const [lessReviews, setLessReviews] = useState<Video[] | undefined>(
    undefined
  );
  const [topVideo, setTopVideo] = useState<Video | undefined>(undefined);
  // const { id, title, posterUrl, bannerUrl, rating } = topVideo

  // const { id, title, posterUrl, bannerUrl, rating }: Video = topRate[0];

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
    axios
      .get('/videos/videolist/?path=main')
      .then((res) => {
        const {
          top5VideoList,
          mostReviewVidList,
          lessReviewVidList,
        } = res.data;

        const top5Videos = top5VideoList.map((video: Video) => ({
          id: video.id,
          title: video.title,
          posterUrl: video.posterUrl,
          bannerUrl: video.bannerUrl,
          rating: video.rating,
          releaseYear: video.releaseYear,
          description: video.description,
        }));
        setTopRate(top5Videos);
        const {
          id,
          title,
          posterUrl,
          bannerUrl,
          rating,
          releaseYear,
          description,
        } = top5VideoList[0];
        setTopVideo({
          id,
          title,
          posterUrl,
          bannerUrl,
          rating,
          releaseYear,
          description,
        });

        const mostReviewVideos = mostReviewVidList.map((video: Video) => ({
          id: video.id,
          title: video.title,
          posterUrl: video.posterUrl,
          rating: video.rating,
        }));
        setMostReviews(mostReviewVideos);

        const lessReviewVideos = lessReviewVidList.map((video: Video) => ({
          id: video.id,
          title: video.title,
          posterUrl: video.posterUrl,
          rating: video.rating,
        }));
        setLessReviews(lessReviewVideos);
      })
      .catch((res) => console.log(res.response));
    return () => {
      axios
        .get('/videos/videolist/?path=main')
        .then((res) => {
          const {
            top5VideoList,
            mostReviewVidList,
            lessReviewVidList,
          } = res.data;

          const top5Videos = top5VideoList.map((video: Video) => ({
            id: video.id,
            title: video.title,
            posterUrl: video.posterUrl,
            bannerUrl: video.bannerUrl,
            rating: video.rating,
            releaseYear: video.releaseYear,
            description: video.description,
          }));
          setTopRate(top5Videos);
          const {
            id,
            title,
            posterUrl,
            bannerUrl,
            rating,
            releaseYear,
            description,
          } = top5VideoList[0];
          setTopVideo({
            id,
            title,
            posterUrl,
            bannerUrl,
            rating,
            releaseYear,
            description,
          });

          const mostReviewVideos = mostReviewVidList.map((video: Video) => ({
            id: video.id,
            title: video.title,
            posterUrl: video.posterUrl,
            rating: video.rating,
          }));
          setMostReviews(mostReviewVideos);

          const lessReviewVideos = lessReviewVidList.map((video: Video) => ({
            id: video.id,
            title: video.title,
            posterUrl: video.posterUrl,
            rating: video.rating,
          }));
          setLessReviews(lessReviewVideos);
        })
        .catch((res) => console.log(res.response));
    };
  }, []);

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
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
        }}
      >
        {/* <img className="banner__img" src={topVideo?.bannerUrl} alt="top1 Video" /> */}
        <div className="bg-color">
          <div className="banner__container">
            <article>
              <h1 className="banner__title">{topVideo?.title}</h1>
              <span className="banner__year">{topVideo?.releaseYear}</span>

              <p className="banner__synopsis">
                {/* 실종된 소년 윌 바이어스가 돌아온 1년 후,
                <br />
                인디애나 호킨스 마을에서 벌어진 <br />
                더욱 기묘해지고 거대한 사건들을 다룬 미스터리 스릴러 */}
                {topVideo?.description}
              </p>
              <Link to={`/review/${topVideo?.id}/?page=1`}>
                <button>리뷰보러가기</button>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <PosterContainer
        subTitle="넷프리뷰가 추천하는 탑 5"
        videoList={topRate}
      />
      <PosterContainer subTitle="넷프리뷰 최다리뷰작" videoList={mostReviews} />
      <PosterContainer subTitle="리뷰를 달아주세요!" videoList={lessReviews} />
    </main>
  );
}
export default Main;
