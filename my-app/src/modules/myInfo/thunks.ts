import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import {
  deleteMyInfoPayloadType,
  updateMyInfoPayloadType,
  MyInfoAction,
} from './types';
import {
  deleteMyInfoAsync,
  fetchMyInfoAsync,
  updateMyInfoAsync,
} from './actions';
import { deleteMyInfo } from '../../api/deleteMyInfo';
import { fetchMyInfo } from '../../api/fetchMyInfo';
import { updateMyInfo } from '../../api/updateMyInfo';

export function fetchMyInfoThunk(): ThunkAction<
  void,
  RootState,
  null,
  MyInfoAction
> {
  return async (dispatch) => {
    const { request, success, failure } = fetchMyInfoAsync;
    dispatch(request());
    try {
      const myInfo = await fetchMyInfo();
      dispatch(success(myInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function deleteMyInfoThunk(
  payload: deleteMyInfoPayloadType
): ThunkAction<void, RootState, null, MyInfoAction> {
  return async (dispatch) => {
    const { request, success, failure } = deleteMyInfoAsync;
    dispatch(request());
    try {
      await deleteMyInfo(payload);
      dispatch(success());
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function updateMyInfoThunk(
  payload: updateMyInfoPayloadType
): ThunkAction<void, RootState, null, MyInfoAction> {
  return async (dispatch) => {
    const { request, success, failure } = updateMyInfoAsync;
    dispatch(request());
    try {
      const myInfo = await updateMyInfo(payload);
      dispatch(success(myInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
