import React, { useState } from 'react';
import ReviewComment from './ReviewComment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
// import axios from 'axios';
import '../scss/ReviewList.scss';
import left from '../img/left.png';
import right from '../img/right.png';
import useReviews from '../hooks/useReviews';
import useVideo from '../hooks/useVideo';

function ReviewList() {
  const { reviews } = useReviews();
  const { video } = useVideo();
  const { start, end, total, current } = reviews.paging;
  const pages = total
    ? Array(end - start + 1)
        .fill(start)
        .map((el, idx) => el + idx)
    : null;
  return (
    <div className="reviewList">
      {reviews.reviewList.map((review: any) => (
        <ReviewComment {...review} key={review.id} />
      ))}
      {pages ? (
        <div className="pagenation">
          <Link
            to={`/review/${video.id}/?page=${start > 5 ? start - 5 : 1}`}
            className="before-page"
          >
            <img src={left} />
          </Link>
          {pages.map((el) => (
            <Link
              key={el}
              to={`/review/${video.id}/?page=${el}`}
              className={el === current ? 'pagenum current' : 'pagenum'}
            >
              {el}
            </Link>
          ))}
          <Link
            to={`/review/${video.id}/?page=${
              end + 1 > total ? total : end + 1
            }`}
            className="after-page"
            type="button"
          >
            <img src={right} />
          </Link>
        </div>
      ) : (
        <div>리뷰가 존재하지 않습니다.</div>
      )}
    </div>
  );
}

export default ReviewList;
