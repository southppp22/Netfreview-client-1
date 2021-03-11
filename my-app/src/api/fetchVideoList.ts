import axios from 'axios';
import {
  fetchVideoListPayloadType,
  VideoList,
} from '../modules/videoList/types';

export async function fetchVideoList(
  payload: fetchVideoListPayloadType
): Promise<VideoList> {
  const { pathname, query } = payload;
  const res = query
    ? await axios.get(`videos/videolist/?q=${query}`)
    : await axios.get(`videos/videolist/?path=${pathname}`);
  return res.data;
}
