import axios from 'axios';
import { addReviewPayloadType, MyReview } from '../modules/review/types';

export async function addReview(
  payload: addReviewPayloadType
): Promise<MyReview> {
  console.log('testst');
  const res = await axios.post('reviews', payload);
  return res.data.myReview;
}
