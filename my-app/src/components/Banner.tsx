import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../modules';

type VideoInfo = {
  id: number;
  title: string;
  description: string;
  bannerUrl: string;
};

function Banner() {
  const { top5VideoList } = useSelector(
    (state: RootState) => state.mainVideo.videoInfoList
  );

  const [topVideo, setTopVideo] = useState<VideoInfo>({
    id: 0,
    title: '',
    description: '',
    bannerUrl: '',
  });

  useEffect(() => {
    top5VideoList && setTopVideo(top5VideoList[0]);
  }, [top5VideoList]);

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${topVideo?.bannerUrl})`,
      }}
    >
      <div className="bg-color">
        <div className="banner__container">
          <article>
            <h1 className="banner__title">{topVideo?.title}</h1>
            <p className="banner__synopsis">{topVideo?.description}</p>
            <Link to={`/review/${topVideo?.id}/?page=1`}>
              <button>리뷰보러가기</button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Banner;
