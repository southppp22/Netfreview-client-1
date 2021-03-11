import axios from 'axios';
import { addReviewPayloadType, MyReview } from '../modules/reviews/types';

export async function addReview(
  payload: addReviewPayloadType
): Promise<MyReview> {
  const { accessToken, ...body } = payload;
  const config = { Authorization: `Bearer ${accessToken}` };
  const res = await axios.post('reviews', body, { headers: config });
  return res.data.myReview;
}
