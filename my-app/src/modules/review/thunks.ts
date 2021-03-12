import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { addReview } from '../../api/addReview';
import { deleteReview } from '../../api/deleteReview';
import { fetchReviews } from '../../api/fetchReviews';
import { updateReview } from '../../api/updateReview';
import { addLike } from '../../api/addLike';
import { getPaging } from '../../common/utils/getPaging';
import {
  addLikeAsync,
  addReviewAsync,
  deleteReviewAsync,
  fetchReviewsAsync,
  updateCurrentPage,
  updateReviewAsync,
  updateStartEndPage,
} from './actions';
import {
  addLikePayloadType,
  addReviewPayloadType,
  deleteReviewPayloadType,
  FetchReviewsPayloadType,
  ReviewsAction,
  updateReviewPayloadType,
} from './types';

export function fetchReviewsThunk(
  payload: FetchReviewsPayloadType
): ThunkAction<void, RootState, null, ReviewsAction> {
  return async (dispatch) => {
    const { request, success, failure } = fetchReviewsAsync;
    dispatch(request());
    try {
      const { page } = payload;
      const { reviewList, myReview, totalCount } = await fetchReviews(payload);
      const { start, end, totalPage } = getPaging(totalCount, 8, page);

      dispatch(updateCurrentPage(page));
      dispatch(updateStartEndPage({ start, end, total: totalPage }));
      dispatch(success({ reviewList, myReview }));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function addReviewThunk(
  payload: addReviewPayloadType
): ThunkAction<void, RootState, null, ReviewsAction> {
  return async (dispatch) => {
    const { request, success, failure } = addReviewAsync;
    dispatch(request());
    try {
      const myReview = await addReview(payload);
      dispatch(success(myReview));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function updateReviewThunk(
  payload: updateReviewPayloadType
): ThunkAction<void, RootState, null, ReviewsAction> {
  return async (dispatch) => {
    const { request, success, failure } = updateReviewAsync;
    dispatch(request());
    try {
      const myReview = await updateReview(payload);
      dispatch(success(myReview));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function deleteReviewThunk(
  payload: deleteReviewPayloadType
): ThunkAction<void, RootState, null, ReviewsAction> {
  return async (dispatch) => {
    const { request, success, failure } = deleteReviewAsync;
    dispatch(request());
    try {
      await deleteReview(payload);
      dispatch(success());
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function addLikeThunk(
  payload: addLikePayloadType
): ThunkAction<void, RootState, null, ReviewsAction> {
  return async (dispatch) => {
    const { request, success, failure } = addLikeAsync;
    dispatch(request());
    try {
      const review = await addLike(payload);
      dispatch(success(review));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
