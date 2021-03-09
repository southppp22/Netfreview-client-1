import React, { useState, useRef /*FormEvent*/ } from 'react';
import _ from 'lodash/fp';
//import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
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
import axios from 'axios';

/********* type ********/
interface FormInput {
  name: string;
  email: string;
  nickname: string;
  password: string;
}

type isModalprops = {
  closeModal: () => void;
};

/************ Function *************/

function SignUp({ closeModal }: isModalprops) {
  const { register, handleSubmit, watch, errors } = useForm<FormInput>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // console.log(watch('password-confirm'));
  const Password = useRef();
  Password.current = watch('Password');

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e: any) => {
    setNickname(e.target.value);
  };
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    //e.preventDefault();
    axios
      .post('/users/signup', {
        name,
        nickname,
        email,
        password,
      })
      .then((res) => alert(`회원가입이 완료되었습니다!`))
      .catch((error) => console.log(error));
  };

  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isSignUpClose, setIsSignUpClose] = useState<boolean>(false);

  const openSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpClose(true);
  };

  // const closeSignIn = () => {
  //   setIsSignInOpen(false);
  // };

  return (
    <div>
      {isSignUpClose ? null : (
        <div className="signinModal">
          <div onClick={closeModal} className="modal-back"></div>
          <section className="signup">
            <img className="img" src={img} />
            <div className="login__wrap">
              <h3 className="Login-title">회원가입</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input
                  name="Name"
                  ref={register({
                    required: true,
                    maxLength: 4,
                    minLength: 2,
                    pattern: /^[가-힣]+$/,
                  })}
                  className="login-input"
                  // type='text'
                  onChange={onChangeName}
                  placeholder="Name"
                />
                {_.get('Name.type', errors) === 'required' && (
                  <p className="input">입력해주세요!</p>
                )}
                {_.get('Name.type', errors) === 'maxLength' && (
                  <p className="input">5자 미만으로 적어주세요!</p>
                )}
                {_.get('Name.type', errors) === 'minLength' && (
                  <p className="input">2글자 이상 적어주세요!</p>
                )}
                {_.get('Name.type', errors) === 'pattern' && (
                  <p className="input">한글로 적어주세요!</p>
                )}
                <input
                  onChange={onChangeNickname}
                  name="Nickname"
                  ref={register({
                    required: true,
                    maxLength: 15,
                    minLength: 2,
                    pattern: /^[가-힣a-zA-Z]+$/,
                  })}
                  className="login-input"
                  type="text"
                  placeholder="Nickname"
                />
                {_.get('Nickname.type', errors) === 'required' && (
                  <p className="input">입력해주세요!</p>
                )}
                {_.get('Nickname.type', errors) === 'maxLength' && (
                  <p className="input">16자 미만으로 적어주세요!</p>
                )}
                {_.get('Nickname.type', errors) === 'minLength' && (
                  <p className="input">2글자 이상 적어주세요!</p>
                )}
                {_.get('Nickname.type', errors) === 'pattern' && (
                  <p className="input">특수문자나 자음,모음만은 안되요!</p>
                )}
                <input
                  onChange={onChangeEmail}
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  })}
                  className="login-input"
                  type="text"
                  placeholder="Email"
                />
                {_.get('email.type', errors) === 'required' && (
                  <p className="input">입력해주세요!</p>
                )}
                {_.get('email.type', errors) === 'pattern' && (
                  <p className="input">이메일형식에 맞춰주세요!</p>
                )}

                <input
                  onChange={onChangePassword}
                  name="Password"
                  ref={register({
                    required: true,
                    // pattern: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                    pattern: /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/,
                  })}
                  className="login-input"
                  type="password"
                  placeholder="Password"
                />
                {_.get('Password.type', errors) === 'required' && (
                  <p className="input">입력해주세요!</p>
                )}
                {_.get('Password.type', errors) === 'pattern' && (
                  <p className="input">
                    영문,숫자,특수문자(!@$%^&* 만 허용)를 사용하여 6~16자까지
                    적어주세요!(영문은 대소문자를 구분합니다)
                  </p>
                )}

                <input
                  // onChange={onChangePassword}
                  name="password-confirm"
                  ref={register({
                    required: true,
                    validate: (value) => value === Password.current,
                  })}
                  className="login-input"
                  type="password"
                  placeholder="Password"
                />
                {_.get('password-confirm.type', errors) === 'required' && (
                  <p className="input">입력해주세요!</p>
                )}
                {_.get('password-confirm.type', errors) === 'validate' && (
                  <p className="input">비밀번호가 맞지 않습니다!</p>
                )}

                <div className="login-btn">
                  <button
                    onClick={onSubmit}
                    type="submit"
                    id="Btn"
                    className="completeButton"
                  >
                    입력완료
                  </button>
                  <button
                    onClick={openSignIn}
                    type="button"
                    id="Btn"
                    className="loginMoveButton"
                  >
                    로그인으로 이동
                  </button>
                </div>
              </form>

              <ul className="login-social">
                <li className="login-social__wrap">
                  <ul>
                    <li className="google">
                      <img className="logo" src={google} />
                    </li>
                    <li className="google">
                      <img className="logo" src={kakao} />
                    </li>
                    <li className="facebook ">
                      <img className="logo" src={facebook} />
                    </li>
                  </ul>
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
