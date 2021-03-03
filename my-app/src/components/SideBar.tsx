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

function SideBar() {
  return (
    <aside className='video-info'>
      <ul>
        <li className='video-info__average'>
          <h6 className='video-in__average--title'></h6>
          <div className='video-info__average--rate'>
            <span className='video-info__average--score'></span>
            <ul className='video-info__average--emoji'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </ul>
    </aside>
  );
}

export default SideBar;
