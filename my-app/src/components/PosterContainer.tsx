import React from 'react';
import BigPoster from './BigPoster';

import '../scss/PosterContainer.scss';

type Video = {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
};

type PosterContainerProps = {
  subTitle: string;
  videoList: Video[] | undefined;
};

function PosterContainer({ subTitle, videoList }: PosterContainerProps) {
  const renderPoster = () => {
    return videoList?.map((video) => {
      const { id, title, posterUrl, rating } = video;
      return (
        <BigPoster
          key={id}
          id={id}
          title={title}
          posterUrl={posterUrl}
          rating={rating}
        />
      );
    });
  };
  return (
    <section className="poster-container">
      <h2 className="poster-container__title">{subTitle}</h2>
      <div className="poster-container__list">{renderPoster()}</div>
    </section>
  );
}

export default PosterContainer;
