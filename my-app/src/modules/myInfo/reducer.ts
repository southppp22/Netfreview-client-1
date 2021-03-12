import { createReducer } from 'typesafe-actions';
import {
  FETCH_MYINFO,
  FETCH_MYINFO_SUCCESS,
  FETCH_MYINFO_FAILURE,
  DELETE_MYINFO,
  DELETE_MYINFO_FAILURE,
  DELETE_MYINFO_SUCCESS,
  UPDATE_MYINFO,
  UPDATE_MYINFO_SUCCESS,
  UPDATE_MYINFO_FAILURE,
} from './actions';
import { MyInfoAction, MyInfoState } from './types';

const initialState: MyInfoState = {
  myId: '',
  myName: '',
  nickname: '',
  introduction: '',
  profileUrl: '/images/profileImg.png',
  status: 'idle',
};

const myInfo = createReducer<MyInfoState, MyInfoAction>(initialState, {
  [FETCH_MYINFO]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [FETCH_MYINFO_SUCCESS]: (state, { payload }) => ({
    ...state,
    myId: payload.id,
    myName: payload.name,
    nickname: payload.nickname,
    introduction: payload.introduction,
    profileUrl: payload.profileUrl,
    lastLogin: payload.lastLogin,
    status: 'idle',
  }),
  [FETCH_MYINFO_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
  [DELETE_MYINFO]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [DELETE_MYINFO_SUCCESS]: (/*state*/) => ({
    ...initialState,
  }),
  [DELETE_MYINFO_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
  [UPDATE_MYINFO]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [UPDATE_MYINFO_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
    status: 'idle',
  }),
  [UPDATE_MYINFO_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
});

export default myInfo;
