import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsLogin from '../hooks/useIsLogin';
import useUserInfo from '../hooks/useUserInfo';
import profile from '../img/profileImg.svg';
import SignIn from './SignIn';
import '../scss/Header.scss';

/******* 타입 ********/

type ProfileUrl = {
  profileUrl: string;
};

type inputTextProps = {
  setIsVideo: (e: any) => void;
};

/***** 함수 *****/

function Header({ setIsVideo }: inputTextProps) {
  const { useLogin } = useIsLogin();
  const { setIsLogin, accessToken } = useLogin;
  const { userInfo } = useUserInfo();
  const { profileImgPath } = userInfo;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [headerClass, setHeaderClass] = useState('basic');
  const [profileImg, setProfileImg] = useState(profileImgPath);
  const [inputText, setInputText] = useState<string>('');
  const [isMain, setIsMain] = useState(false);
  const [isReview, setIsReview] = useState(false);

  const Searchbtn = () => {
    axios
      .get(`/videos/videolist?q=${inputText}`)
      .then((res) => {
        console.log(res.data.videoList);
        setIsVideo(res.data.videoList);
      })
      .catch((error) => console.log(error));
  };

  const onChangeText = (e: any) => {
    setInputText(e.target.value);
  };

  const onCleanText = () => {
    setInputText('');
  };

  const handleScroll = () => {
    if (pageYOffset > 70) {
      setHeaderClass('');
    } else if (pageYOffset <= 70 && pageYOffset >= 0) {
      setHeaderClass('basic');
    }
  };
  const isLogin = () => {
    return setIsLogin;
  };
  const IsMain = () => {
    setIsMain(useLocation().pathname === '/');
  };
  const IsReview = () => {
    setIsReview(useLocation().pathname.includes('/review/'));
  };

  useEffect(() => {
    axios
      .get('/users/userinfo', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        const { profileUrl }: ProfileUrl = res.data;
        if (profileUrl) {
          setProfileImg(profileUrl);
        }
      });
  }, [userInfo]);
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
    <header className={isMain || isReview ? `header ${headerClass}` : 'header'}>
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
              type="text"
              className="search-form__input"
              placeholder="작품 제목을 검색해 주세요"
            />
            <Link to="/search">
              <button
                onClick={Searchbtn}
                type="submit"
                className="search-form__button"
              >
                search
              </button>
              {/* <button type="submit" onClick={onCleanText}>
                delete
              </button> */}
            </Link>
          </form>
          {isLogin() ? (
            <div className="nav-right__auth profileImg">
              <Link to="/mypage">
                <img src={profileImgPath} />
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
