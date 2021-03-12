import axios from 'axios';
import { UserInfo } from '../modules/userInfo/types';

export async function fetchUserInfo(): Promise<UserInfo> {
  const res = await axios.get('/users/userinfo');
  return res.data;
}
