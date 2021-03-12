import axios from 'axios';
import { updateMyInfoPayloadType, MyInfo } from '../modules/myInfo';

export async function updateMyInfo(
  payload: updateMyInfoPayloadType
): Promise<MyInfo> {
  const res = await axios.patch('users', payload);
  return res.data.user;
}
