import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type VideoListAction = ActionType<typeof actions>;

export type VideoInfo = {
  id: number;
  title: string;
  description: string;
  director: string;
  actor: string;
  runtime: string;
  ageLimit: string;
  releaseYear: string;
  posterUrl: string;
  bannerUrl: string;
  netflixUrl: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number;
};

export type VideoList = {
  top5VideoList?: VideoInfo[];
  mostReviewVidList?: VideoInfo[];
  lessReviewVidList?: VideoInfo[];
  videoList?: VideoInfo[];
};

export type VideoListState = {
  videoInfoList: VideoList;
  status: string;
};

export type fetchVideoListPayloadType = {
  pathname?: string;
  query?: string;
};
