import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from 'react-router-dom';
//import axios from 'axios';
import '../scss/Myreview.scss';
import plant from '../img/plant.png';
import heart from '../img/heart.png';
import useReviews from '../hooks/useReviews';
import useUserInfo from '../hooks/useUserInfo';

function Myreview() {
  const {
    reviews,
    onDeleteReview,
    onSetRating,
    onSetText,
    onUpdate,
  } = useReviews();
  const { myReview } = reviews;

  const { userInfo } = useUserInfo();
  const { nickname, profileImgPath } = userInfo;

  const deleteReview = (id: number) => {
    onDeleteReview(id);
    onSetRating(0);
    onSetText('');
  };

  if (myReview) {
    const { id, rating, text, likeCount } = myReview;
    return (
      <div className="MyreviewList__wholeInfo">
        <div className="MyreviewList-wrap">
          <div className="MyreviewList-top">
            <div className="MywholeInfo__profile">
              <img
                src={profileImgPath}
                alt="프로필"
                className="Myprofile__img"
              />
              <span className="Myprofile__nickname">{nickname}</span>
            </div>

            <div className="MywholeInfo__count">
              <div className="Mycount__rate">
                <img className="Myimg-rate" src={plant} />
                <span className="Myrate-num">{rating}</span>
              </div>
              <div className="Mycount__heart">
                <img className="Myimg-heart" src={heart} />
                <span className="Myrate-num">{likeCount}</span>
              </div>
            </div>
          </div>
          <div className="MywholeInfo__div">{text}</div>
          <div className="MywholeInfo__btn">
            <button
              className="Mybtn__review"
              type="button"
              onClick={() => onUpdate()}
            >
              수정
            </button>
            <button
              onClick={() => {
                deleteReview(id);
              }}
              type="button"
              className="Mybtn__review"
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="nomyreview">
      <h1>나의 리뷰가 존재하지 않습니다.</h1>
    </div>
  );
}

export default Myreview;
