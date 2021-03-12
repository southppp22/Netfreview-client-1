import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { fetchVideoListThunk, resetVideoList } from '../modules/videoList';

import BigPoster from './BigPoster';
import SignIn from './SignIn';
import '../scss/RecommendedModal.scss';

type RecommendedModalProps = {
  open: boolean;
  // close: () => void;
  close: Dispatch<SetStateAction<boolean>>;
};

function RecommendedModal({ open, close }: RecommendedModalProps) {
  const dispatch = useDispatch();

  const { nickname } = useSelector((state: RootState) => state.userInfo);
  const { status, isLogin, accessToken } = useSelector(
    (state: RootState) => state.login
  );
  const {
    videoInfoList: { videoList },
  } = useSelector((state: RootState) => state.videoList);

  const [isLoginModal, setIsLoginModal] = useState(false);

  useEffect(() => {
    if (open) {
      // 스크롤 방지
      document.body.style.overflow = 'hidden';
    }
    return () => {
      // 스크롤 방지 해제
      document.body.style.overflow = 'scroll';
      // document.body.style.overflow = 'unset';
    };
  });

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchVideoListThunk({ pathname: 'aboutThis' }));
    }
    return () => {
      dispatch(resetVideoList());
    };
  }, [status === 'idle']);

  const renderPosterList = () => {
    if (videoList) {
      return videoList.map((video) => {
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
