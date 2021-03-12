import axios from 'axios';
import { UserInfo } from '../modules/userInfo/types';

export async function fetchUserInfo(userId: string): Promise<UserInfo> {
  const res = await axios.get(`/users/userinfo/${userId}`);
  console.log(res.data);
  return res.data;
}
