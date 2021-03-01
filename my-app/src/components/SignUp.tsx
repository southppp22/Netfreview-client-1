import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  return (
    <section className='login'>
      <img />
      <div className='login__wrap'>
        <h3>로그인</h3>
        <form className='login__form'>
          <input type='text' placeholder='name'></input>
          <input type='text' placeholder='nickname'></input>
          <input type='text' placeholder='email'></input>
          <input type='text' placeholder='password'></input>
        </form>
        <div className='login__btn'>
          <button>입력완료</button>
          <button>로그인으로 이동</button>
        </div>
        <ul className='login__social'>
          <li className='login__social__google'>google</li>
          <li className='login__social__google'>kakao</li>
          <li className='login__social--google'>facebook</li>
        </ul>
      </div>
    </section>
  );
}

export default SignUp;
