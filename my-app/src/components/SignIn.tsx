import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  return (
    <section className='login'>
      <img />
      <div className='login-wrap'>
        <h3>로그인</h3>
        <form className='login-form'>
          <input type='text' placeholder='email'></input>
          <input type='text' placeholder='password'></input>
        </form>
        <div className='login-btn'>
          <button>로그인</button>
          <button>회원가입으로 이동</button>
        </div>
        <ul className='login-social'>
          <li>google</li>
          <li>kakao</li>
          <li>facebook</li>
        </ul>
      </div>
    </section>
  );
}

export default SignIn;
