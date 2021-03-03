import React, { useState } from 'react';
import InfoCard from './InfoCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
//import axios from 'axios';
import '../css/Myreview.css';
import profile from '../img/profile.png';
import plant from '../img/plant.png';
import heart from '../img/heart.png';

function Myreview() {
  return (
    <div className='reviewList__wholeInfo'>
      <div className='reviewList-wrap'>
        <div className='reviewList-top'>
          <div className='wholeInfo__profile'>
            <img src={profile} /*alt=""*/ className='profile__img' />
            <span className='profile__nickname'>wannywan</span>
          </div>

          <div className='wholeInfo__count'>
            <div className='count__rate'>
              <img className='img-rate' src={plant} />
              <span className='rate-num'>4.5</span>
            </div>
            <div className='count__heart'>
              <img className='img-heart' src={heart} />
              <span className='rate-num'>2.0</span>
            </div>
          </div>
        </div>

        <textarea className='wholeInfo__textarea'>넘모넘모재밋쨔나!</textarea>

        <div className='wholeInfo__btn'>
          <button className='btn__review'>수정</button>
          <button className='btn__review'>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default Myreview;
