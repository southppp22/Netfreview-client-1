import React, { useState } from 'react';
import '../scss/WriteReview.scss';
import { Stars } from './Star';
import { RootState } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { addReviewThunk, updateReviewThunk } from '../modules/review';

type WriteReviewProps = {
  setIsOn: (isOn: boolean) => void;
};

function WriteReview({ setIsOn }: WriteReviewProps) {
  const dispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.review);
  const { id } = useSelector((state: RootState) => state.video.videoInfo);
  const {
    status,
    reviews: { myReview },
  } = reviews;

  const [rating, setRating] = useState<number>(myReview?.rating || 0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [text, setText] = useState('');

  const addReview = () => {
    const payload = {
      videoId: id,
      text,
      rating,
    };
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTQ2OTU1NywiZXhwIjoxNjE1NDc2NzU3fQ.yAkq09lvQB025VY-_wZzJgJvM1QJJ581TY34WL5w_xk';
    dispatch(addReviewThunk({ ...payload, accessToken }));
  };

  const updateReview = () => {
    const payload = {
      videoId: id,
      text,
      rating,
    };
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTQ2OTU1NywiZXhwIjoxNjE1NDc2NzU3fQ.yAkq09lvQB025VY-_wZzJgJvM1QJJ581TY34WL5w_xk';
    dispatch(updateReviewThunk({ ...payload, accessToken }));
    setIsOn(false);
  };

  const canSave = () => Boolean(rating && text); //에러처리해주기 액세스토큰도

  return (
    <div className="writereview">
      <div className="writereview-wrap">
        <div className="writereview__myscore">
          <h5 className="myscore__title">총평</h5>
          <div className="myscore__rate">
            {[1, 2, 3, 4, 5].map((idx) => {
              return (
                <Stars
                  index={idx}
                  key={idx}
                  rating={rating}
                  setRating={setRating}
                  hoverRating={hoverRating}
                  setHoverRating={setHoverRating}
                ></Stars>
              );
            })}
          </div>
        </div>

        <div className="writereview__text">
          <h6 className="text__title">나의 리뷰</h6>
          <div className="text__div">
            <textarea
              className={
                status !== 'failed'
                  ? 'text__textarea'
                  : 'text__textarea invalid'
              }
              defaultValue={myReview ? myReview.text : ''}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="text__btn">
            <button
              className="btn__review"
              onClick={() => {
                if (myReview) {
                  updateReview();
                } else {
                  addReview();
                }
              }}
            >
              리뷰등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview;
