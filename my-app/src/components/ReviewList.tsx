import React from 'react';
import ReviewComment from './ReviewComment';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import '../scss/ReviewList.scss';
import left from '../img/left.png';
import right from '../img/right.png';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

function ReviewList() {
  const reviews = useSelector((state: RootState) => state.review);
  const { id } = useSelector((state: RootState) => state.video.videoInfo);

  const { start, end, total, current } = reviews.paging;
  const pages = total
    ? Array(end - start + 1)
        .fill(start)
        .map((el, idx) => el + idx)
    : null;
  return (
    <div className="reviewList">
      {reviews.reviews.reviewList.map((review: any) => {
        return <ReviewComment {...review} key={review.id} />;
      })}
      {pages ? (
        <div className="pagenation">
          <Link
            to={`/review/${id}/?page=${start > 5 ? start - 5 : 1}`}
            className="before-page"
          >
            <img src={left} />
          </Link>
          {pages.map((el) => (
            <Link
              key={el}
              to={`/review/${id}/?page=${el}`}
              className={el === current ? 'pagenum current' : 'pagenum'}
            >
              {el}
            </Link>
          ))}
          <Link
            to={`/review/${id}/?page=${end + 1 > total ? total : end + 1}`}
            className="after-page"
            type="button"
          >
            <img src={right} />
          </Link>
        </div>
      ) : (
        <div className="noreview">
          <h1 className="nothingexist">리뷰가 존재하지 않습니다.</h1>
        </div>
      )}
    </div>
  );
}

export default ReviewList;
