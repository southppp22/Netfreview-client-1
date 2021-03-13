import axios from 'axios';
import React, { useState, useRef /*FormEvent*/ } from 'react';
import { useForm } from 'react-hook-form';
import SignIn from './SignIn';
import img from '../img/logo.png';
import '../scss/Findpw.scss';

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

function Findpw({ closeModal }: isModalprops) {
  const { register, handleSubmit, watch } = useForm<FormInput>();
  // const { setIsLogin, accessToken } = useLogin;
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isFindpwClose, setIsFindpwClose] = useState<boolean>(false);
  //const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  // console.log(watch('password-confirm'));
  const Password = useRef();
  Password.current = watch('Password');

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    axios
      .post('/users/pw-find', {
        email,
      })
      .then((res) => {
        alert(`이메일전송완료`);
        console.log(res);
        //setIsFindpwClose(true);
      })
      .catch((error) => console.log(error));
  };

  const openSignIn = () => {
    setIsSignInOpen(true);
    setIsFindpwClose(true);
  };

  return (
    <div>
      {isFindpwClose ? null : (
        <div className="findpwModal">
          <div onClick={closeModal} className="modal-back"></div>
          <section className="section-findpw">
            <img className="pwimg" src={img} />
            <div className="pw__wrap">
              <h3 className="pw-title">비밀번호찾기</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="pw-form">
                <input
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^[가-힣]+$/,
                  })}
                  className="pw-input"
                  // type='text'
                  onChange={onChangeEmail}
                  placeholder="Email"
                />

                <div className="pw-btn">
                  <button
                    onClick={onSubmit}
                    type="submit"
                    id="pwBtn"
                    className="completeButton"
                  >
                    이메일 전송
                  </button>
                  <button
                    onClick={openSignIn}
                    type="submit"
                    id="Btn"
                    className="pwMoveButton"
                  >
                    로그인으로 이동
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      )}
      {isSignInOpen ? <SignIn closeModal={closeModal} /> : null}
    </div>
  );
}

export default Findpw;
