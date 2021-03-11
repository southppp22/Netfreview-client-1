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
import SignIn from './components/SignIn';
import useIsLogin from './hooks/useIsLogin';
import Resetpw from './pages/Resetpw';

// axios.defaults.baseURL = 'https://www.server.netfreview.com';
// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

/**********function*************/

function App() {
  const { useLogin, onSetIsLogin, onSetToken } = useIsLogin();
  const { setIsLogin, accessToken } = useLogin;
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const [isvideo, setIsVideo] = useState<any>([]);
  //만료시간
  const JWT_EXPIRY_TIME = 24 * 3600 * 1000;
  //이메일, 비번을 보내면 refreshToken과 acessToken을 return
  const onLoginSuccess = (res: any) => {
    const { accessToken } = res.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    setTimeout(onRefresh, JWT_EXPIRY_TIME - 60000); //로그인연장
  };
  //cookie에 담긴 refreshToken이 자동으로 보내지면, 새로운 refreshToekn과 accessToken을 return
  const onRefresh = () => {
    axios
      .get('users/refresh') // 쿠키에 있는 refresh 토큰을 보내서 -> accesstoken 발급받는다.
      .then((res) => {
        const { accessToken } = res.data.data;
        onSetIsLogin(true);
        onSetToken(accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onRefresh();
  }, []);
  return (
    <div className="wrapper">
      <Router>
        <Header setIsVideo={setIsVideo} />
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
          <Route
            path="/search"
            render={() => {
              return <Search isVideo={isvideo} />;
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
