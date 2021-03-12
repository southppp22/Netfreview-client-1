/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addLikeThunk } from '../modules/review';
import profile from '../img/profile.png';
import plant from '../img/plant.png';
import heart from '../img/heart.png';
import '../scss/ReviewComment.scss';
import { Link } from 'react-router-dom';
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
  const { user, id, text, rating, likeCount } = props;
  console.log(user.id);

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

  return (
    <div className="reviewList__wholeInfo">
      <div className="reviewList-wrap">
        <div className="reviewList-top">
          <div className="wholeInfo__profile">
            <div className="profile__wrapper">
              <img src={user.profileUrl || profile} className="profile__img" />
            </div>
            <Link to={`/userpage/${user.id}`} />
            <span className="profile__nickname">{user.nickname}</span>
          </div>

          <div className="wholeInfo__count">
            <div className="count__rate">
              <img className="img-rate" src={plant} />
              <span className="rate-num">{rating}</span>
            </div>
            <button
              onClick={() => {
                addLike();
              }}
              type="button"
              className="count__heart"
            >
              <img className="img-heart" src={heart} />
              <span className="rate-num">{likeCount}</span>
            </button>
          </div>
        </div>
        <p className="wholeInfo__textarea">{text}</p>
      </div>
    </div>
  );
}

export default ReviewComment;
