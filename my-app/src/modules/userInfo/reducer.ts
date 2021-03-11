import { createReducer } from 'typesafe-actions';
import {
  FETCH_USERINFO,
  FETCH_USERINFO_SUCCESS,
  FETCH_USERINFO_FAILURE,
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
} from './actions';
import { UserInfoAction, UserInfoState } from './types';

const initialState: UserInfoState = {
  userId: '',
  userName: '',
  nickname: '',
  introduction: '',
  profileUrl: '/images/profileImg.png',
  status: 'idle',
};

const userInfo = createReducer<UserInfoState, UserInfoAction>(initialState, {
  [DELETE_USER]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [DELETE_USER_SUCCESS]: (state) => ({
    ...initialState,
  }),
  [DELETE_USER_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
  [FETCH_USERINFO]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [FETCH_USERINFO_SUCCESS]: (state, { payload }) => ({
    ...state,
    userId: payload.id,
    userName: payload.name,
    nickname: payload.nickname,
    introduction: payload.introduction,
    profileUrl: payload.profileUrl,
    status: 'idle',
  }),
  [FETCH_USERINFO_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
});

export default userInfo;
