import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { VideoList } from '../videoList';

export const FETCH_VIDEOLIST = 'video/FETCH_VIDEOLIST';
export const FETCH_VIDEOLIST_SUCCESS = 'video/FETCH_VIDEOLIST_SUCCESS';
export const FETCH_VIDEOLIST_FAILURE = 'video/FETCH_VIDEOLIST_FAILURE';

export const fetchVideoListAsync = createAsyncAction(
  FETCH_VIDEOLIST,
  FETCH_VIDEOLIST_SUCCESS,
  FETCH_VIDEOLIST_FAILURE
)<undefined, VideoList, AxiosError>();
