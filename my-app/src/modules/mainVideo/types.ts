import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type MainVideoAction = ActionType<typeof actions>;

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

export type MainVideo = {
  top5VideoList?: VideoInfo[];
  mostReviewVidList?: VideoInfo[];
  lessReviewVidList?: VideoInfo[];
};

export type MainVideoState = {
  videoInfoList: MainVideo;
  status: string;
};

export type fetchMainVideoPayloadType = {
  pathname?: string;
  query?: string;
};
