import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { Review, updateCurrentPage, updateStartEndPage, fetchReviews, fetchMyReviews, loading, succeeded, failed, setRating, setText, setHoverRating, setVideoId, updating } from "../modules/reviews";
import useIsLogin from './useIsLogin';

export type addReviewType = {
  videoId: number;
  text: string;
  rating: number;
}

export type updateReviewType = addReviewType

export default function useReviews() {
  const reviews = useSelector((state: RootState) => state.reviews);
  const {useLogin: { accessToken } } = useIsLogin();
  const dispatch = useDispatch();

  const onAddReview = async (review: addReviewType) => {
    try{
      await dispatch(loading());
      await axios.post('/reviews', {...review}, {headers: {
        Authorization: `Bearer ${accessToken}`
      }})
      await dispatch(succeeded())
    } catch(e) {
      await dispatch(failed())
    }
  }
  
  const onUpdateReview = async (review: updateReviewType) => { 
    try{
      await dispatch(loading());
      await axios.patch('/reviews', {...review}, {headers: {
        Authorization: `Bearer ${accessToken}`
      }})
      await dispatch(succeeded())
    } catch(e) {
      await dispatch(failed())
    }
  }
  const onDeleteReview = async (reviewId: number) => {
    try{
      await dispatch(loading());
      axios.delete('/reviews', { headers: {
        Authorization: `Bearer ${accessToken}`
      }, data: { reviewId }
    })
      await dispatch(succeeded())
    } catch(e) {
      await dispatch(failed())
    }
  }
    

  const onUpdateCurrentPage = useCallback(
    (currentPage: number) => dispatch(updateCurrentPage(currentPage)),
    [dispatch]
  )

  const onUpdateStartEndPage = useCallback(
    (page: {start: number, end: number, total: number}) => dispatch(updateStartEndPage(page)),
    [dispatch]
  )

  const onFetchReviews = useCallback(
    (reviews: Review[]) => dispatch(fetchReviews(reviews)),
    [dispatch]
  )

  const onFetchMyReviews = useCallback(
    (review: Review | null) => dispatch(fetchMyReviews(review)),
    [dispatch]
  )

  const onAddLike = async (reviewId: number) => {
    try {
      await dispatch(loading());
      await axios.post('/reviews/like', { reviewId }, {headers: {
        Authorization: `Bearer ${accessToken}`
      }})
      await dispatch(succeeded())
    } catch(e) {
      await dispatch(failed())
    }
  }

  const onSetText = useCallback(
    (text: string) => dispatch(setText(text)),
    [dispatch]
  )

  const onSetRating = useCallback(
    (rating: number) => dispatch(setRating(rating)),
    [dispatch]
  )

  const onSetHoverRating = useCallback(
    (hoverRating: number) => dispatch(setHoverRating(hoverRating)),
    [dispatch]
  )

  const onSetVideoId = useCallback(
    (videoId: number) => dispatch(setVideoId(videoId)),
    [dispatch]
  )

  const onUpdate = useCallback( //임시
    () => dispatch(updating()),
    [dispatch]
  )

  return {reviews, onAddReview, onUpdateReview, onDeleteReview, onUpdateCurrentPage, onUpdateStartEndPage, onFetchReviews, onFetchMyReviews, onAddLike, onSetText, onSetRating, onSetHoverRating, onSetVideoId, onUpdate}
}