import React, { Dispatch, SetStateAction, useState } from 'react';
import '../scss/MyPageLogin.scss';
import SignIn from './SignIn';

type MyPageLoginProps = {
  active: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

function MyPageLogin({ setIsModal, active }: MyPageLoginProps) {
  const handleLoginBtn = () => {
    setIsModal(!active);
    document.body.style.overflow = 'unset';
  };
  if (active) {
    document.body.style.overflow = 'hidden';
  }
  return (
    <>
      <div className="mylogin__container">
        <div className="mylogin__wrapper">
          <h3 className="mylogin__title">
            리뷰 작성은 로그인 이후 사용하실 수 있습니다
          </h3>
          <button onClick={() => setIsModal(true)} className="mylogin__btn">
            로그인 하러가기
          </button>
        </div>
      </div>
      <>{active ? <SignIn closeModal={handleLoginBtn}></SignIn> : <></>}</>
    </>
  );
}

export default MyPageLogin;
