import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type MyInfoAction = ActionType<typeof actions>;

export type MyInfo = {
  id: string;
  name: string;
  nickname: string;
  introduction: string;
  profileUrl: string | null;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

export type MyInfoState = {
  // UserProfile: UserInfo;
  myId: string;
  myName: string;
  nickname: string;
  introduction: string;
  profileUrl: string | null;
  status: string; // idle, loading, failed
};

export type deleteMyInfoPayloadType = {
  myId: string;
};

export type updateMyInfoPayloadType = {
  profileUrl?: string | null;
  introduction?: string;
  password?: string;
  nickname?: string;
};
