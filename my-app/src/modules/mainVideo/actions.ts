import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { MainVideo } from '../mainVideo';

export const FETCH_MAINVIDEO = 'video/FETCH_MAINVIDEO';
export const FETCH_MAINVIDEO_SUCCESS = 'video/FETCH_MAINVIDEO_SUCCESS';
export const FETCH_MAINVIDEO_FAILURE = 'video/FETCH_MAINVIDEO_FAILURE';

export const RESET_MAINVIDEO = 'video/RESET_MAINVIDEO';

export const resetMAINVIDEO = createAction(RESET_MAINVIDEO)<undefined>();

export const fetchMainVideoAsync = createAsyncAction(
  FETCH_MAINVIDEO,
  FETCH_MAINVIDEO_SUCCESS,
  FETCH_MAINVIDEO_FAILURE
)<undefined, MainVideo, AxiosError>();
