import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
// import axios from 'axios';
import '../css/InfoCard.css';

function InfoCard() {
  return (
    <li className='infocard'>
      <h6 className='infocard__title'>영화 상세정보</h6>
      <span className='infocard__detail'>
        해가 지면 또다시 그들이 일어나리라. 안현 대감에게 향하던 길, 버려진
        백성들을 외면할 수 없는 세자. 서비는 지율헌으로 가자고 제안하지만,
        시간이 그리 많지 않다.
      </span>
    </li>
  );
}

export default InfoCard;
