import axios from 'axios';
import {
  FetchReviewsPayloadType,
  FetchReviewsType,
} from '../modules/review/types';

export async function fetchReviews(
  payload: FetchReviewsPayloadType
): Promise<FetchReviewsType> {
  const { videoId, page } = payload;

  const res = await axios.get(`reviews/${videoId}/?page=${page}`);
  console.log('res', res);
  return res.data;
}
