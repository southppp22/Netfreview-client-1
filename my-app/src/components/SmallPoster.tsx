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
function SmallPoster({ id, title, posterUrl, rating }: SmallPosterProps) {
  return (
    <article className="smallPoster">
      <img className="poster" src={posterUrl}></img>
      <div className="smallPoster__info">
        <span className="smallPoster__poster-name">
          {/* 포스터이름{ */}
          {title}
        </span>
        <div className="smallPoster__poster-rate">
          <span className="poster-rate__name">평점</span>
          <span className="poster-rate__rate-num">
            {/* 5.0*/}
            {rating}
          </span>
        </div>
      </div>
    </article>
  );
}

export default SmallPoster;
