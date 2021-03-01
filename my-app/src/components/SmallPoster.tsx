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
        <span className='smallPoster__name'></span>
      </div>
    </article>
  );
}

export default SmallPoster;
