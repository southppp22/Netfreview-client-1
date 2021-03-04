import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import axios from 'axios';
import './App.css';

/***** Components *****/
import Header from './components/Header';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Footer from './components/Footer';
// import RecommendedModal from './
import Review from './pages/Review';
// import Sign from './pages/Sign';
import ReviewBanner from './components/ReviewBanner';
import SmallPoster from './components/SmallPoster';
import InfoCard from './components/InfoCard';
import Myreview from './components/Myreview';
import SignIn from './components/SignIn';
import ReviewComment from './components/ReviewComment';
import ReviewList from './components/ReviewList';
import SideBar from './components/SideBar';
import WriteReview from './components/WriteReview';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/mypage' component={Mypage} />
          {/*<Route path='/search' component={Search} />
        <Route path='/review/:id' component={Review} />
        <Route path='/review/:id/page?' component={Review} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
