import axios from 'axios';
import { addLikePayloadType, Review } from '../modules/review/types';

export async function addLike(payload: addLikePayloadType): Promise<Review> {
  const res = await axios.post('reviews/like', payload);
  return res.data.review;
}
