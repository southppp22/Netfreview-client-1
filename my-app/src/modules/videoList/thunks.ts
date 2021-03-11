import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { fetchVideoList } from '../../api/fetchVideoList';
import { fetchVideoListAsync } from './actions';
import { VideoListAction } from './types';

export function fetchVideoListThunk(
  pathname: string
): ThunkAction<void, RootState, null, VideoListAction> {
  return async (dispatch) => {
    const { request, success, failure } = fetchVideoListAsync;
    console.log('request'); //
    dispatch(request());
    try {
      const videoList = await fetchVideoList(pathname);
      console.log('success'); //
      dispatch(success(videoList));
    } catch (e) {
      console.log('fail'); //
      dispatch(failure(e));
    }
  };
}
