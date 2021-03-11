import axios from 'axios';
import { VideoList } from '../modules/videoList/types';

export async function fetchVideoList(pathname: string): Promise<VideoList> {
  const res = await axios.get(`videos/videolist/?path=${pathname}`);
  return res.data;
}
