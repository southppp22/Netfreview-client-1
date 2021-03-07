import { combineReducers } from 'redux';
import userInfo from './userInfo';
import isLogin from './isLogin';

const rootReducer = combineReducers({
  userInfo,
  isLogin,
});
console.log(rootReducer);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
