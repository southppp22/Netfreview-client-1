import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { MyInfo } from '../myInfo';

export const FETCH_MYINFO = 'video/FETCH_MYINFO';
export const FETCH_MYINFO_SUCCESS = 'video/FETCH_MYINFO_SUCCESS';
export const FETCH_MYINFO_FAILURE = 'video/FETCH_MYINFO_FAILURE';

export const DELETE_MYINFO = 'myInfo/DELETE_MYINFO';
export const DELETE_MYINFO_SUCCESS = 'myInfo/DELETE_MYINFO_SUCCESS';
export const DELETE_MYINFO_FAILURE = 'myInfo/DELETE_MYINFO_FAILURE';

export const UPDATE_MYINFO = 'myInfo/UPDATE_MYINFO';
export const UPDATE_MYINFO_SUCCESS = 'myInfo/UPDATE_MYINFO_SUCCESS';
export const UPDATE_MYINFO_FAILURE = 'myInfo/UPDATE_MYINFO_FAILURE';

export const fetchMyInfoAsync = createAsyncAction(
  FETCH_MYINFO,
  FETCH_MYINFO_SUCCESS,
  FETCH_MYINFO_FAILURE
)<undefined, MyInfo, AxiosError>();

export const deleteMyInfoAsync = createAsyncAction(
  DELETE_MYINFO,
  DELETE_MYINFO_SUCCESS,
  DELETE_MYINFO_FAILURE
)<undefined, undefined, AxiosError>();

export const updateMyInfoAsync = createAsyncAction(
  UPDATE_MYINFO,
  UPDATE_MYINFO_SUCCESS,
  UPDATE_MYINFO_FAILURE
)<undefined, MyInfo, AxiosError>();
