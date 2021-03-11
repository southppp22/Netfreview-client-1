import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { refresh } from '../../api/refresh';
import { signIn } from '../../api/signIn';
import { signout } from '../../api/signout';
import { loginAsync, logoutAsync, refreshAsync } from './actions';
import { LoginAction, LoginPayloadType } from './types';

export function loginThunk(
  payload: LoginPayloadType
): ThunkAction<void, RootState, null, LoginAction> {
  return async (dispatch) => {
    const { request, success, failure } = loginAsync;
    dispatch(request());
    try {
      const accessToken = await signIn(payload);
      dispatch(success(accessToken));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function refreshThunk(): ThunkAction<
  void,
  RootState,
  null,
  LoginAction
> {
  return async (dispatch) => {
    const { request, success, failure } = refreshAsync;
    dispatch(request());
    try {
      const accessToken = await refresh();
      dispatch(success(accessToken));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function logoutThunk(): ThunkAction<void, RootState, null, LoginAction> {
  return async (dispatch) => {
    const { request, success, failure } = logoutAsync;
    dispatch(request());
    try {
      await signout();
      dispatch(success());
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
