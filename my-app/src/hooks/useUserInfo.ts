import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  setUserId,
  setImg,
  setUserName,
  setNickname,
  setIntroduction,
} from '../modules/userInfo';
import { useCallback } from 'react';

export default function useUserInfo() {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  const dispatch = useDispatch();

  const onSetUserId = useCallback(
    (userId: number) => dispatch(setUserId(userId)),
    [dispatch]
  );
  const onSetImg = useCallback((imgPath: string) => dispatch(setImg(imgPath)), [
    dispatch,
  ]);
  const onSetUserName = useCallback(
    (imgPath: string) => dispatch(setUserName(imgPath)),
    [dispatch]
  );
  const onSetNickname = useCallback(
    (nickname: string) => dispatch(setNickname(nickname)),
    [dispatch]
  );
  const onSetIntroduction = useCallback(
    (introduction: string) => dispatch(setIntroduction(introduction)),
    [dispatch]
  );
  return {
    userInfo,
    onSetUserId,
    onSetImg,
    onSetUserName,
    onSetNickname,
    onSetIntroduction,
  };
}
