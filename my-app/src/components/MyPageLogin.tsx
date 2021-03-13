import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useSelector } from 'react-redux';
import rootReducer, { RootState } from '../modules';
import '../scss/MyPageLogin.scss';
import SignIn from './SignIn';

type MyPageLoginProps = {
  active: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

function MyPageLogin({ active, setIsModal }: MyPageLoginProps) {
  const { status, isLogin } = useSelector((state: RootState) => state.login);
  const handleLoginBtn = () => {
    setIsModal(!active);
    document.body.style.overflow = 'unset';
  };
  if (active) {
    document.body.style.overflow = 'hidden';
  }
  useEffect(() => {
    if (isLogin && status === 'idle') {
      setIsModal(false);
    }
  }, [isLogin, status]);
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
