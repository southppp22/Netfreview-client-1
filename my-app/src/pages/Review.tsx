import React, { useState } from 'react';
import ReviewBanner from '../components/ReviewBanner';
import ReviewList from '../components/ReviewList';
import SideBar from '../components/SideBar';
import WriteReview from '../components/WriteReview';
import Myreview from '../components/Myreview';
import Header from '../components/Header';
import '../css/Review.css';
function Search() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {/* {isLogin ? ( //isLogin(로그인상태)이 true */}
      <ReviewBanner />
      <div className='area'>
        <div className='left'>
          <SideBar />
        </div>

        <div className='right'>
          <WriteReview />
          <ReviewList />
        </div>
      </div>
      {/* ) : (
        //isLogin(로그아웃)이 false
        <>
          <ReviewBanner />
          <SideBar />
          <Myreview />
          <ReviewList />
        </>
      )} */}
    </div>
  );
}
export default Search;
