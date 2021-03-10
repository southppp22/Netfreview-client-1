import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type VideoAction = ActionType<typeof actions>;

export type Video = {
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
  createdAt: string;
  updatedAt: string;
  rating: number;
  genres: string[];
};

export type VideoState = {
  videoInfo: Video;
  status: string;
};
