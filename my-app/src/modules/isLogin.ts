import { ActionType, createAction, createReducer } from 'typesafe-actions';

// 액션 타입 선언
const IS_LOGIN = 'isLogin/IS_LOGIN';
const SET_TOKEN = 'isLogin/SET_TOKEN';

// 액션 생성 함수 선언
// export const setIsLogin = (setIsLogin: boolean) => ({
//   type: IS_LOGIN,
//   payload: setIsLogin,
// });
// export const setToken = (token: string) => ({
//   type: SET_TOKEN,
//   payload: token,
// });

export const setIsLogin = createAction(IS_LOGIN)<boolean>();
export const setToken = createAction(SET_TOKEN)<string>();

// 액션 타입

/*
type UserInfoAction =
  | ReturnType<typeof setIsLogin>
  | ReturnType<typeof setToken>
*/

const actions = { setIsLogin, setToken };
type IsLoginAction = ActionType<typeof actions>;

// 상태 타입
export type IsLoginState = {
  setIsLogin: boolean;
  accessToken: string;
};

// 상태 초기값
const initialState: IsLoginState = {
  setIsLogin: false,
  accessToken: '',
};

// 리듀서
// function IsLogin(
//   state: isLoginState = initialState,
//   action: isLoginAction
// ): isLoginState {
//   switch (action.type) {
//     case IS_LOGIN:
//       return { ...state, setIsLogin: action.payload };
//     case SET_TOKEN:
//       return { ...state, accessToken: action.payload };
//     default:
//       return state;
//   }
// }

const IsLogin = createReducer<IsLoginState, IsLoginAction>(initialState, {
  [IS_LOGIN]: (state, { payload: setIsLogin }) => ({ ...state, setIsLogin }),
  [SET_TOKEN]: (state, { payload: accessToken }) => ({ ...state, accessToken }),
});

export default IsLogin;
