import React, { useState } from 'react'
import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { addReviewType, updateReviewType, Review, updateCurrentPage, updateStartEndPage, fetchReviews, fetchMyReviews, loading, succeeded, failed } from "../modules/reviews";

export default function useReviews() {
  const reviews = useSelector((state: RootState) => state.reviews);

  const dispatch = useDispatch();

  const onAddReview = async (review: addReviewType) => {
    try{
      await dispatch(loading());
      await axios.post('/reviews', {...review}, {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTMwMDIyNywiZXhwIjoxNjE1MzA3NDI3fQ.qC7ZVdZ-K3ii8Os0du8pbXcpttrJzQCIr_4FUyxrSeo'
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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTMwMDIyNywiZXhwIjoxNjE1MzA3NDI3fQ.qC7ZVdZ-K3ii8Os0du8pbXcpttrJzQCIr_4FUyxrSeo'
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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTMwMDIyNywiZXhwIjoxNjE1MzA3NDI3fQ.qC7ZVdZ-K3ii8Os0du8pbXcpttrJzQCIr_4FUyxrSeo'
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
    (review: Review) => dispatch(fetchMyReviews(review)),
    [dispatch]
  )

  const addLike = async (reviewId: number) => {
    try {
      console.log('addlike')
      await dispatch(loading());
      await axios.post('/reviews/like', { reviewId }, {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRuZGRsMDMyQGdtYWlsLmNvbSIsInN1YiI6IjZlNjllMGJjLTZhYjYtNDM2OS04MWE2LWM2NjA0YzIwZWRjMyIsImlhdCI6MTYxNTMwMDIyNywiZXhwIjoxNjE1MzA3NDI3fQ.qC7ZVdZ-K3ii8Os0du8pbXcpttrJzQCIr_4FUyxrSeo'
      }})
      await dispatch(succeeded())
    } catch(e) {
      await dispatch(failed())
    }
  }

  return {reviews, onAddReview, onUpdateReview, onDeleteReview, onUpdateCurrentPage, onUpdateStartEndPage, onFetchReviews, onFetchMyReviews, addLike}
}