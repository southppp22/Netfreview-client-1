import React, { useState } from 'react';
//import axios from 'axios';
import '../scss/Myreview.scss';
import plant from '../img/plant.png';
import heart from '../img/heart.png';
import profile from '../img/profileImg.svg';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { addLikeThunk, deleteReviewThunk } from '../modules/review';

type MyReviewProps = {
  setIsOn: (isOn: boolean) => void;
};

function Myreview({ setIsOn }: MyReviewProps) {
  const reviews = useSelector((state: RootState) => state.review);
  const {
    reviews: { myReview },
  } = reviews;
  const { nickname, profileUrl } = useSelector(
    (state: RootState) => state.userInfo
  );

  const dispatch = useDispatch();

  const deleteReview = (reviewId: number) => {
    const payload = {
      reviewId,
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTQ2OTU1NywiZXhwIjoxNjE1NDc2NzU3fQ.yAkq09lvQB025VY-_wZzJgJvM1QJJ581TY34WL5w_xk',
    };
    dispatch(deleteReviewThunk(payload));
  };

  const addLike = (reviewId: number) => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTQ2OTU1NywiZXhwIjoxNjE1NDc2NzU3fQ.yAkq09lvQB025VY-_wZzJgJvM1QJJ581TY34WL5w_xk';
    const payload = {
      reviewId,
      accessToken,
    };
    dispatch(addLikeThunk(payload));
  };

  if (myReview) {
    const { id, rating, text, likeCount } = myReview;
    return (
      <div className="reviewList__wholeInfo">
        <div className="reviewList-wrap">
          <div className="reviewList-top">
            <div className="wholeInfo__profile">
              <img
                src={profileUrl || profile}
                alt="프로필"
                className="profile__img"
              />
              <span className="profile__nickname">{nickname}</span>
            </div>

            <div className="wholeInfo__count">
              <div className="count__rate">
                <img className="img-rate" src={plant} />
                <span className="rate-num">{rating}</span>
              </div>
              <button
                onClick={() => {
                  addLike(id);
                }}
                type="button"
                className="count__heart"
              >
                <img className="img-heart" src={heart} />
                <span className="rate-num">{likeCount}</span>
              </button>
            </div>
          </div>
          <div className="wholeInfo__div">{text}</div>
          <div className="wholeInfo__btn">
            <button
              onClick={() => setIsOn(true)}
              className="btn__review"
              type="button"
            >
              수정
            </button>
            <button
              onClick={() => {
                deleteReview(id);
              }}
              type="button"
              className="btn__review"
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <div>내 리뷰가 없습니다.</div>;
}

export default Myreview;
