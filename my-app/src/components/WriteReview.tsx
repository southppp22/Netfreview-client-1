import React, { useState } from 'react';
// import InfoCard from './InfoCard';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
//import axios from 'axios';
import '../scss/WriteReview.scss';
import plantM from '../img/plantM.png';
//import emptyplantM from '../img/emptyplantM.png';

function WriteReview() {
  return (
    <div className="writereview">
      <div className="writereview-wrap">
        <div className="writereview__myscore">
          <h5 className="myscore__title">총평</h5>
          <ul className="myscore__rate">
            <li className="rate-pic">
              <img src={plantM} />
            </li>
            <li className="rate-pic">
              <img src={plantM} />
            </li>
            <li className="rate-pic">
              <img src={plantM} />
            </li>
            <li className="rate-pic">
              <img src={plantM} />
            </li>
            <li className="rate-pic">
              <img src={plantM} />
            </li>
          </ul>
        </div>

        <div className="writereview__text">
          <h6 className="text__title">나의 리뷰</h6>
          <input className="text__textarea"></input>

          <div className="text__btn">
            <button className="btn__review">리뷰등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview;
