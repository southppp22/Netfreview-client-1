import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/***** Components *****/
import Header from './components/Header';
import Search from './pages/Search';
import Review from './pages/Review';
import Sign from './pages/Sign';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
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
