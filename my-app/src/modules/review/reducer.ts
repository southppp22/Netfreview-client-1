import { createReducer } from 'typesafe-actions';
import {
  ADD_LIKE,
  ADD_LIKE_FAILURE,
  ADD_LIKE_SUCCESS,
  ADD_REVIEW,
  ADD_REVIEW_FAILURE,
  ADD_REVIEW_SUCCESS,
  DELETE_REVIEW,
  DELETE_REVIEW_FAILURE,
  DELETE_REVIEW_SUCCESS,
  FETCH_REVIEWS,
  FETCH_REVIEWS_FAILURE,
  FETCH_REVIEWS_SUCCESS,
  UPDATE_CURRENT_PAGE,
  UPDATE_REVIEW,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_START_END_PAGE,
} from './actions';
import { ReviewsAction, ReviewsState } from './types';

const initailState: ReviewsState = {
  reviews: {
    reviewList: [],
    myReview: null,
  },
  paging: {
    start: 1,
    end: 1,
    total: 1,
    current: 1,
  },
  status: 'idle',
};

const review = createReducer<ReviewsState, ReviewsAction>(initailState, {
  [UPDATE_CURRENT_PAGE]: (state, { payload: currentPage }) => ({
    ...state,
    paging: {
      ...state.paging,
      current: currentPage,
    },
  }),
  [UPDATE_START_END_PAGE]: (state, { payload: { start, end, total } }) => ({
    ...state,
    paging: {
      ...state.paging,
      start,
      end,
      total,
    },
  }),
  [FETCH_REVIEWS]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [FETCH_REVIEWS_SUCCESS]: (state, action) => ({
    ...state,
    status: 'idle',
    reviews: action.payload,
  }),
  [FETCH_REVIEWS_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
  [ADD_REVIEW]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [ADD_REVIEW_SUCCESS]: (state, action) => ({
    ...state,
    status: 'idle',
    reviews: {
      ...state.reviews,
      myReview: action.payload,
    },
  }),
  [ADD_REVIEW_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
  [UPDATE_REVIEW]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [UPDATE_REVIEW_SUCCESS]: (state, action) => ({
    ...state,
    status: 'idle',
    reviews: {
      ...state.reviews,
      myReview: action.payload,
    },
  }),
  [DELETE_REVIEW]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [DELETE_REVIEW_SUCCESS]: (state) => ({
    ...state,
    status: 'idle',
    reviews: {
      ...state.reviews,
      myReview: null,
    },
  }),
  [DELETE_REVIEW_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
  [ADD_LIKE]: (state) => ({
    ...state,
    status: 'loding',
  }),
  [ADD_LIKE_SUCCESS]: (state, action) => {
    const updateReviewList = state.reviews.reviewList.map((review) => {
      if (review.id === action.payload.id) {
        return action.payload;
      }
      return review;
    });
    return {
      ...state,
      status: 'idle',
      reviews: {
        ...state.reviews,
        reviewList: updateReviewList,
      },
    };
  },
  [ADD_LIKE_FAILURE]: (state) => ({
    ...state,
    status: 'failed',
  }),
});

export default review;
