import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { deleteUserPayloadType, UserInfoAction } from './types';
import { deleteUserAsync, fetchUserInfoAsync } from './actions';
import { deleteUser } from '../../api/deleteUser';
import { fetchUserInfo } from '../../api/fetchUserInfo';

export function fetchUserInfoThunk(): ThunkAction<
  void,
  RootState,
  null,
  UserInfoAction
> {
  return async (dispatch) => {
    const { request, success, failure } = fetchUserInfoAsync;
    dispatch(request());
    try {
      const userInfo = await fetchUserInfo();
      dispatch(success(userInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function deleteUserThunk(
  payload: deleteUserPayloadType
): ThunkAction<void, RootState, null, UserInfoAction> {
  return async (dispatch) => {
    const { request, success, failure } = deleteUserAsync;
    dispatch(request());
    try {
      await deleteUser(payload);
      dispatch(success());
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
