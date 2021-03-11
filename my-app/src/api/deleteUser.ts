import axios from 'axios';
import { deleteUserPayloadType } from '../modules/userInfo1/types';

export async function deleteUser(
  payload: deleteUserPayloadType
): Promise<void> {
  const { userId } = payload;
  await axios.delete(`users/${userId}`);
  return;
}
