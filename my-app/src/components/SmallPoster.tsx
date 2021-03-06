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

type SmallPosterProps = {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
};
// { id, title, posterUrl, rating }: SmallPosterProps ->인자로 들어갈 값

function SmallPoster() {
  return (
    <article className="smallPoster">
      <img className="poster"></img>
      {/*src={posterUrl}*/}
      <div className="smallPoster__info">
        <span className="smallPoster__poster-name">
          포스터이름
          {/*{title}*/}
        </span>
        <div className="smallPoster__poster-rate">
          <span className="poster-rate__name">평점</span>
          <span className="poster-rate__rate-num">
            5.0
            {/*{rating}*/}
          </span>
        </div>
      </div>
    </article>
  );
}

export default SmallPoster;
