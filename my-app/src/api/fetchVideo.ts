import axios from "axios"
import { Video } from "../modules/video/types";

export async function fetchVideo(videoId: string): Promise<Video> {
  const res = await axios.get(`videos/${videoId}`);
  return res.data;
}