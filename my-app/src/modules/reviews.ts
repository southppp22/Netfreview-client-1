import { ActionType, createAction, createReducer } from 'typesafe-actions';

const UPDATE_CURRENT_PAGE = 'reviews/UPDATE_CURRENT_PAGE'
const UPDATE_START_END_PAGE = 'reviews/UPDATE_START_END_PAGE'
const FETCH_REVIEWS = 'reviews/FETCH_REVIEWS'
const FETCH_MY_REVIEW = 'reviews/FETCH_MY_REVIEW'
const LOADING = "reveiws/LOADING"
const SUCCEEDED = "reviews/SUCCEEDED"
const FAILED = "reviews/FAILED"

export type Review = {
  id: number;
  rating: number;
  text: string;
  createdAt?: string;
  updatedAt?: string;
  likeCount?: number;
  isLike?: number;
  user?: {
    id:string;
    nickname:string;
    profileUrl: null | string;
  }
}

export type addReviewType = {
  videoId: number;
  text: string;
  rating: number;
}

export type updateReviewType = {
  videoId: number,
  text: string,
  rating: number
}

export const updateCurrentPage = createAction(UPDATE_CURRENT_PAGE)<number>();
export const updateStartEndPage = createAction(UPDATE_START_END_PAGE)<{start:number, end:number, total:number}>();
export const fetchReviews = createAction(FETCH_REVIEWS)<Review[]>();
export const fetchMyReviews = createAction(FETCH_MY_REVIEW)<Review>();
export const loading = createAction(LOADING)();
export const succeeded = createAction(SUCCEEDED)();
export const failed = createAction(FAILED)();


const actions = {updateCurrentPage, updateStartEndPage, fetchReviews, fetchMyReviews, loading, succeeded, failed };
type ReviewsAction = ActionType<typeof actions>;

export type ReviewsState = {
  reviewList: Review[];
  myReview: Review | null;
  paging: {
    start:number;
    end: number;
    total: number;
    current: number
  },
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
  status: 'loading' // loading, succeeded, failed
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
  })
});

export default reviews