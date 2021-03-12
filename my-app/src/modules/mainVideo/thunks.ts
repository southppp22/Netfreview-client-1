import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { fetchMainVideo } from '../../api/fetchMainVideo';
import { fetchMainVideoAsync } from './actions';
import { fetchMainVideoPayloadType, MainVideoAction } from './types';

export function fetchMainVideoThunk(): ThunkAction<
  void,
  RootState,
  null,
  MainVideoAction
> {
  return async (dispatch) => {
    const { request, success, failure } = fetchMainVideoAsync;
    dispatch(request());
    try {
      const mainVideo = await fetchMainVideo();
      dispatch(success(mainVideo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
