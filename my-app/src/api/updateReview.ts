import axios from 'axios';
import { MyReview, updateReviewPayloadType } from '../modules/review/types';

export async function updateReview(
  payload: updateReviewPayloadType
): Promise<MyReview> {
  const { accessToken, ...body } = payload;
  const config = { Authorization: `Bearer ${accessToken}` };
  const res = await axios.patch('reviews', body, { headers: config });
  return res.data.myReview;
}
