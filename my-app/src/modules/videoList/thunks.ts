import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { fetchVideoList } from '../../api/fetchVideoList';
import { fetchVideoListAsync } from './actions';
import { fetchVideoListPayloadType, VideoListAction } from './types';

export function fetchVideoListThunk(
  payload: fetchVideoListPayloadType
): ThunkAction<void, RootState, null, VideoListAction> {
  return async (dispatch) => {
    const { request, success, failure } = fetchVideoListAsync;
    dispatch(request());
    try {
      const videoList = await fetchVideoList(payload);
      dispatch(success(videoList));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
