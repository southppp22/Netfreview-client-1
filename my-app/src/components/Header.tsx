import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../scss/Header.scss';
import SignIn from './SignIn';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [headerClass, setHeaderClass] = useState('basic');

  const handleScroll = () => {
    if (pageYOffset > 70) {
      setHeaderClass('');
    } else if (pageYOffset <= 70 && pageYOffset >= 0) {
      setHeaderClass('basic');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    // path가 /(메인) 혹은 /review인 경우는 'header'와 headerClass로 className을 할당한다. 그 외에는 'header'만 할당해준다.
    //headerClass는 스크롤에 따른 헤더 배경으르 갈아준다.
    <header
      className={
        useLocation().pathname === '/' || useLocation().pathname === '/review'
          ? `header ${headerClass}`
          : 'header'
      }
    >
      <nav className='nav'>
        <div className='nav-left'>
          <Link to='/' className='nav-left__logo'></Link>
          <ul className='nav-left__type'>
            <li>
              <Link to='/'>영화</Link>
            </li>
            <li>
              <Link to='/'>TV 프로그램</Link>
            </li>
          </ul>
        </div>
        <div className='nav-right'>
          <form className='search-form'>
            <input
              type='text'
              className='search-form__input'
              placeholder='작품 제목을 검색해 주세요'
            />
            <button type='submit' className='search-form__button'></button>
          </form>
          {/* <Link to='/sign' className='nav-right__auth'>
            로그인
          </Link> */}
          <div onClick={openModal} className='nav-right__auth'>
            로그인
          </div>
        </div>
      </nav>
      {isModalOpen ? <SignIn closeModal={closeModal} /> : null}
    </header>
  );
}

export default Header;
