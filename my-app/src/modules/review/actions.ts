import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { MyReview, Review } from './types';

export const UPDATE_CURRENT_PAGE = 'reviews/UPDATE_CURRENT_PAGE';
export const UPDATE_START_END_PAGE = 'reviews/UPDATE_START_END_PAGE';
export const SET_VIDEO_ID = 'reviews/SET_VIDEO_ID';
export const SET_TEXT = 'reviews/SET_TEXT';
export const SET_RATING = 'reviews/SET_RATING';
export const SET_HOVER_RATING = 'reviews/SET_HOVER_RATING';

export const FETCH_REVIEWS = 'reviews/FETCH_REVIEWS';
export const FETCH_REVIEWS_SUCCESS = 'reviews/FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'reviews/FETCH_REVIEWS_FAILURE';

export const FETCH_MY_REVIEW = 'reviews/FETCH_MY_REVIEW';
export const FETCH_MY_REVIEW_SUCCESS = 'reviews/FETCH_MY_REVIEW_SUCCESS';
export const FETCH_MY_REVIEW_FAILURE = 'reviews/FETCH_MY_REVIEW_FAILURE';

export const ADD_REVIEW = 'reviews/ADD_REVIEW';
export const ADD_REVIEW_SUCCESS = 'reviews/ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILURE = 'reviews/ADD_REVIEW_FAILURE';

export const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
export const UPDATE_REVIEW_SUCCESS = 'reviews/UPDATE_REVIEW_SUCCESS';
export const UPDATE_REVIEW_FAILURE = 'reviews/UPDATE_REVIEW_FAILURE';

export const DELETE_REVIEW = 'reviews/DELETE_REVIEW';
export const DELETE_REVIEW_SUCCESS = 'reviews/DELETE_REVIEW_SUCCESS';
export const DELETE_REVIEW_FAILURE = 'reviews/DELETE_REVIEW_FAILURE';

export const ADD_LIKE = 'reviews/ADD_LIKE';
export const ADD_LIKE_SUCCESS = 'reviews/ADD_LIKE_SUCCESS';
export const ADD_LIKE_FAILURE = 'reviews/ADD_LIKE_FAILURE';

export const updateCurrentPage = createAction(UPDATE_CURRENT_PAGE)<number>();
export const updateStartEndPage = createAction(UPDATE_START_END_PAGE)<{
  start: number;
  end: number;
  total: number;
}>();
export const setVideoId = createAction(SET_VIDEO_ID)<number>();
export const setText = createAction(SET_TEXT)<string>();
export const setRating = createAction(SET_RATING)<number>();
export const setHoverRating = createAction(SET_HOVER_RATING)<number>();

export const fetchReviewsAsync = createAsyncAction(
  FETCH_REVIEWS,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE
)<undefined, { reviewList: Review[]; myReview: MyReview | null }, AxiosError>();

export const addReviewAsync = createAsyncAction(
  ADD_REVIEW,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE
)<undefined, MyReview, AxiosError>();

export const updateReviewAsync = createAsyncAction(
  UPDATE_REVIEW,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILURE
)<undefined, MyReview, AxiosError>();

export const deleteReviewAsync = createAsyncAction(
  DELETE_REVIEW,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE
)<undefined, undefined, AxiosError>();

export const addLikeAsync = createAsyncAction(
  ADD_LIKE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_FAILURE
)<undefined, Review, AxiosError>();
