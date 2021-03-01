import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

function SmallPoster() {
  return (
    <article className='smallPoster'>
      <img></img>
      <div className='smallPoster__info'>
        <span className='smallPoster__name'>포스터 이릉</span>
        <span className='smallPoster__rate-num'>평점 5.0</span>
      </div>
    </article>
  );
}

export default SmallPoster;
