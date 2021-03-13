import React, { useEffect, useState } from 'react';
import ReviewBanner from '../components/ReviewBanner';
import ReviewList from '../components/ReviewList';
import SideBar from '../components/SideBar';
import WriteReview from '../components/WriteReview';
import Myreview from '../components/Myreview';
import Loading from '../components/loading';
// import Header from '../components/Header';
import '../scss/Review.scss';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoThunk } from '../modules/video';
import { RootState } from '../modules';
import { fetchReviewsThunk } from '../modules/review';
import MyPageLogin from '../components/MyPageLogin';

function Review() {
  const [isOn, setIsOn] = useState(false);
  const location = useLocation();
  const [isModal, setIsModal] = useState<boolean>(false);
  const currentPage = queryString.parse(location.search).page;
  const { videoId } = useParams<{ videoId: string }>();

  const { status, isLogin } = useSelector((state: RootState) => state.login);
  const reviews = useSelector((state: RootState) => state.review);
  const {
    reviews: { myReview },
  } = reviews;

  const dispatch = useDispatch();

  const getVideoInfo = (videoId: string) => {
    dispatch(fetchVideoThunk(videoId));
  };

  const getReviews = (videoId: string, currentPage: string) => {
    const payload = {
      videoId: Number(videoId),
      page: Number(currentPage),
    };
    dispatch(fetchReviewsThunk(payload));
  };

  useEffect(() => {
    if (status === 'idle') {
      getVideoInfo(videoId);
    }
  }, [videoId, status]);

  useEffect(() => {
    if (typeof currentPage === 'string' && status === 'idle') {
      getReviews(videoId, currentPage);
    }
  }, [currentPage, videoId, status]);

  return (
    <div>
      <div className="background">
        <ReviewBanner />
        <div className="area">
          <div className="left">
            <SideBar />
          </div>

          <div className="right">
            {!isLogin ? (
              <MyPageLogin active={isModal} setIsModal={setIsModal} />
            ) : myReview && !isOn ? (
              <Myreview setIsOn={setIsOn} />
            ) : (
              <WriteReview setIsOn={setIsOn} />
            )}
            <ReviewList />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Review;
