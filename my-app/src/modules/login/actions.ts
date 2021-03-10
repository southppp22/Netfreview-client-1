import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'login/LOGIN_FAILURE';


export const loginAsync = createAsyncAction(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
  )<undefined, string, AxiosError>();