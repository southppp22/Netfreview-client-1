import { createReducer } from "typesafe-actions";
import { FETCH_VIDEO, FETCH_VIDEO_FAILURE, FETCH_VIDEO_SUCCESS } from "./actions";
import { VideoAction, VideoState } from "./types";

const initialState: VideoState = {
  videoInfo: {
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
    createdAt: '',
    updatedAt: '',
    rating: 0,
    genres: []
  },
  status: 'idle'
}

const video = createReducer<VideoState, VideoAction>(initialState, {
  [FETCH_VIDEO]: state => ({
    ...state,
    status: 'loading'
  }),
  [FETCH_VIDEO_SUCCESS]: (state, action) => ({
    ...state,
    videoInfo: action.payload,
    status: 'idle'
  }),
  [FETCH_VIDEO_FAILURE]: state => ({
    ...state,
    status: 'failed'
  }),
})

export default video;