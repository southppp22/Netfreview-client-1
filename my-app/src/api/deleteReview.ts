import axios from 'axios';
import { deleteReviewPayloadType, MyReview } from '../modules/reviews/types';

export async function deleteReview(
  payload: deleteReviewPayloadType
): Promise<void> {
  const { accessToken, ...body } = payload;
  const config = { Authorization: `Bearer ${accessToken}` };
  await axios.delete('reviews', { data: body, headers: config });
  return;
}
