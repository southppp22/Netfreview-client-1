import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

import BigPoster from './BigPoster';
import SignIn from './SignIn';
// import useUserInfo from '../hooks/useUserInfo';
import '../scss/RecommendedModal.scss';
import { isMainThread } from 'node:worker_threads';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

type RecommendedModalProps = {
  open: boolean;
  // close: () => void;
  close: Dispatch<SetStateAction<boolean>>;
};
type Video = {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
};
function RecommendedModal({ open, close }: RecommendedModalProps) {
  const { nickname } = useSelector((state: RootState) => state.userInfo);
  const { status, isLogin, accessToken } = useSelector(
    (state: RootState) => state.login
  );

  const [recommendVideo, setRecommendVideo] = useState<Video[] | undefined>();
  const [isLoginModal, setIsLoginModal] = useState(false);
  // const [isMain, setIsMain] = useState(false);

  const location = useLocation().pathname;
  // console.log(useLocation());

  useEffect(() => {
    if (open) {
      // open이라는 상태(모달창이 떠있으면 true, 모달창이 close되어 있으면 false)로 분기
      // 스크롤 방지
      document.body.style.overflow = 'hidden';
    }
    return () => {
      // 스크롤 방지 해제
      document.body.style.overflow = 'scroll';
      // document.body.style.overflow = 'unset';
    };
  }); // 마지막에 배열을 넣지 않은 이유: 상태가 바뀔때마다 변경되어야되서
  // 배열을 넣을 경우: 화면 첫페이지에서 한번 실행되기 때문에 추후 모달창이 뜰때 변경이 되지 않는다
  useEffect(() => {
    if (isLogin) {
      axios
        .get('/videos/videolist/?path=aboutThis', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => {
          console.log(res.data);
          const { videoList } = res.data;
          const videos = videoList.map((video: Video) => ({
            id: video.id,
            title: video.title,
            posterUrl: video.posterUrl,
            rating: video.rating,
          }));
          setRecommendVideo(videos);
        })
        .catch((err) => console.log(err.response));
    }
    return () => {
      if (isLogin) {
        axios
          .get('/videos/videolist/?path=aboutThis', {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((res) => {
            console.log(res.data);
            const { videoList } = res.data;
            const videos = videoList.map((video: Video) => ({
              id: video.id,
              title: video.title,
              posterUrl: video.posterUrl,
              rating: video.rating,
            }));
            setRecommendVideo(videos);
          })
          .catch((err) => console.log(err.response));
      }
    };
  }, [isLogin]);
  const renderPosterList = () => {
    if (recommendVideo && recommendVideo.length > 0) {
      return recommendVideo?.map((video) => {
        const { id, title, posterUrl, rating } = video;
        return (
          <BigPoster
            key={id}
            id={id}
            title={title}
            posterUrl={posterUrl}
            rating={rating}
          />
        );
      });
    }
  };

  const handleLoginBtn = () => {
    close(false);
    setIsLoginModal(!isLoginModal);
  };

  return (
    <>
      <div className={open ? 'isModal recommend' : 'recommend'}>
        <div className="dim" onClick={() => close(false)}></div>
        {open ? (
          <section className="recommend__container">
            <button className="close" onClick={() => close(false)}>
              닫기
            </button>
            {isLogin ? (
              <div className="recommend__wrap">
                <h2 className="recommend__title">이거어때?</h2>
                <p className="recommend__description">
                  {nickname}님이 경험해보지 않았던 영역을 탐구해보세요!
                  <br />
                  나도 몰랐던 나의 흥미를 찾아드릴게요
                </p>
                <div className="recommend__list">{renderPosterList()}</div>
              </div>
            ) : (
              <div className="recommend__wrap noLogin">
                <h2 className="recommend__title noLogin">
                  ‘이거 어때’ 페이지는
                  <br />
                  로그인 이후 사용하실 수 있습니다
                </h2>
                <p className="recommend__description noLogin">
                  여러분이 경험해보지 않았던 영역을 탐구해보세요!
                  <br />
                  나도 몰랐던 나의 흥미를 찾아드릴게요
                </p>
                <button
                  className="recommend__btn-login"
                  onClick={handleLoginBtn}
                >
                  로그인하러 가기
                </button>
              </div>
            )}
          </section>
        ) : null}
      </div>
      {isLoginModal ? <SignIn closeModal={handleLoginBtn} /> : null}
    </>
  );
}

export default RecommendedModal;
