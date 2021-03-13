import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserInfoAction = ActionType<typeof actions>;

export type Video = {
  id: number;
  title: string;
  description: string;
  director: string;
  actor: string;
  runtime?: string;
  ageLimit: string;
  releaseYear: string;
  posterUrl: string;
  bannerUrl: string;
  netflixUrl: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  rating?: number;
};

export type UserInfo = {
  id: string;
  name: string;
  nickname: string;
  introduction: string;
  profileUrl: string | null;
  videoList: Video[];
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserInfoState = {
  // UserProfile: UserInfo;
  userId: string;
  userName: string;
  nickname: string;
  introduction: string;
  profileUrl: string | null;
  videoList: Video[];
  status: string; // idle, loading, failed
};

// export type deleteUserPayloadType = {
//   userId: string;
// };

// export type updateUserPayloadType = {
//   profileUrl?: string;
//   introduction?: string;
//   password?: string;
//   nickname?: string;
// };
