import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import img from '../img/logo.png';
import facebook from '../img/facebook.png';
import google from '../img/google.png';
import kakao from '../img/kakao-talk.png';
import '../scss/SignIn.scss';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
import SignUp from './SignUp';
//import Sign from '../pages/Sign';
import axios from 'axios';
import useIsLogin from '../hooks/useIsLogin';

/*********type************/
interface FormInput {
  email: string;
  password: string;
}

type isModalprops = {
  closeModal: () => void;
};

/*********Function********/
function SignIn({ closeModal }: isModalprops) {
  const { register, handleSubmit } = useForm<FormInput>();
  const { useLogin, onSetIsLogin, onSetToken } = useIsLogin();
  const { setIsLogin, accessToken } = useLogin;

  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [isSignInClose, setIsSignInClose] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsSignInClose(true);
  };

  // const closeSignUp = () => {
  //   setIsSignUpOpen(false);
  // };

  const onSubmit = () => {
    //e.preventDefault();

    axios
      .post('/users/signin', {
        email,
        password,
      })
      .then((res) => {
        onSetIsLogin(true);
        onSetToken(res.data.data.accessToken);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
      })
      .catch((error) => console.log(error));

    // 로그인 연장
    // onSilentRefresh = () => {
    //   axios
    //     .post('/silent-refresh', data)
    //     .then(onLoginSuccess)
    //     .catch((error) => {
    //       // ... 로그인 실패 처리
    //     });
    // };

    // onLoginSuccess = (response) => {
    //   const { accessToken } = response.data;

    //   // accessToken 설정
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    //   // accessToken 만료하기 1분 전에 로그인 연장
    //   setTimeout(onSilentRefresh, JWT_EXPIRRY_TIME - 60000);
    // };
  };

  return (
    <div>
      {isSignInClose ? null : (
        <div className="signinModal">
          <div onClick={closeModal} className="modal-back"></div>
          <div className="login">
            <img className="img" src={img} />
            <section className="login__wrap">
              <h3 className="login-title">로그인</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input
                  onChange={onChangeEmail}
                  className="login-input"
                  type="text"
                  placeholder="이메일"
                ></input>
                <input
                  onChange={onChangePassword}
                  className="login-input"
                  type="password"
                  placeholder="비밀번호"
                ></input>
              </form>
              <div className="login-btn">
                {/* {setIsLogin ? (): ()} */}
                <button
                  onClick={onSubmit}
                  type="submit"
                  id="loginBtn"
                  className="loginButton"
                >
                  로그인
                </button>
                <button
                  onClick={openSignUp}
                  id="loginBtn"
                  type="button"
                  className="signinButton"
                >
                  회원가입으로 이동
                </button>
              </div>
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
            </section>
          </div>
        </div>
      )}
      {isSignUpOpen ? <SignUp closeModal={closeModal} /> : null}
    </div>
  );
}

export default SignIn;
