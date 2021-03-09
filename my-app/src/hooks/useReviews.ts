import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import {  addReview, deleteReview, handleReview, Review, updateCurrentPage, updateReview, updateStartEndPage, fetchReviews, fetchMyReviews, loading, succeeded, failed } from "../modules/reviews";

export default function useReviews() {
  const reviews = useSelector((state: RootState) => state.reviews);

  const dispatch = useDispatch();

  const onAddReview = async (review: handleReview) => {
    try{
      await dispatch(loading());
      await axios.post('/reviews', {...review}, {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsInN1YiI6IjQ4MzY2ODJhLTNkNDgtNDZmNS1iYjY4LWIyZTYyOWZhNGM3YyIsImlhdCI6MTYxNTI1OTc0MiwiZXhwIjoxNjE1MjY2OTQyfQ.AHw0pllB0roR9dRVNy6mh-f6XtZ3NPMiW_XCfYBswGo'
      }})
      await dispatch(succeeded())
    } catch(e) {
      await dispatch(failed())
    }
  }
  
  const onUpdateReview = 
    (review: handleReview) => axios.patch('/reviews', {...review}, {headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsInN1YiI6IjQ4MzY2ODJhLTNkNDgtNDZmNS1iYjY4LWIyZTYyOWZhNGM3YyIsImlhdCI6MTYxNTI1NTg0MCwiZXhwIjoxNjE1MjYzMDQwfQ.JpU_skHB9QzTuWejCXJ7mGbRCtDoVsUzhQqAF_NXlUM'
    }})

  const onDeleteReview = (reviewId: number) => axios.delete('/reviews', {headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsInN1YiI6IjQ4MzY2ODJhLTNkNDgtNDZmNS1iYjY4LWIyZTYyOWZhNGM3YyIsImlhdCI6MTYxNTI1NTg0MCwiZXhwIjoxNjE1MjYzMDQwfQ.JpU_skHB9QzTuWejCXJ7mGbRCtDoVsUzhQqAF_NXlUM'
  }, data: {reviewId},
  })
    

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
    (review: Review) => dispatch(fetchMyReviews(review)),
    [dispatch]
  )
  return {reviews, onAddReview, onUpdateReview, onDeleteReview, onUpdateCurrentPage, onUpdateStartEndPage, onFetchReviews, onFetchMyReviews}
}