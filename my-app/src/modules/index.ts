import { combineReducers } from 'redux';
import userInfo from './userInfo';
import reviews from './reviews';
import isLogin from './isLogin';
import login from './login';
import video from './video';
import videoList from './videoList';

const rootReducer = combineReducers({
  userInfo,
  reviews,
  video,
  videoList,
  isLogin,
  login,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
