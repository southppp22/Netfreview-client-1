import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BigPoster from './BigPoster';
import SignIn from './SignIn';
import useUserInfo from '../hooks/useUserInfo';
import useIsLogin from '../hooks/useIsLogin';
import '../scss/RecommendedModal.scss';

type RecommendedModalProps = {
  open: boolean;
  close: () => void;
};
type Video = {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
};
function RecommendedModal({ open, close }: RecommendedModalProps) {
  const { userInfo } = useUserInfo();
  const { nickname } = userInfo;
  const { useLogin } = useIsLogin();
  const { setIsLogin } = useLogin;

  const [recommendVideo, setRecommendVideo] = useState<Video[] | undefined>();
  const [isLoginModal, setIsLoginModal] = useState(false);

  useEffect(() => {
    if (open) {
      // open이라는 상태(모달창이 떠있으면 true, 모달창이 close되어 있으면 false)로 분기
      // 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 스크롤 방지 해제
      document.body.style.overflow = 'scroll';
      // document.body.style.overflow = 'unset';
    }
  }); // 마지막에 배열을 넣지 않은 이유: 상태가 바뀔때마다 변경되어야되서
  // 배열을 넣을 경우: 화면 첫페이지에서 한번 실행되기 때문에 추후 모달창이 뜰때 변경이 되지 않는다
  useEffect(() => {
    axios.get('/videos/videolist/?path=aboutThis').then((res) => {
      const { videoList } = res.data;
      const videos = videoList.map((video: Video) => ({
        id: video.id,
        title: video.title,
        posterUrl: video.posterUrl,
        rating: video.rating,
      }));
      setRecommendVideo(videos);
    });
  }, [setIsLogin]);
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
    close();
    setIsLoginModal(!isLoginModal);
  };

  return (
    <>
      <div className={open ? 'isModal recommend' : 'recommend'}>
        <div className="dim" onClick={close}></div>
        {open ? (
          <section className="recommend__container">
            <button className="close" onClick={close}>
              닫기
            </button>
            {setIsLogin ? (
              <div className="recommend__wrap">
                <h2 className="recommend__title">이거어때?</h2>
                <p className="recommend__description">
                  {nickname}님이 경험해보지 않았던 영역을 탐구해보세요!
                  <br />
                  나도 몰랐던 나의 흥미를 찾아드릴게요
                </p>
                <div className="recommend__list">
                  {renderPosterList() || (
                    <>
                      <BigPoster
                        id={1}
                        rating={3.6}
                        title="미나리"
                        posterUrl="https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk"
                      />
                      <BigPoster
                        id={1}
                        rating={3.6}
                        title="미나리"
                        posterUrl="https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk"
                      />
                      <BigPoster
                        id={1}
                        rating={3.6}
                        title="미나리"
                        posterUrl="https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk"
                      />
                      <BigPoster
                        id={1}
                        rating={3.6}
                        title="미나리"
                        posterUrl="https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk"
                      />
                    </>
                  )}
                </div>
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
