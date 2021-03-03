import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/***** Components *****/
//import Header from './components/Header';
import Search from './pages/Search';
//import Review from './pages/Review';
//import Sign from './pages/Sign';
// import axios from 'axios';
import './App.css';
import ReviewBanner from './components/ReviewBanner';
import SmallPoster from './components/SmallPoster';
import InfoCard from './components/InfoCard';
import Myreview from './components/Myreview';
import SignIn from './components/SignIn';
import ReviewComment from './components/ReviewComment';
import ReviewList from './components/ReviewComment';

function App() {
  return (
    <Router>
      <ReviewList />
      {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mypage' component={Mypage} />
        <Route path='/search' component={Search} />
        <Route path='/recommend' component={RecommendedModal} />
        <Route path='/review/:id' component={Review} />
        <Route path='/review/:id/page?' component={Review} />
        <Route path='/signin' component={Sign} />
        <Route path='/signup' component={SignUp} />
      </Switch>
      <Footer /> */}
    </Router>
  );
}

export default App;
