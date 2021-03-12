import axios from 'axios';
import { MyInfo } from '../modules/myInfo/types';

export async function fetchMyInfo(): Promise<MyInfo> {
  const res = await axios.get('/users/myinfo');
  return res.data;
}
