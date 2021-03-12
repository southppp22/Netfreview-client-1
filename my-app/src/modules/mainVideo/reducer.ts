import { createReducer } from 'typesafe-actions';
import {
  FETCH_MAINVIDEO,
  FETCH_MAINVIDEO_SUCCESS,
  FETCH_MAINVIDEO_FAILURE,
  RESET_MAINVIDEO,
} from './actions';
import { MainVideoAction, MainVideo, MainVideoState } from './types';

// const initVideoInfo: VideoInfo = {
//   id: 0,
//   title: '',
//   description: '',
//   director: '',
//   actor: '',
//   runtime: '',
//   ageLimit: '',
//   releaseYear: '',
//   posterUrl: '',
//   bannerUrl: '',
//   netflixUrl: '',
//   type: '',
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   rating: 0,
// };

const initMainVideo: MainVideo = {
  top5VideoList: [],
  mostReviewVidList: [],
  lessReviewVidList: [],
};

const initialState: MainVideoState = {
  videoInfoList: initMainVideo,
  status: 'idle',
};

const mainVideo = createReducer<MainVideoState, MainVideoAction>(initialState, {
  [FETCH_MAINVIDEO]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [FETCH_MAINVIDEO_SUCCESS]: (state, action) => ({
    ...state,
    videoInfoList: action.payload,
    status: 'idle',
  }),
  [FETCH_MAINVIDEO_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
  [RESET_MAINVIDEO]: (state) => ({
    ...state,
    ...initialState,
  }),
});

export default mainVideo;
