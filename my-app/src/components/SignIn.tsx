import React, { useState } from 'react';
import img from '../img/logo.png';
import facebook from '../img/facebook.png';
import google from '../img/google.png';
import kakao from '../img/kakao-talk.png';
import '../scss/SignIn.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import SignUp from './SignUp';
import Sign from '../pages/Sign';
// import axios from 'axios';
type isModalprops = {
  closeModal: () => void;
};

function SignIn({ closeModal }: isModalprops) {
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [isSignInClose, setIsSignInClose] = useState<boolean>(false);

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsSignInClose(true);
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  return (
    <div>
      {isSignInClose ? null : (
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
                <button
                  onClick={openSignUp}
                  id='loginBtn'
                  className='signinButton'
                >
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
      )}
      {isSignUpOpen ? <SignUp closeModal={closeModal} /> : null}
    </div>
  );
}

export default SignIn;
