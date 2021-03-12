/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLikeThunk } from '../modules/review';
import profile from '../img/profile.png';
import leaf from '../img/leaf.svg';
import heart from '../img/heart.svg';
import emptyheart from '../img/emptyheart.svg';
import '../scss/ReviewComment.scss';
type ReviewCommentProps = {
  rating: number;
  id: number;
  text: string;
  createdAt?: string;
  updatedAt?: string;
  user: {
    id: string;
    nickname: string;
    profileUrl: null | string;
  };
  likeCount: number;
  isLike: number;
};

function ReviewComment(props: ReviewCommentProps) {
  const {
    user: { nickname, profileUrl },
    id,
    text,
    rating,
    likeCount,
  } = props;

  const dispatch = useDispatch();

  const addLike = () => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTQ2OTU1NywiZXhwIjoxNjE1NDc2NzU3fQ.yAkq09lvQB025VY-_wZzJgJvM1QJJ581TY34WL5w_xk';
    const payload = {
      reviewId: id,
      accessToken,
    };
    dispatch(addLikeThunk(payload));
  };
  const [isclick, setIsClick] = useState<boolean>(false);
  const onHeartClick = () => {
    setIsClick(true);
  };
  const onemptyClick = () => {
    setIsClick(false);
  };

  return (
    <div className="reviewList__wholeInfo">
      <div className="reviewList-wrap">
        <div className="reviewList-top">
          <div className="wholeInfo__profile">
            <div className="profile__wrapper">
              <img src={profileUrl || profile} className="profile__img" />
              <span className="profile__nickname">{nickname}</span>
            </div>
          </div>

          <div className="wholeInfo__count">
            <div
              // onClick={() => {
              //   addLike();
              // }}
              // type="button"
              className="count__heart"
            >
              <img className="img-heart" src={heart} />
              <span className="rate-num">{likeCount}</span>
            </div>
            <div className="count__rate">
              <img className="img-rate" src={leaf} />
              <span className="rate-num">{rating}</span>
            </div>
          </div>
        </div>
        <p className="wholeInfo__textarea">{text}</p>
        {isclick ? (
          <button
            onClick={() => {
              addLike();
              onemptyClick();
            }}
            type="button"
            className="clickcount__heart"
          >
            <div>
              <img className="img-clickheart" src={heart} />
              <span>좋아요</span>
            </div>
          </button>
        ) : (
          <button
            onClick={() => {
              addLike();
              onHeartClick();
            }}
            type="button"
            className="clickcount__heart"
          >
            <div>
              <img className="img-clickheart" src={emptyheart} />
              <span>좋아요</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default ReviewComment;
