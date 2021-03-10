import { combineReducers } from 'redux';
import userInfo from './userInfo';
import reviews from './reviews'
import video from './video'
import isLogin from './isLogin';

const rootReducer = combineReducers({
  userInfo,
  reviews,
  video,
  isLogin
});
console.log('root',rootReducer);


export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
