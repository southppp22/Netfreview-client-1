import { combineReducers } from 'redux';
import userInfo from './userInfo';
import review from './review';
import login from './login';
import videoList from './videoList';
import video from './video';
import userinfo from './userInfo1';

const rootReducer = combineReducers({
  userInfo,
  review,
  video,
  videoList,
  login,
  userinfo,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
