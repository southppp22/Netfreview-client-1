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
import { Stars } from './Star';
import {} from '../modules/reviews';

type UpdateReviewType = {
  setIsOn: any;
};

function UpdateReview({ setIsOn }: UpdateReviewType) {
  const { onUpdateReview, reviews, onSetText } = useReviews();

  const params = useParams<{ videoId: string }>();

  const { body } = reviews;
  const { text, rating } = body;

  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const isValid = () => Boolean(rating && text);

  return (
    <div className="writereview">
      <div className="writereview-wrap">
        <div className="writereview__myscore">
          <h5 className="myscore__title">총평</h5>
          <div className="myscore__rate">
            {[1, 2, 3, 4, 5].map((idx) => {
              return <Stars index={idx} key={idx}></Stars>;
            })}
          </div>
        </div>

        <div className="writereview__text">
          <h6 className="text__title">나의 리뷰</h6>
          <div className="text__div">
            <textarea
              defaultValue={text}
              className={
                isValid() || errorMessage === null
                  ? 'text__textarea'
                  : 'text__textarea invalid'
              }
              onChange={(e) => {
                onSetText(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="text__btn">
            <button
              className="btn__review"
              onClick={async () => {
                await onUpdateReview(body);
                setIsOn(false);
              }}
            >
              리뷰수정하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateReview;
