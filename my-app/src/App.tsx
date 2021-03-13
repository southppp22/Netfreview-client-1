import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
/***** Components *****/
import Header from './components/Header';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Footer from './components/Footer';
import Search from './pages/Search';
import Review from './pages/Review';
import ModifyUserInfo from './pages/ModifyUserInfo';
import SignIn from './components/SignIn';
import Resetpw from './pages/Resetpw';
import Userpage from './pages/Userpage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import Oauth from './pages/Oauth';

// axios.defaults.baseURL = 'https://www.server.netfreview.com';
// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

/**********function*************/

function App() {
  const { isLogin } = useSelector((state: RootState) => state.login);
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
          <Route
            path="/search"
            render={() => {
              return <Search />;
            }}
          />
          <Route path="/review/:videoId" component={Review} />
          <Route path="/signin" component={SignIn} />
          <Route path="/resetpw" component={Resetpw} />
          <Route path="/userpage/:userId" component={Userpage} />
          <Route path="/oauth" component={Oauth} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
