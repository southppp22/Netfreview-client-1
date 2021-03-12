import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { fetchVideoList } from '../../api/fetchVideoList';
import { fetchVideoListAsync } from './actions';
import { fetchVideoListPayloadType, VideoListAction } from './types';

export function fetchVideoListThunk(
  payload: fetchVideoListPayloadType
): ThunkAction<void, RootState, null, VideoListAction> {
  return async (dispatch) => {
    console.log('1');

    const { request, success, failure } = fetchVideoListAsync;
    dispatch(request());
    try {
      console.log('2-success');

      const videoList = await fetchVideoList(payload);
      dispatch(success(videoList));
    } catch (e) {
      console.log(e.response, '2-fail');

      dispatch(failure(e));
    }
  };
}
