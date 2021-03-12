import axios from 'axios';
import { MainVideo } from '../modules/mainVideo/types';

export async function fetchMainVideo(): Promise<MainVideo> {
  const res = await axios.get('videos/videolist/?path=main');
  return res.data;
}
