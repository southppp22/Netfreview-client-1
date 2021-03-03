import React, { useState } from 'react';
import img from '../img/logo.png';
import facebook from '../img/facebook.png';
import google from '../img/google.png';
import kakao from '../img/kakao-talk.png';
import '../css/SignUp.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
// import axios from 'axios';

function SignUp() {
  return (
    <section className='login'>
      <img className='img' src={img} />
      <div className='login__wrap'>
        <h3 className='login-title'>회원가입</h3>
        <form className='login-form'>
          <input className='login-input' type='text' placeholder='name'></input>
          <input
            className='login-input'
            type='text'
            placeholder='nickname'
          ></input>
          <input
            className='login-input'
            type='text'
            placeholder='email'
          ></input>
          <input
            className='login-input'
            type='text'
            placeholder='password'
          ></input>
        </form>
        <div className='login-btn'>
          <button id='Btn' className='completeButton'>
            입력완료
          </button>
          <button id='Btn' className='loginButton'>
            로그인으로 이동
          </button>
        </div>
        <ul className='login-social'>
          <li className='login-social__wrap'>
            <li className='google'>
              <img className='logo' src={google} />
            </li>
            <li className='google'>
              <img className='logo' src={kakao} />
            </li>
            <li className='facebook '>
              <img className='logo' src={facebook} />
            </li>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SignUp;
