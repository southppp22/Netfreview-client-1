import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { fetchMainVideoThunk } from '../modules/mainVideo';

import PosterContainer from '../components/PosterContainer';
import RecommendedModal from '../components/RecommendedModal';
import Banner from '../components/Banner';

import '../scss/Main.scss';

function Main() {
  const dispatch = useDispatch();
  const { top5VideoList, mostReviewVidList, lessReviewVidList } = useSelector(
    (state: RootState) => state.mainVideo.videoInfoList
  );
  const [isModal, setIsModal] = useState<boolean>(false);

  // const handleModal = () => {
  //   setIsModal(!isModal);
  // };
  // const openModal = () => {
  //   setIsModal(true);
  // };
  // const closeModal = () => {
  //   setIsModal(false);
  // };

  useEffect(() => {
    dispatch(fetchMainVideoThunk());
  }, [dispatch]);

  return (
    <main>
      <button className="btn-recommend" onClick={() => setIsModal(true)}>
        <span>
          이거
          <br />
          어때?
        </span>
      </button>
      <RecommendedModal open={isModal} close={setIsModal} />
      <div className="bg-color__top"></div>
      <Banner />
      <PosterContainer
        subTitle="넷프리뷰가 추천하는 탑 5"
        videoList={top5VideoList}
      />
      <PosterContainer
        subTitle="넷프리뷰 최다리뷰작"
        videoList={mostReviewVidList}
      />
      <PosterContainer
        subTitle="리뷰를 달아주세요!"
        videoList={lessReviewVidList}
      />
    </main>
  );
}
export default Main;
