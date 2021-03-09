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
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/search" component={Search} />
          <Route path="/review/:videoId" component={Review} />
          <Route path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
