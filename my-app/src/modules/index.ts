import { combineReducers } from 'redux';
import userInfo from './userInfo';
import reviews from './reviews'
import video from './video'
import isLogin from './isLogin';
import login from './login'

const rootReducer = combineReducers({
  userInfo,
  reviews,
  video,
  isLogin,
  login
});
console.log('root',rootReducer);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
