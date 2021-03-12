import { createReducer } from 'typesafe-actions';
import {
  FETCH_VIDEOLIST,
  FETCH_VIDEOLIST_SUCCESS,
  FETCH_VIDEOLIST_FAILURE,
} from './actions';
import { VideoListAction, VideoInfo, VideoList, VideoListState } from './types';

const initVideoInfo: VideoInfo = {
  id: 0,
  title: '',
  description: '',
  director: '',
  actor: '',
  runtime: '',
  ageLimit: '',
  releaseYear: '',
  posterUrl: '',
  bannerUrl: '',
  netflixUrl: '',
  type: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  rating: 0,
};

const initVideoList: VideoList = {
  // top5VideoList: [],
  // mostReviewVidList: [],
  // lessReviewVidList: [],
  videoList: [],
};

const initialState: VideoListState = {
  videoInfoList: initVideoList,
  status: 'idle',
};

const videoList = createReducer<VideoListState, VideoListAction>(initialState, {
  [FETCH_VIDEOLIST]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [FETCH_VIDEOLIST_SUCCESS]: (state, action) => ({
    ...state,
    videoInfoList: action.payload,
    status: 'idle',
  }),
  [FETCH_VIDEOLIST_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
});

export default videoList;
