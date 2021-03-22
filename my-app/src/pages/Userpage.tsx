import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfoThunk } from '../modules/userInfo';
import { resetVideoList } from '../modules/videoList';
// import queryString from 'query-string';

import SmallPoster from '../components/SmallPoster';
import profile from '../img/profileImg.png';
import '../scss/Mypage.scss';

function Userpage() {
  const dispatch = useDispatch();
  const { userId } = useParams<{ userId: string }>();
  const {
    userName,
    nickname,
    introduction,
    profileUrl,
    videoList,
  } = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    dispatch(fetchUserInfoThunk(userId));
  }, [dispatch, userId]);

  const renderVideoList = () => {
    if (videoList) {
      return videoList.map((video) => (
        <SmallPoster
          key={video.id}
          id={video.id}
          title={video.title}
          posterUrl={video.posterUrl}
          rating={video.rating || 0}
        />
      ));
    }
    return null;
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
          <div className="button"></div>
        </article>
      </section>
      <section className="review-container">
        <h2 className="review-container__title">{nickname}님이 쓴 리뷰List</h2>
        <div className="review-container__list">{renderVideoList()}</div>
      </section>
    </div>
  );
}

export default Userpage;
