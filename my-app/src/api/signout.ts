import axios from 'axios';

export async function signout(): Promise<void> {
  await axios.post('/users/signout');
  return;
}
