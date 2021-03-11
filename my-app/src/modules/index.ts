import { combineReducers } from 'redux';
import userInfo from './userInfo';
import review from './review';
import isLogin from './isLogin';
import login from './login';
import videoList from './videoList';
import video from './video';

const rootReducer = combineReducers({
  userInfo,
  review,
  video,
  videoList,
  isLogin,
  login,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
