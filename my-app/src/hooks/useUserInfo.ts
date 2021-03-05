import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { setUserId, setImg, setNickname } from '../modules/userInfo';
import { useCallback } from 'react';

export default function useUserInfo() {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  console.log(userInfo);

  const dispatch = useDispatch();

  const onSetUserId = useCallback(
    (userId: number) => dispatch(setUserId(userId)),
    [dispatch]
  );
  const onSetImg = useCallback((imgPath: string) => dispatch(setImg(imgPath)), [
    dispatch,
  ]);
  const onSetNickname = useCallback(
    (nickname: string) => dispatch(setNickname(nickname)),
    [dispatch]
  );
  return { userInfo, onSetUserId, onSetImg, onSetNickname };
}
