import axios from 'axios';
import {
  FetchReviewsPayloadType,
  FetchReviewsType,
} from '../modules/reviews/types';

export async function fetchReviews(
  payload: FetchReviewsPayloadType
): Promise<FetchReviewsType> {
  const { accessToken, videoId, page } = payload;
  const config: { authorization?: string } = {};

  if (accessToken) {
    config.authorization = `Bearer ${accessToken}`;
  }

  const res = await axios.get(`reviews/${videoId}/?page=${page}`, {
    headers: config,
  });

  return res.data;
}
