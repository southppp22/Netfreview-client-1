import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ReviewsAction = ActionType<typeof actions>;

export type MyReview = {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  isLike: number;
};

export type Review = MyReview & {
  user: {
    id: string;
    nickname: string;
    profileUrl: null | string;
  };
};

export type ReviewsState = {
  reviews: {
    reviewList: Review[];
    myReview: MyReview | null;
  };
  paging: {
    start: number;
    end: number;
    total: number;
    current: number;
  };
  status: string;
};

export type FetchReviewsType = {
  reviewList: Review[];
  myReview: MyReview | null;
  totalCount: number;
};

export type FetchReviewsPayloadType = {
  videoId: number;
  page: number;
  accessToken?: string;
};

export type addReviewPayloadType = {
  videoId: number;
  text: string;
  rating: number;
  accessToken: string;
};

export type updateReviewPayloadType = addReviewPayloadType;

export type deleteReviewPayloadType = {
  reviewId: number;
  accessToken: string;
};

export type addLikePayloadType = deleteReviewPayloadType;
