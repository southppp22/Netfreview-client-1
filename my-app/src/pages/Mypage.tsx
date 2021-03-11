import React, { ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import axios from 'axios';
import SmallPoster from '../components/SmallPoster';
import '../scss/Mypage.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import profile from '../img/profileImg.png';
import { RootState } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../modules/login';
import { fetchUserInfoThunk } from '../modules/userInfo';

function Mypage() {
  const location = useLocation().pathname;
  const history = useHistory();
  const dispatch = useDispatch();
  const { status, isLogin, accessToken } = useSelector(
    (state: RootState) => state.login
  );
  const { userName, nickname, introduction, profileUrl } = useSelector(
    (state: RootState) => state.userInfo
  );
  const [img, setImg] = useState<File | undefined>(undefined);

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
    dispatch(fetchUserInfoThunk());
    axios
      .get('/videos/videolist/?path=myPage', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        const videoLists = res.data.videoList;
        console.log(res.data.videoList);
        if (videoLists && videoLists.length > 0) {
          const videos = res.data.videoList.map((video: any) => {
            return {
              id: video.id,
              title: video.title,
              posterUrl: video.posterUrl,
              rating: video.rating,
            };
          });
          setVideoList(videos);
        }
      })
      .catch((err) => console.log(err.response));
  }, [status === 'idle']);

  const renderVideoList = () => {
    if (videoList) {
      return videoList.map((video) => (
        <SmallPoster
          key={video.id}
          id={video.id}
          title={video.title}
          posterUrl={video.posterUrl}
          rating={video.rating}
        />
      ));
    }
    return null;
  };

  const handleLogout = async () => {
    try {
      dispatch(logoutThunk());
      history.push('/');
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <div className="mypage">
      <section className="user">
        <article className="user__aboutme">
          <div className="user__profile">
            <div className="user__profile-img">
              <img src={profileUrl || profile} alt="profile image" />
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
        <div className="review-container__list">{renderVideoList()}</div>
      </section>
    </div>
  );
}

export default Mypage;
