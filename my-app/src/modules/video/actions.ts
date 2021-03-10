import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { Video } from '../video';

export const FETCH_VIDEO = 'video/FETCH_VIDEO';
export const FETCH_VIDEO_SUCCESS = 'video/FETCH_VIDEO_SUCCESS';
export const FETCH_VIDEO_FAILURE = 'video/FETCH_VIDEO_FAILURE';

export const fetchVideoAsync = createAsyncAction(
  FETCH_VIDEO,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_FAILURE
)<undefined, Video, AxiosError>();
