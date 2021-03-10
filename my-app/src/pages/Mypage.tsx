import React, { ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import axios from 'axios';
import SmallPoster from '../components/SmallPoster';
import '../scss/Mypage.scss';
import useUserInfo from '../hooks/useUserInfo';
import { Link, useHistory } from 'react-router-dom';
import useIsLogin from '../hooks/useIsLogin';

function Mypage() {
  const history = useHistory();
  const { useLogin, onSetIsLogin, onSetToken } = useIsLogin();
  const { setIsLogin, accessToken } = useLogin;

  const {
    userInfo,
    onSetUserId,
    onSetUserName,
    onSetImg,
    onSetNickname,
    onSetIntroduction,
  } = useUserInfo();
  const { userId, userName, nickname, profileImgPath, introduction } = userInfo;

  const [img, setImg] = useState<File | undefined>(undefined);
  // const [introduction, setIntroduction] = useState('');
  // const [userName, setUserName] = useState('관리자(임시)');
  type VideoList = {
    id: number;
    title: string;
    posterUrl: string;
    rating: number;
  };
  const [videoList, setVideoList] = useState<VideoList[] | undefined>(
    undefined
  );

  useEffect(() => {
    axios
      .get('/users/userinfo', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        const { id, name, nickname, introduction, profileUrl } = res.data;
        onSetUserId(id);
        onSetUserName(name);
        onSetIntroduction(introduction);
        onSetNickname(nickname);
        if (profileUrl) {
          onSetImg(profileUrl);
        }
      })
      .catch((err) => console.log(err.response));
    axios
      .get('/videos/videolist/?path=myPage', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data.videoLists);
        const videos = res.data.videoList.map((video: any) => {
          return {
            id: video.id,
            title: video.title,
            posterUrl: video.posterUrl,
            rating: video.rating,
          };
        });
        setVideoList(videos);
      });
  }, [useLogin]);

  // const renderVideoList = () => {
  //   if (videoList) {
  //     return videoList.map((video) => (
  //       <SmallPoster
  //         key={video.id}
  //         id={video.id}
  //         title={video.title}
  //         posterUrl={video.posterUrl}
  //         rating={video.rating}
  //       />
  //     ));
  //   }
  //   return <></>;
  // };

  const handleLogout = () => {
    axios
      .post('/users/signout', null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res);
        onSetIsLogin(false);
        onSetToken('');
        history.push('/');
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="mypage">
      <section className="user">
        <article className="user__aboutme">
          <div className="user__profile">
            <div className="user__profile-img">
              <img src={profileImgPath} alt="profile image" />
            </div>
            <div className="user__info">
              <h3 className="user__id">{nickname}</h3>
              <span className="user__name">{userName}</span>
            </div>
          </div>
          <p className="user__description">{introduction}</p>
          <div className="button">
            <Link to="/mypage/modify">
              <label>
                <input
                  type="button"
                  className="button__edit"
                  value="정보 수정"
                />
              </label>
            </Link>
            <label>
              <input
                type="button"
                className="button__close"
                value="로그아웃"
                onClick={handleLogout}
              />
            </label>
          </div>
        </article>
      </section>
      <section className="review-container">
        <h2 className="review-container__title">내가 쓴 리뷰List</h2>
        <div className="review-container__list">
          {/* <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster /> */}
          {/* {renderVideoList()} */}
        </div>
      </section>
    </div>
  );
}

export default Mypage;
