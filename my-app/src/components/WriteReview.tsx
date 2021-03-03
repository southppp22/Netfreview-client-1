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

function WriteReview() {
  return (
    <article className='myreview'>
      <div className='myreview__myscore'>
        <span className='myscore__title'></span>
        <ul className='myscore__emoji'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className='myreview__text'>
        <span className='text__title'></span>
        <textarea
          /*name="" id="" cols="30" rows="10"*/ className='text_textarea'
        ></textarea>
      </div>
    </article>
  );
}

export default WriteReview;
