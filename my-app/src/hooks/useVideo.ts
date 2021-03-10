import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { fetchVideo, Video } from '../modules/video';

export default function useVideo() {
  const video =  useSelector((state: RootState) => state.video) 

  const dispatch = useDispatch()

  const onFetchVideo = useCallback(
    (vid: Video) => dispatch(fetchVideo(vid)),
    [dispatch]
  )

  return {video, onFetchVideo}
}