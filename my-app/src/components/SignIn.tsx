import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';
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
//   useHistory,
// } from 'react-router-dom';
import SignUp from './SignUp';
import Findpw from './Findpw';
import axios from 'axios';
import useIsLogin from '../hooks/useIsLogin';

/*********type************/
interface FormInput {
  email: string;
  password: string;
}

type token = {
  onLoginSuccess: () => void;
  onRefresh: () => void;
};

type isModalprops = {
  closeModal: () => void;
};

/*********Function********/
function SignIn(
  { closeModal }: isModalprops,
  { onLoginSuccess, onRefresh }: token
) {
  const { register, handleSubmit, errors } = useForm<FormInput>();
  const { useLogin, onSetIsLogin, onSetToken } = useIsLogin();
  const { setIsLogin, accessToken } = useLogin;
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [isSignInClose, setIsSignInClose] = useState<boolean>(false);
  const [isFindpwOpen, setIsFindpwOpen] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const history = useHistory();

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

  const openFindpw = () => {
    setIsSignInClose(true);
    setIsFindpwOpen(true);
  };

  // const closeSignin = () => {
  //   setIsSignInClose(true);
  //   onSetIsLogin(true);
  // };

  //만료시간
  const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

  const onSubmit = () => {
    axios
      .post('/users/signin', {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        onLoginSuccess;
        // const { accessToken } = res.data.data.accessToken;
        onSetIsLogin(true);
        onSetToken(res.data.data.accessToken);
        alert(`로그인 되었습니다.`);
        setIsSignInClose(true);
        closeModal();
      })
      .catch((error) => {
        console.log(error.data);
        // if (error.response.data.message === `비밀번호가 올바르지 않습니다.`) {
        //   alert(`비밀번호가 틀렸습니다.`);
        // } else if (
        //   error.response.data.message === `이메일이 올바르지 않습니다.`
        // ) {
        //   alert(`이메일이 틀렸습니다.`);
        // } else if (error.response.data.statusCode === 401) {
        //   alert(`입력해주세요`);
        // }
      });
  };

  return (
    <div>
      {isSignInClose ? null : (
        <div className="signinModal">
          <div onClick={closeModal} className="modal-back"></div>
          <div className="login">
            <img className="img-login" src={img} />
            <section className="login__wrap">
              <h3 className="login-title">로그인</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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
                  className="login-input"
                  type="password"
                  placeholder="비밀번호"
                ></input>
              </form>
              <div className="login-btn">
                {/* {setIsLogin ? ( */}
                <button
                  onClick={onSubmit}
                  type="submit"
                  id="loginBtn"
                  className="loginButton"
                >
                  로그인
                </button>
                {/*  ) : (
                //   <button
                //     onClick={closeSignin}
                //     type="submit"
                //     id="loginBtn"
                //     className="loginButton"
                //   >
                //     로그인
                //   </button>
                // )} */}

                <button
                  onClick={openSignUp}
                  id="loginBtn"
                  type="button"
                  className="signinButton"
                >
                  회원가입으로 이동
                </button>
                <button className="findpw" onClick={openFindpw} type="button">
                  비밀번호를 잊으셨나요?
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
      {isFindpwOpen ? <Findpw closeModal={closeModal} /> : null}
    </div>
  );
}

export default SignIn;
