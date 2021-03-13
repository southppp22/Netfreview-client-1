import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../modules/login';
import { fetchMyInfoThunk } from '../modules/myInfo';
import { fetchVideoListThunk, resetVideoList } from '../modules/videoList';

import SmallPoster from '../components/SmallPoster';
import profile from '../img/profileImg.png';
import '../scss/Mypage.scss';

function Mypage() {
  // const location = useLocation().pathname;
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.login);
  const { myName, nickname, introduction, profileUrl, status } = useSelector(
    (state: RootState) => state.myInfo
  );
  const {
    videoInfoList: { videoList },
  } = useSelector((state: RootState) => state.videoList);

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchMyInfoThunk());
      dispatch(fetchVideoListThunk({ pathname: 'myPage' }));
    }
    return () => {
      dispatch(resetVideoList());
    };
  }, [dispatch, isLogin]);

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
              <span className="user__name">{myName}</span>
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
