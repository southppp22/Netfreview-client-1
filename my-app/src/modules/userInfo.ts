import { ActionType, createAction, createReducer } from 'typesafe-actions';

// 액션 타입 선언
/*
const SET_USERID = 'userInfo/SET_USERID' as const;
const SET_IMG = 'userInfo/SET_IMG' as const;
const SET_NICKNAME = 'userInfo/SET_NICKNAME' as const;
*/
const SET_USERID = 'userInfo/SET_USERID';
const SET_IMG = 'userInfo/SET_IMG';
const SET_NICKNAME = 'userInfo/SET_NICKNAME';

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
export const setNickname = (nickname: string) => ({
  type: SET_NICKNAME,
  payload: nickname,
});
*/
export const setUserId = createAction(SET_USERID)<number>();
export const setImg = createAction(SET_IMG)<string>();
export const setNickname = createAction(SET_NICKNAME)<string>();

// 액션 타입
/*
type UserInfoAction =
  | ReturnType<typeof setUserId>
  | ReturnType<typeof setImg>
  | ReturnType<typeof setNickname>;
*/
const actions = { setUserId, setImg, setNickname };
type UserInfoAction = ActionType<typeof actions>;

// state 타입
export type UserInfoState = {
  userId: number | undefined;
  nickname: string;
  profileImgPath: string;
};
// state 초기값
const initialState: UserInfoState = {
  userId: undefined,
  nickname: '',
  profileImgPath: '/images/profileImg.png',
};

// 리듀서
/*
function userInfo(state:UserInfoState = initialState, action: UserInfoAction): UserInfoState {
  switch (action.type) {
    case SET_USERID:
      return { ...state, userId: action.payload };
    case SET_IMG:
      return { ...state, profileImgPath: action.payload };
    case SET_NICKNAME:
      return { ...state, nickName: action.payload };

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
  [SET_NICKNAME]: (state, { payload: nickname }) => ({ ...state, nickname }),
});

export default userInfo;
