import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <nav className='nav-left'>
        <h1 className='nav-left__logo'></h1>
        <ul className='nav-left__type'>
          <li>영화</li>
          <li>TV 프로그램</li>
        </ul>
      </nav>
      <nav className='nav-right'>
        <form className='search-form'>
          <input
            type='text'
            className='search-form__input'
            placeholder='작품 제목을 검색해 주세요'
          />
          <button type='submit' className='search-form__button'></button>
        </form>
        <div className='nav-right__auth'>로그인</div>
      </nav>
    </div>
  );
}

export default Header;
