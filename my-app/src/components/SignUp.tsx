import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import img from '../img/logo.png';
import facebook from '../img/facebook.png';
import google from '../img/google.png';
import kakao from '../img/kakao-talk.png';
import '../scss/SignUp.scss';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
// import axios from 'axios';
import SignIn from './SignIn';

type Inputs = {
  name: string;
  email: string;
  nickname: string;
  password: string;
};

type isModalprops = {
  closeModal: () => void;
};

function SignUp({ closeModal }: isModalprops) {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch('example'));

  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isSignUpClose, setIsSignUpClose] = useState<boolean>(false);

  const openSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpClose(true);
  };

  const closeSignIn = () => {
    setIsSignInOpen(false);
  };

  return (
    <div>
      {isSignUpClose ? null : (
        <div className='signinModal'>
          <div onClick={closeModal} className='modal-back'></div>
          <section className='signup'>
            <img className='img' src={img} />
            <div className='login__wrap'>
              <h3 className='login-title'>회원가입</h3>
              <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <input
                  name='name'
                  ref={register({ required: true })}
                  className='login-input'
                  type='text'
                  placeholder='name'
                ></input>
                <input
                  name='nickname'
                  ref={register({ required: true })}
                  className='login-input'
                  type='text'
                  placeholder='nickname'
                ></input>
                <input
                  name='email'
                  ref={register({
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className='login-input'
                  type='text'
                  placeholder='email'
                ></input>
                {errors.email && <span>This field is required</span>}
                <input
                  name='password'
                  ref={register({
                    required: true,
                    minLength: 6,
                  })}
                  className='login-input'
                  type='text'
                  placeholder='password'
                ></input>
                {errors.name && errors.name.type === 'required' && (
                  <span>This field is required</span>
                )}
                {errors.name && errors.name.type === 'minLength' && (
                  <span>Password must have at least 6 characters</span>
                )}
              </form>
              <div className='login-btn'>
                <button type='submit' id='Btn' className='completeButton'>
                  입력완료
                </button>
                <button
                  onClick={openSignIn}
                  id='Btn'
                  className='loginMoveButton'
                >
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
        </div>
      )}
      {isSignInOpen ? <SignIn closeModal={closeModal} /> : null}
    </div>
  );
}

export default SignUp;
