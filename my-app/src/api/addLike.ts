import axios from 'axios';
import { addLikePayloadType, Review } from '../modules/reviews/types';

export async function addLike(payload: addLikePayloadType): Promise<Review> {
  const { accessToken, ...body } = payload;
  const config = { Authorization: `Bearer ${accessToken}` };
  const res = await axios.post('reviews/like', body, { headers: config });
  return res.data.review;
}
