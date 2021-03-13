/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLikeThunk } from '../modules/review';
import profile from '../img/profile.png';
import leaf from '../img/leaf.svg';
import heart from '../img/heart.svg';
import emptyheart from '../img/emptyheart.svg';
import '../scss/ReviewComment.scss';
import { Link } from 'react-router-dom';
import { RootState } from '../modules';
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
  const { isLogin } = useSelector((state: RootState) => state.login);

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
            <div className="wholeInfo-wrap">
              <div className="profile__wrapper">
                <img
                  src={user.profileUrl || profile}
                  className="profile__img"
                />
              </div>
              <Link className="profile__nickname" to={`/userpage/${user.id}`}>
                {user.nickname}
              </Link>
            </div>
          </div>

          <div className="wholeInfo__count">
            <div className="count__heart">
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
            disabled={isLogin}
          >
            <div>
              <img className="img-clickheart" src={heart} />
              <span>좋아요</span>
            </div>
          </button>
        ) : (
          <button
            onClick={() => {
              if (isLogin) {
                addLike();
                onHeartClick();
              }
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
