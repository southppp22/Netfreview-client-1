import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { UserInfo } from '../userInfo';

export const FETCH_USERINFO = 'video/FETCH_USERINFO';
export const FETCH_USERINFO_SUCCESS = 'video/FETCH_USERINFO_SUCCESS';
export const FETCH_USERINFO_FAILURE = 'video/FETCH_USERINFO_FAILURE';

export const DELETE_USER = 'userinfo/DELETE_USER';
export const DELETE_USER_SUCCESS = 'userinfo/DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'userinfo/DELETE_USER_FAILURE';

export const fetchUserInfoAsync = createAsyncAction(
  FETCH_USERINFO,
  FETCH_USERINFO_SUCCESS,
  FETCH_USERINFO_FAILURE
)<undefined, UserInfo, AxiosError>();

export const deleteUserAsync = createAsyncAction(
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
)<undefined, undefined, AxiosError>();
