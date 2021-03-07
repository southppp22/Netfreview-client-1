import React, { useState } from 'react';
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
// import ReviewComment from './components/ReviewComment';
// import ReviewList from './components/ReviewList';
// import SideBar from './components/SideBar';
// import WriteReview from './components/WriteReview';

axios.defaults.baseURL = 'https://www.gettoday4.click';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  const [isLogin, setIsLogin] = useState(true); // 회원정보 부분이라 로그인되어있는상태에만 작동되게 하려고 임의로 넣어놨습니다.
  // 추후 정완이가 로그인부분 isLogin redux로 구현하면 그때 수정할 예정입니다!
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          {isLogin ? (
            <Route path="/mypage">
              <Switch>
                <Route exact path="/mypage" component={Mypage} />
                <Route exact path="/mypage/modify" component={ModifyUserInfo} />
              </Switch>
            </Route>
          ) : null}
          <Route path="/search" component={Search} />
          <Route path="/review/:id" component={Review} />
          <Route path="/review/:id/page?" component={Review} />
          <Route path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
