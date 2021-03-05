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
import '../scss/SideBar.scss';
import plantM from '../img/plantM.png';
import emptyplantM from '../img/emptyplantM.png';

function SideBar() {
  return (
    <aside className='video-info'>
      <ul className='video-info__wrap'>
        <li className='wrap__average'>
          <h5 className='wrap__average-title'>총평</h5>
          <div className='wrap__average-rate'>
            <span className='wrap__average-score'>3.6</span>
            <ul className='wrap__average-emoji'>
              <li className='average-pic'>
                <img src={plantM} />
              </li>
              <li className='average-pic'>
                <img src={plantM} />
              </li>
              <li className='average-pic'>
                <img src={plantM} />
              </li>
              <li className='average-pic'>
                <img src={plantM} />
              </li>
              <li className='average-pic'>
                <img src={plantM} />
              </li>
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
