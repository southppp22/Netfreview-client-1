import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
// import axios from 'axios';
import '../scss/SmallPoster.scss';

function SmallPoster() {
  return (
    <article className='smallPoster'>
      <img className='poster'></img>
      <div className='smallPoster__info'>
        <span className='smallPoster__poster-name'>포스터이름</span>
        <div className='smallPoster__poster-rate'>
          <span className='poster-rate__name'>평점</span>
          <span className='poster-rate__rate-num'>5.0</span>
        </div>
      </div>
    </article>
  );
}

export default SmallPoster;
