import axios from 'axios';

export async function refresh(): Promise<string> {
  const res = await axios.get('/users/refresh');
  const { accessToken } = res.data.data;
  return accessToken;
}
