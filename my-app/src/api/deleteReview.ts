import axios from 'axios';
import {
  deleteReviewPayloadType /*, MyReview */,
} from '../modules/review/types';

export async function deleteReview(
  payload: deleteReviewPayloadType
): Promise<void> {
  await axios.delete('reviews', { data: payload });
  return;
}
