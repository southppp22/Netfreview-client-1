/* eslint-disable react/prop-types */
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
import '../scss/ReviewComment.scss';
import profile from '../img/profile.png';
import plant from '../img/plant.png';
import heart from '../img/heart.png';

type ReviewCommentProps = {
  id: number;
  rating: number;
  text: string;
  createdAt?: string;
  updatedAt?: string;
  user: {
    id: string;
    nickname: string;
    profileUrl: null | string;
  };
  likeCount: number;
  isLike: number;
};

function ReviewComment(props: ReviewCommentProps) {
  const {
    user: { id, nickname, profileUrl },
    text,
    rating,
    likeCount,
  } = props;
  return (
    <div className="reviewList__wholeInfo">
      <div className="reviewList-wrap">
        <div className="reviewList-top">
          <div className="wholeInfo__profile">
            <div className="profile__wrapper">
              <img src={profileUrl || profile} className="profile__img" />
            </div>
            <span className="profile__nickname">{nickname}</span>
          </div>

          <div className="wholeInfo__count">
            <div className="count__rate">
              <img className="img-rate" src={plant} />
              <span className="rate-num">{rating}</span>
            </div>
            <button className="count__heart">
              <img className="img-heart" src={heart} />
              <span className="rate-num">{likeCount}</span>
            </button>
          </div>
        </div>

        <p className="wholeInfo__textarea">{text}</p>
      </div>
    </div>
  );
}

export default ReviewComment;
