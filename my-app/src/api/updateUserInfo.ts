import axios from 'axios';
import { updateUserPayloadType, UserInfo } from '../modules/userInfo';

export async function updateUserInfo(
  payload: updateUserPayloadType
): Promise<UserInfo> {
  const res = await axios.patch('users', payload);
  return res.data.user;
}
