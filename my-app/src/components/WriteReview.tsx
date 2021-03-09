import React, { useEffect, useState } from 'react';
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
import '../scss/WriteReview.scss';
import useReviews from '../hooks/useReviews';
import useVideo from '../hooks/useVideo';
import { Stars } from './Star';
import { handleReview } from '../modules/reviews';

function WriteReview() {
  const { onAddReview } = useReviews();
  const params = useParams<{ videoId: string }>();

  const videoId = Number(params.videoId);
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const payload = {
    videoId,
    text,
    rating,
  };

  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const onMouseEnter = (index: number) => setHoverRating(index);
  const onMouseLeave = () => setHoverRating(0);
  const onSaveRating = (index: number) => setRating(index);

  const isValid = () => Boolean(rating && text);

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
                  rating={rating}
                  hoverRating={hoverRating}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onSaveRating={onSaveRating}
                  key={idx}
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
                isValid() || errorMessage === null
                  ? 'text__textarea'
                  : 'text__textarea invalid'
              }
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="text__btn">
            <button
              className="btn__review"
              onClick={() => onAddReview(payload)}
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
