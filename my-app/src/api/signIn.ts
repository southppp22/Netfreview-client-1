import axios from "axios"
import { LoginPayloadType } from "../modules/login/types";

export async function signIn(payload: LoginPayloadType): Promise<string> {
  const res = await axios.post('/users/signin', {...payload});
  const { accessToken } = res.data.data;
  return accessToken;
}