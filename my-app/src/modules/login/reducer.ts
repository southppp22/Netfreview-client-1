import { createReducer } from 'typesafe-actions';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actions';
import { LoginAction, LoginState } from './types';

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
});

export default login;
