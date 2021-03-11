import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoginPayloadType = {
  email: string;
  password: string;
};

export type LoginAction = ActionType<typeof actions>;

export type LoginState = {
  status: string; // idle, loading, failed
  isLogin: boolean;
  accessToken: string;
};
