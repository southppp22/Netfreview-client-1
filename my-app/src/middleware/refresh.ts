import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { Middleware } from 'redux';
import { refresh } from '../api/refresh';
import { REFRESH, refreshThunk } from '../modules/login';

export const refreshToken: Middleware = ({ dispatch, getState }) => (
  next
) => async (action) => {
  if (typeof action === 'function') {
    if (getState().login && getState().login.accessToken) {
      const { exp }: any = jwt_decode(getState().login.accessToken);
      if (Date.now() >= exp * 1000) {
        dispatch({ type: 'login/REFRESH' });
        try {
          const accessToken = await refresh();
          dispatch({ type: 'login/REFRESH_SUCCESS', payload: accessToken });
        } catch (e) {
          dispatch({ type: 'login/REFRESH_FAILURE' });
          dispatch({ type: 'login/LOGOUT_SUCCESS' });
        }
      }
    }
  }
  next(action);
};
