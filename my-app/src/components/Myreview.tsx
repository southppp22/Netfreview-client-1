import React, { useState } from 'react';
import InfoCard from './InfoCard';
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
import profile from '../img/profile.png';
import plant from '../img/plant.png';
import heart from '../img/heart.png';
import useReviews from '../hooks/useReviews';
import useUserInfo from '../hooks/useUserInfo';
import UpdateReview from './updateReview';

function Myreview() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const {
    reviews: { myReview },
    onDeleteReview,
  } = useReviews();

  const { videoId } = useParams<{ videoId: string }>();
  console.log(videoId);

  const { userInfo } = useUserInfo();
  const { nickname, profileImgPath } = userInfo;
  if (myReview) {
    const { id, rating, text, likeCount } = myReview;
    return (
      <>
        {isOn ? (
          <UpdateReview
            videoId={Number(videoId)}
            rate={rating}
            reviewText={text}
            setIsOn={setIsOn}
          ></UpdateReview>
        ) : (
          <div className="reviewList__wholeInfo">
            <div className="reviewList-wrap">
              <div className="reviewList-top">
                <div className="wholeInfo__profile">
                  <img
                    src={profileImgPath}
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
                  <div className="count__heart">
                    <img className="img-heart" src={heart} />
                    <span className="rate-num">{likeCount}</span>
                  </div>
                </div>
              </div>
              <div className="wholeInfo__div">{text}</div>
              <div className="wholeInfo__btn">
                <button
                  className="btn__review"
                  type="button"
                  onClick={() => setIsOn(!isOn)}
                >
                  수정
                </button>
                <button
                  onClick={() => {
                    id && onDeleteReview(id);
                  }}
                  type="button"
                  className="btn__review"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  return <div>내 리뷰가 없습니다.</div>;
}

export default Myreview;
