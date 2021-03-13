import React, { Dispatch, SetStateAction, useState } from 'react';
import '../scss/MyPageLogin.scss';
import SignIn from './SignIn';

type MyPageLoginProps = {
  close: Dispatch<SetStateAction<boolean>>;
};

function MyPageLogin({ close }: MyPageLoginProps) {
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  const handleLoginBtn = () => {
    close(false);
    setIsLoginModal(!isLoginModal);
  };

  return (
    <>
      <div
        className={isLoginModal ? 'mylogin__container' : 'mylogin__container'}
      >
        <div className="mylogin__wrapper">
          <h3 className="mylogin__title">
            리뷰 작성은 로그인 이후 사용하실 수 있습니다
          </h3>
          <button
            onClick={() => setIsLoginModal(true)}
            className="mylogin__btn"
          >
            로그인 하러가기
          </button>
        </div>
      </div>
      <>
        {isLoginModal ? <SignIn closeModal={handleLoginBtn}></SignIn> : <></>}
      </>
    </>
  );
}

export default MyPageLogin;
