import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserInfoAction = ActionType<typeof actions>;

export type UserInfo = {
  id: string;
  name: string;
  nickname: string;
  introduction: string;
  profileUrl: string | null;
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
  status: string; // idle, loading, failed
};

export type deleteUserPayloadType = {
  userId: string;
};

export type updateUserPayloadType = {
  profileUrl?: string;
  introduction?: string;
  password?: string;
  nickname?: string;
};
