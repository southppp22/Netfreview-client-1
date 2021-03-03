import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
// import axios from 'axios';
import Header from '../components/Header';
import '../css/ReviewBanner.css';

function ReviewBanner() {
  return (
    <div className='reviewbanner'>
      <div className='review-wrap'>
        {/* <Header /> */}
        <h1 className='reviewbanner__title'>영화제목 </h1>
        <button className='reviewbanner__netflix'>바로보러가기</button>
      </div>
    </div>
  );
}

export default ReviewBanner;
