import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInfo from './userInfo';
import review from './review';
import login from './login';
import videoList from './videoList';
import video from './video';
import userinfo from './userInfo1';

const persistConfig = {
  key: 'root',
  storage,
};

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
