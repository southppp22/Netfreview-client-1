import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { fetchVideo } from "../../api/fetchVideo";
import { fetchVideoAsync } from "./actions";
import { VideoAction } from "./types";

export function fetchVideoThunk(videoId: string): ThunkAction<void, RootState, null, VideoAction> {
  return async dispatch => {
    const {request, success, failure} = fetchVideoAsync;
      dispatch(request());
    try {
      const video = await fetchVideo(videoId);
      dispatch(success(video))
    } catch (e) {
      dispatch(failure(e))
    }
  }
}
