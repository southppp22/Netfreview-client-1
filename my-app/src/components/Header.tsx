import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyInfoThunk } from '../modules/myInfo';
import profile from '../img/profileImg.svg';
import SignIn from './SignIn';
import '../scss/Header.scss';

/************** 함수 *************/

function Header() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const { status, isLogin } = useSelector((state: RootState) => state.login);
  const { profileUrl } = useSelector((state: RootState) => state.myInfo);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [headerClass, setHeaderClass] = useState('basic');
  const [query, setquery] = useState<string>('');
  // const [isMain, setIsMain] = useState(false);
  // const [isReview, setIsReview] = useState(false);

  const IsMain = () => {
    return location === '/';
  };
  const IsReview = () => {
    return location.includes('/review/');
  };

  const onChangeText = (e: any) => {
    setquery(e.target.value);
  };
  // const onCleanText = () => {
  //   setInputText('');
  // };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMyInfoThunk());
    }
  }, [status, dispatch]);

  return (
    // path가 /(메인) 혹은 /review인 경우는 'header'와 headerClass로 className을 할당한다. 그 외에는 'header'만 할당해준다.
    //headerClass는 스크롤에 따른 헤더 배경으르 갈아준다.
    <header
      className={IsMain() || IsReview() ? `header ${headerClass}` : 'header'}
    >
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-left__logo"></Link>
          <ul className="nav-left__type">
            <li>
              {/* <Link to="/resetpw">영화</Link> */}
              영화
            </li>
            <li>
              <Link to="/">TV 프로그램</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <form className="search-form">
            <input
              onChange={onChangeText}
              value={query}
              type="text"
              className="search-form__input"
              placeholder="작품 제목을 검색해 주세요"
            />
            <Link to={`/search?q=${query}`}>
              <button
                onClick={() => setquery('')}
                type="submit"
                className="search-form__button"
              >
                search
              </button>
            </Link>
          </form>
          {isLogin ? (
            <div className="nav-right__auth profileImg">
              <Link to="/mypage">
                <img src={profileUrl || profile} />
              </Link>
            </div>
          ) : (
            <div onClick={openModal} className="nav-right__auth">
              로그인
            </div>
          )}
        </div>
      </nav>
      {isModalOpen ? <SignIn closeModal={closeModal} /> : null}
    </header>
  );
}

export default Header;
