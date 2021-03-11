import { createReducer } from 'typesafe-actions';
// import { UserInfoState, UserInfoAction } from './types';
// import {
//   FETCH_USERINFO,
//   FETCH_USERINFO_SUCCESS,
//   FETCH_USERINFO_FAILURE,
// } from './actions';

// const initialState: UserInfoState = {
//   userId: undefined,
//   userName: 'ㅤ',
//   nickname: 'ㅤ',
//   introduction: 'ㅤ',
//   profileUrl: '/images/profileImg.png',
//   status: 'idle',
// };

// const userInfo = createReducer<UserInfoState, UserInfoAction>(initialState, {
//   [FETCH_USERINFO]: (state) => ({
//     ...state,
//     status: 'loading',
//   }),
//   [FETCH_USERINFO_SUCCESS]: (state, { payload }) => ({
//     ...state,
//     userId: payload.id,
//     userName: payload.name,
//     nickname: payload.nickname,
//     introduction: payload.introduction,
//     profileUrl: payload.profileUrl,
//     status: 'idle',
//   }),
//   [FETCH_USERINFO_FAILURE]: (state) => ({
//     ...state,
//     status: 'failed',
//   }),
// });

// export default userInfo;
