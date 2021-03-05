import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../scss/Header.scss';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className='header'>
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
          <p onClick={openModal} className='nav-right__auth'>
            로그인
          </p>
        </div>
      </nav>
      {isModalOpen ? <SignIn closeModal={closeModal} /> : null}
    </header>
  );
}

export default Header;
