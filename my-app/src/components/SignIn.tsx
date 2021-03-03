import React, { useState } from 'react';
import img from '../img/logo.png';
import facebook from '../img/facebook.png';
import google from '../img/google.png';
import kakao from '../img/kakao-talk.png';
import '../css/SignIn.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
// import axios from 'axios';
type isModalprops = {
  closeModal: () => void;
};
const SignIn = ({ closeModal }: isModalprops) => {
  return (
    <div className='signinModal'>
      <div onClick={closeModal} className='modal-back'></div>
      <div className='login'>
        <img className='img' src={img} />
        <div className='login__wrap'>
          <h3 className='login-title'>로그인</h3>
          <form className='login-form'>
            <input
              className='login-input'
              type='text'
              placeholder='이메일'
            ></input>
            <input
              className='login-input'
              type='text'
              placeholder='비밀번호'
            ></input>
          </form>
          <div className='login-btn'>
            <button id='loginBtn' className='loginButton'>
              로그인
            </button>
            <button id='loginBtn' className='signinButton'>
              회원가입으로 이동
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
      </div>
    </div>
  );
};

export default SignIn;
