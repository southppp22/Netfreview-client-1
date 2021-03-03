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
import '../css/ReviewComment.css';
import profile from '../img/profile.png';
import plant from '../img/plant.png';
import heart from '../img/heart.png';

function ReviewComment() {
  return (
    <div className='reviewList__wholeInfo'>
      <div className='reviewList-wrap'>
        <div className='reviewList-top'>
          <div className='wholeInfo__profile'>
            <img src={profile} className='profile__img' />
            <span className='profile__nickname'>wanny</span>
          </div>

          <div className='wholeInfo__count'>
            <div className='count__rate'>
              <img className='img-rate' src={plant} />
              <span className='rate-num'>4.5</span>
            </div>
            <div className='count__heart'>
              <img className='img-heart' src={heart} />
              <span className='rate-num'>2</span>
            </div>
          </div>
        </div>

        <p className='wholeInfo__textarea'>
          갓갓갓! 고퀄리티 조선 좀비물 ㅎㅎ 영화 수준으로 영상미가 끝내준다.
          <br />
          작가분이 이 드라마의 주제는 배고픔 이라고 했듯이 , 사람들의 배고픔에
          관심없는 정치판의 민낯 을 좀비라는 극적인 장치로 흥미진진하게 잘
          보여준 ! 갓 웰메이드 드라마
        </p>
      </div>
    </div>
  );
}

export default ReviewComment;
