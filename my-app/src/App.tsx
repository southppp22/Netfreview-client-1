import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

/***** Components *****/
import Header from './components/Header';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Footer from './components/Footer';
import Search from './pages/Search';
import Review from './pages/Review';
import ModifyUserInfo from './pages/ModifyUserInfo';
// import Sign from './pages/Sign';
// import ReviewBanner from './components/ReviewBanner';
// import SmallPoster from './components/SmallPoster';
// import InfoCard from './components/InfoCard';
// import Myreview from './components/Myreview';
import SignIn from './components/SignIn';
import useIsLogin from './hooks/useIsLogin';
import Resetpw from './pages/Resetpw';
// import ReviewComment from './components/ReviewComment';
// import ReviewList from './components/ReviewList';
// import SideBar from './components/SideBar';
// import WriteReview from './components/WriteReview';

axios.defaults.baseURL = 'https://www.gettoday4.click';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  const { useLogin } = useIsLogin();
  const { setIsLogin, accessToken } = useLogin;

  //만료시간
  const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

  //이메일, 비번을 보내면 refreshToken과 acessToken을 return
  const onLoginSuccess = (res: any) => {
    const { accessToken } = res.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    onRefresh();
    setTimeout(onRefresh, JWT_EXPIRY_TIME - 60000); //로그인연장
  };

  //cookie에 담긴 refreshToken이 자동으로 보내지면, 새로운 refreshToekn과 accessToken을 return
  const onRefresh = () => {
    axios
      .post('/users/refresh')
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onRefresh();
  });

  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          {setIsLogin ? (
            <Route path="/mypage">
              <Switch>
                <Route exact path="/mypage" component={Mypage} />
                <Route exact path="/mypage/modify" component={ModifyUserInfo} />
              </Switch>
            </Route>
          ) : null}
          <Route path="/search" component={Search} />
          <Route path="/review/:videoId" component={Review} />
          <Route path="/signin" component={SignIn} />
          <Route path="/resetpw" component={Resetpw} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
