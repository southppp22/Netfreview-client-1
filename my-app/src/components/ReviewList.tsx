import React, { useState } from 'react';
import ReviewComment from './ReviewComment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
//import axios from 'axios';
import '../css/ReviewList.css';

function ReviewList() {
  return (
    <div className='reviewList'>
      <ReviewComment />
      <ReviewComment />
      <ReviewComment />
      <ReviewComment />
      <div>
        <button className='before-page'></button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button className='after-page'></button>
      </div>
    </div>
  );
}

export default ReviewList;
