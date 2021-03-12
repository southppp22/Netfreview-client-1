import { createReducer } from 'typesafe-actions';
import {
  FETCH_VIDEOLIST,
  FETCH_VIDEOLIST_SUCCESS,
  FETCH_VIDEOLIST_FAILURE,
} from './actions';
import { VideoListAction, VideoList, VideoListState } from './types';

const initVideoList: VideoList = {
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
