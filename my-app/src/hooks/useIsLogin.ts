import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { setIsLogin, setToken } from '../modules/isLogin';
import { useCallback } from 'react';

export default function useIsLogin() {
  const useLogin = useSelector((state: RootState) => state.isLogin);
  console.log(useLogin);

  const dispatch = useDispatch();

  const onSetIsLogin = useCallback(
    (isLogin: boolean) => dispatch(setIsLogin(isLogin)),
    [dispatch]
  );
  const onSetToken = useCallback(
    (accessToken: string) => dispatch(setToken(accessToken)),
    [dispatch]
  );
  return { useLogin, onSetIsLogin, onSetToken };
}
