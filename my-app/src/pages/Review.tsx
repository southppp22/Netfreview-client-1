import React, { useEffect, useState } from 'react';
import ReviewBanner from '../components/ReviewBanner';
import ReviewList from '../components/ReviewList';
import SideBar from '../components/SideBar';
import WriteReview from '../components/WriteReview';
import Myreview from '../components/Myreview';
// import Header from '../components/Header';
import '../scss/Review.scss';
import useReviews from '../hooks/useReviews';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { getPaging } from '../common/utils/getPaging';
import { useDispatch } from 'react-redux';
import { fetchVideoThunk } from '../modules/video';

function Review() {
  const {
    reviews,
    onFetchReviews,
    onFetchMyReviews,
    onUpdateCurrentPage,
    onUpdateStartEndPage,
  } = useReviews();

  const { myReview, status } = reviews;

  const { videoId } = useParams<{ videoId: string }>();

  const location = useLocation();
  const currentPage = queryString.parse(location.search).page;

  const dispatch = useDispatch();

  const getVideoInfo = (videoId: string) => {
    dispatch(fetchVideoThunk(videoId));
  };

  useEffect(() => {
    getVideoInfo(videoId);
  }, [videoId]);

  useEffect(() => {
    axios.get(`reviews/${videoId}/?page=${currentPage}`).then((res) => {
      const { myReview, totalCount, reviewList } = res.data;
      const { start, end, totalPage } = getPaging(
        totalCount,
        8,
        Number(currentPage)
      );
      const reviews = reviewList.map((review: any) => {
        const { id, nickname, profileUrl } = review.user;
        review.user = {
          id,
          nickname,
          profileUrl,
        };
        return review;
      });
      onFetchReviews(reviews);
      onFetchMyReviews(myReview);
      onUpdateCurrentPage(Number(currentPage));
      onUpdateStartEndPage({ start, end, total: totalPage });
    });
  }, [currentPage, videoId, status]);

  return (
    <div>
      <ReviewBanner />
      <div className="area">
        <div className="left">
          <SideBar />
        </div>

        <div className="right">
          {myReview ? <Myreview /> : <WriteReview />}
          <ReviewList />
        </div>
      </div>
    </div>
  );
}
export default Review;
