import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { signIn } from "../../api/signIn";
import { loginAsync } from "./actions";
import { LoginAction, LoginPayloadType } from "./types";

export function loginThunk(payload: LoginPayloadType): ThunkAction<void, RootState, null, LoginAction> {
  return async dispatch => {
    const {request, success, failure} = loginAsync;
    dispatch(request());
    try {
      const accessToken = await signIn(payload);
      dispatch(success(accessToken))
    } catch (e) {
      dispatch(failure(e))
    }
  }
}
