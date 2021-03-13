import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'login/LOGIN_FAILURE';

export const REFRESH = 'login/REFRESH';
export const REFRESH_SUCCESS = 'login/REFRESH_SUCCESS';
export const REFRESH_FAILURE = 'login/REFRESH_FAILURE';

export const LOGOUT = 'login/LOGOUT';
export const LOGOUT_SUCCESS = 'login/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'login/LOGOUT_FAILURE';

export const OUATH_LOGIN = 'login/OAUTH_LOGIN';
export const LOGIN_STATUS_RESET = 'login/LOGIN_STATUS_RESET';

export const loginAsync = createAsyncAction(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
)<undefined, string, AxiosError>();

export const refreshAsync = createAsyncAction(
  REFRESH,
  REFRESH_SUCCESS,
  REFRESH_FAILURE
)<undefined, string, AxiosError>();

export const logoutAsync = createAsyncAction(
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
)<undefined, undefined, AxiosError>();

export const oauthLogin = createAction(OUATH_LOGIN)<string>();
export const loginStatusReset = createAction(LOGIN_STATUS_RESET)<undefined>();
