import {
  ActionType,
  createAction,
  createReducer,
  createAsyncAction,
} from 'typesafe-actions';

// 액션 타입 선언
/*
const SET_USERID = 'userInfo/SET_USERID' as const;
const SET_IMG = 'userInfo/SET_IMG' as const;
const SET_USERNAME = 'userInfo/SET_USERNAME' as const;
const SET_NICKNAME = 'userInfo/SET_NICKNAME' as const;
const SET_INTRODUCTION = 'userInfo/SET_INTRODUCTION' as const;
*/
const SET_USERID = 'userInfo/SET_USERID';
const SET_IMG = 'userInfo/SET_IMG';
const SET_USERNAME = 'userInfo/SET_USERNAME';
const SET_NICKNAME = 'userInfo/SET_NICKNAME';
const SET_INTRODUCTION = 'userInfo/SET_INTRODUCTION';

// 액션 생성 함수 선언
/*
export const setUserId = (userId: number) => ({
  type: SET_USERID,
  payload: userId,
});
export const setImg = (imgPath: string) => ({
  type: SET_IMG,
  payload: imgPath,
});
export const setUserName = (userName: string) => ({
  type: SET_USERNAME,
  payload: userName,
});
export const setNickname = (nickname: string) => ({
  type: SET_NICKNAME,
  payload: nickname,
});
export const setIntroduction = (introduction: string) => ({
  type: SET_INTRODUCTION,
  payload: introduction,
});
*/
export const setUserId = createAction(SET_USERID)<number>();
export const setImg = createAction(SET_IMG)<string>();
export const setUserName = createAction(SET_USERNAME)<string>();
export const setNickname = createAction(SET_NICKNAME)<string>();
export const setIntroduction = createAction(SET_INTRODUCTION)<string>();

// 액션 타입
/*
type UserInfoAction =
  | ReturnType<typeof setUserId>
  | ReturnType<typeof setImg>
  | ReturnType<typeof setUserName>
  | ReturnType<typeof setNickname>
  | ReturnType<typeof setIntroduction>;
*/
const actions = {
  setUserId,
  setImg,
  setUserName,
  setNickname,
  setIntroduction,
};
type UserInfoAction = ActionType<typeof actions>;

// state 타입
export type UserInfoState = {
  userId: number | undefined;
  profileImgPath: string;
  userName: string;
  nickname: string;
  introduction: string;
};
// state 초기값
const initialState: UserInfoState = {
  userId: undefined,
  profileImgPath: '/images/profileImg.png',
  userName: 'ㅤ',
  nickname: 'ㅤ',
  introduction: 'ㅤ',
};

// 리듀서
/*
function userInfo(state:UserInfoState = initialState, action: UserInfoAction): UserInfoState {
  switch (action.type) {
    case SET_USERID:
      return { ...state, userId: action.payload };
    case SET_IMG:
      return { ...state, profileImgPath: action.payload };
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    case SET_NICKNAME:
      return { ...state, nickName: action.payload };
    case SET_INTRODUCTION:
      return { ...state, introduction: action.payload };

    default:
      return state;
  }
}
*/
const userInfo = createReducer<UserInfoState, UserInfoAction>(initialState, {
  [SET_USERID]: (state, { payload: userId }) => ({
    ...state,
    userId,
  }),
  [SET_IMG]: (state, { payload: profileImgPath }) => ({
    ...state,
    profileImgPath,
  }),
  [SET_USERNAME]: (state, { payload: userName }) => ({
    ...state,
    userName,
  }),
  [SET_NICKNAME]: (state, { payload: nickname }) => ({ ...state, nickname }),
  [SET_INTRODUCTION]: (state, { payload: introduction }) => ({
    ...state,
    introduction,
  }),
});

export default userInfo;
