import axios from 'axios';
import { deleteMyInfoPayloadType } from '../modules/myInfo/types';

export async function deleteMyInfo(
  payload: deleteMyInfoPayloadType
): Promise<void> {
  const { myId } = payload;
  await axios.delete(`users/${myId}`);
  return;
}
