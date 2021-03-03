import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

function Sign() {
  // const { open, close, header } = props;
  // const [isOpen, setIsOpen] = useState(false);
  return (
    //메인페이지 로그인
    //<button onClick={() => setIsOpen(true)}>로그인</button>
    <div>
      {/* {isOpen ? () : ()} */}
      <SignUp />
      {/* <SignIn /> */}
    </div>
  );
}
export default Sign;
