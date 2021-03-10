import { ActionType, createAction, createReducer } from 'typesafe-actions';

const UPDATE_CURRENT_PAGE = 'reviews/UPDATE_CURRENT_PAGE'
const UPDATE_START_END_PAGE = 'reviews/UPDATE_START_END_PAGE'
const FETCH_REVIEWS = 'reviews/FETCH_REVIEWS'
const FETCH_MY_REVIEW = 'reviews/FETCH_MY_REVIEW'
const SET_VIDEO_ID = 'reviews/SET_VIDEO_ID'
const SET_TEXT = 'reviews/SET_TEXT'
const SET_RATING = 'reviews/SET_RATING'
const SET_HOVER_RATING = 'reviews/SET_HOVER_RATING'
const LOADING = "reveiws/LOADING"
const SUCCEEDED = "reviews/SUCCEEDED"
const FAILED = "reviews/FAILED"
const UPDATING = "reviews/UPDATING"

export type MyReview = {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  isLike: number;
}

export type Review = MyReview & {
  user: {
    id:string;
    nickname:string;
    profileUrl: null | string;
  }
}
//addReviewm, updateReview, deleteReview, AddLike
export const updateCurrentPage = createAction(UPDATE_CURRENT_PAGE)<number>();
export const updateStartEndPage = createAction(UPDATE_START_END_PAGE)<{start:number, end:number, total:number}>();
export const fetchReviews = createAction(FETCH_REVIEWS)<Review[]>();
export const fetchMyReviews = createAction(FETCH_MY_REVIEW)<Review | null>();
export const setVideoId = createAction(SET_VIDEO_ID)<number>();
export const setText = createAction(SET_TEXT)<string>();
export const setRating = createAction(SET_RATING)<number>();
export const setHoverRating = createAction(SET_HOVER_RATING)<number>();
export const loading = createAction(LOADING)();
export const succeeded = createAction(SUCCEEDED)();
export const failed = createAction(FAILED)();
export const updating = createAction(UPDATING)();


const actions = {updateCurrentPage, updateStartEndPage, fetchReviews, fetchMyReviews,setVideoId, setText, setRating, setHoverRating, loading, succeeded, failed, updating };
type ReviewsAction = ActionType<typeof actions>;

export type ReviewsState = {
  reviewList: Review[];
  myReview: MyReview | null;
  paging: {
    start:number;
    end: number;
    total: number;
    current: number
  },
  body: {
    videoId: number,
    text: string,
    rating: number,
    hoverRating: number,
  }
  status: string
}

const initialState: ReviewsState = {
  reviewList: [],
  myReview: null,
  paging: {
    start: 1,
    end: 1,
    total: 1,
    current: 1,
  },
  body: {
    videoId: 0,
    text: '',
    rating: 0,
    hoverRating: 0,
  },
  status: 'loading' // loading, succeeded, failed, updating
}

const reviews = createReducer<ReviewsState, ReviewsAction>(initialState, {
  [UPDATE_CURRENT_PAGE]: (state, {payload: currentPage}) => ({
    ...state,
    paging: {
      ...state.paging,
      current: currentPage,
    }
  }),
  [UPDATE_START_END_PAGE]: (state, {payload: {start, end, total}}) => ({
    ...state,
    paging: {
      ...state.paging,
      start,
      end,
      total
    }
  }),
  [FETCH_REVIEWS]: (state, {payload: reviewList}) => ({
    ...state,
    reviewList
  }),
  [FETCH_MY_REVIEW]: (state, {payload: myReview}) => ({
    ...state,
    myReview
  }),
  [SET_VIDEO_ID]: (state, {payload: videoId}) => ({
    ...state,
    body: {
      ...state.body,
      videoId,
    }
  }),
  [SET_TEXT]: (state, {payload: text}) => ({
    ...state,
    body: {
      ...state.body,
      text,
    }
  }),
  [SET_RATING]: (state, {payload: rating}) => ({
    ...state,
    body: {
      ...state.body,
      rating,
    }
  }),
  [SET_HOVER_RATING]: (state, {payload: hoverRating}) => ({
    ...state,
    body: {
      ...state.body,
      hoverRating,
    }
  }),
  [LOADING]: (state) => ({
    ...state,
    status: 'loading'
  }),
  [SUCCEEDED]: (state) => ({
    ...state,
    status: 'succeeded'
  }),
  [FAILED]: (state) => ({
    ...state,
    status: 'failed'
  }),
  [UPDATING]: (state) => ({
    ...state,
    status: 'updating'
  })
});

export default reviews