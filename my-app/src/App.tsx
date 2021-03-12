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
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import { refreshThunk } from './modules/login';

// axios.defaults.baseURL = 'https://www.server.netfreview.com';
// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

/**********function*************/

function App() {
  const { isLogin } = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch();
  //만료시간
  // const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

  //이메일, 비번을 보내면 refreshToken과 acessToken을 return
  // const onLoginSuccess = (res: any) => {
  //   const { accessToken } = res.data;
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  //   setTimeout(onRefresh, JWT_EXPIRY_TIME - 60000); //로그인연장
  // };
  //cookie에 담긴 refreshToken이 자동으로 보내지면, 새로운 refreshToekn과 accessToken을 return

  // const onRefresh = () => {
  //   dispatch(refreshThunk());
  // };

  // useEffect(() => {
  //   if (!isLogin) {
  //     onRefresh();
  //   }
  // }, [isLogin, onRefresh]);

  useEffect(() => {
    if (!isLogin) {
      dispatch(refreshThunk());
    }
  }, [isLogin, dispatch]);

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
