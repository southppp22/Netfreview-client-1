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
import '../scss/ReviewList.scss';
import left from '../img/left.png';
import right from '../img/right.png';

function ReviewList() {
  return (
    <div className='reviewList'>
      <ReviewComment />
      <ReviewComment />
      <ReviewComment />
      <ReviewComment />
      <div className='pagenation'>
        <button className='before-page' type='button'>
          <img src={left} />
        </button>
        <span className='pagenum'>1</span>
        <span className='pagenum'>2</span>
        <span className='pagenum'>3</span>
        <span className='pagenum'>4</span>
        <span className='pagenum'>5</span>
        <button className='after-page' type='button'>
          <img src={right} />
        </button>
      </div>
    </div>
  );
}

export default ReviewList;
