import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import {
  // deleteUserPayloadType,
  // updateUserPayloadType,
  UserInfoAction,
} from './types';
import {
  // deleteUserAsync,
  fetchUserInfoAsync,
  // updateUserAsync,
} from './actions';
// import { deleteUser } from '../../api/deleteUser';
import { fetchUserInfo } from '../../api/fetchUserInfo';
// import { updateUserInfo } from '../../api/updateUserInfo';

export function fetchUserInfoThunk(
  userId: string
): ThunkAction<void, RootState, null, UserInfoAction> {
  return async (dispatch) => {
    const { request, success, failure } = fetchUserInfoAsync;
    dispatch(request());
    try {
      const userInfo = await fetchUserInfo(userId);
      dispatch(success(userInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

// export function deleteUserThunk(
//   payload: deleteUserPayloadType
// ): ThunkAction<void, RootState, null, UserInfoAction> {
//   return async (dispatch) => {
//     const { request, success, failure } = deleteUserAsync;
//     dispatch(request());
//     try {
//       await deleteUser(payload);
//       dispatch(success());
//     } catch (e) {
//       dispatch(failure(e));
//     }
//   };
// }

// export function updateUserThunk(
//   payload: updateUserPayloadType
// ): ThunkAction<void, RootState, null, UserInfoAction> {
//   return async (dispatch) => {
//     console.log('3');
//     const { request, success, failure } = updateUserAsync;
//     dispatch(request());
//     console.log('4 시작');
//     try {
//       const userInfo = await updateUserInfo(payload);
//       console.log('userinfo', userInfo);
//       dispatch(success(userInfo));
//     } catch (e) {
//       console.log('err');
//       dispatch(failure(e));
//     }
//   };
// }
