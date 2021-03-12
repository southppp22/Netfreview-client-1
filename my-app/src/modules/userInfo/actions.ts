import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { UserInfo } from '../userInfo';

export const FETCH_USERINFO = 'userInfo/FETCH_USERINFO';
export const FETCH_USERINFO_SUCCESS = 'userInfo/FETCH_USERINFO_SUCCESS';
export const FETCH_USERINFO_FAILURE = 'userInfo/FETCH_USERINFO_FAILURE';

// export const DELETE_USER = 'userInfo/DELETE_USER';
// export const DELETE_USER_SUCCESS = 'userInfo/DELETE_USER_SUCCESS';
// export const DELETE_USER_FAILURE = 'userInfo/DELETE_USER_FAILURE';

// export const UPDATE_USERINFO = 'userInfo/UPDATE_USERINFO';
// export const UPDATE_USERINFO_SUCCESS = 'userInfo/UPDATE_USERINFO_SUCCESS';
// export const UPDATE_USERINFO_FAILURE = 'userInfo/UPDATE_USERINFO_FAILURE';

export const fetchUserInfoAsync = createAsyncAction(
  FETCH_USERINFO,
  FETCH_USERINFO_SUCCESS,
  FETCH_USERINFO_FAILURE
)<undefined, UserInfo, AxiosError>();

// export const deleteUserAsync = createAsyncAction(
//   DELETE_USER,
//   DELETE_USER_SUCCESS,
//   DELETE_USER_FAILURE
// )<undefined, undefined, AxiosError>();

// export const updateUserAsync = createAsyncAction(
//   UPDATE_USERINFO,
//   UPDATE_USERINFO_SUCCESS,
//   UPDATE_USERINFO_FAILURE
// )<undefined, UserInfo, AxiosError>();
