import { createReducer } from 'typesafe-actions';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  OUATH_LOGIN,
  REFRESH,
  REFRESH_FAILURE,
  REFRESH_SUCCESS,
} from './actions';
import { LoginAction, LoginState } from './types';
import storage from 'redux-persist/lib/storage';

const initailState: LoginState = {
  status: 'idle',
  isLogin: false,
  accessToken: '',
};

const login = createReducer<LoginState, LoginAction>(initailState, {
  [LOGIN_REQUEST]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    status: 'idle',
    isLogin: true,
    accessToken: action.payload,
  }),
  [LOGIN_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
    isLogin: false,
  }),
  [REFRESH]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [REFRESH_SUCCESS]: (state, action) => ({
    ...state,
    status: 'idle',
    isLogin: true,
    accessToken: action.payload,
  }),
  [REFRESH_FAILURE]: (state) => ({
    ...state,
    status: 'idle',
    isLogin: false,
  }),
  [LOGOUT]: (state) => {
    storage.removeItem('persist:root');
    return {
      ...state,
      status: 'loading',
    };
  },
  [LOGOUT_SUCCESS]: (state) => ({
    ...state,
    ...initailState,
  }),
  [LOGOUT_FAILURE]: (state) => ({
    ...state,
    ...initailState,
    status: 'failed',
  }),
  [OUATH_LOGIN]: (state, action) => ({
    ...state,
    accessToken: action.payload,
    isLogin: true,
  }),
});

export default login;
