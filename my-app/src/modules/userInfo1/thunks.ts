import { ThunkAction } from 'redux-thunk';
// import { RootState } from '..';
// import { fetchUserInfo } from '../../api/fetchUserInfo';
// import { fetchUserInfoAsync } from './actions';
// import { UserInfoAction } from './types';

// export function fetchUserInfoThunk(): ThunkAction<
//   void,
//   RootState,
//   null,
//   UserInfoAction
// > {
//   return async (dispatch) => {
//     const { request, success, failure } = fetchUserInfoAsync;
//     dispatch(request());
//     try {
//       const userInfo = await fetchUserInfo();
//       dispatch(success(userInfo));
//     } catch (e) {
//       dispatch(failure(e));
//     }
//   };
// }
