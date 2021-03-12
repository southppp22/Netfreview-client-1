import axios from 'axios';
import { MyReview, updateReviewPayloadType } from '../modules/review/types';

export async function updateReview(
  payload: updateReviewPayloadType
): Promise<MyReview> {
  const res = await axios.patch('reviews', payload);
  return res.data.myReview;
}
