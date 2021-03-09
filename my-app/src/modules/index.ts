import { combineReducers } from 'redux';
import userInfo from './userInfo';
import reviews from './reviews'
import video from './video'

const rootReducer = combineReducers({
  userInfo,
  reviews,
  video
});
console.log('root',rootReducer);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
