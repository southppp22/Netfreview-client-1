import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type video = {
  actor?: string;
  ageLimit?: string;
  bannerUrl: string;
  createdAt?: Date;
  description: string;
  director?: string;
  id: number;
  netflixUrl?: string;
  posterUrl?: string;
  rating?: number;
  releaseYear?: string;
  title: string;
  type?: string;
  updatedAt?: Date;
};

type BannerSlideProps = {
  subTitle: string;
  video: video;
};

function BannerSlide({ subTitle, video }: BannerSlideProps) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${video?.bannerUrl})`,
      }}
    >
      <div className="bg-color">
        <div className="banner__container">
          <article>
            <p className="banner__subtitle">{subTitle}</p>
            <h1 className="banner__title">{video?.title}</h1>
            <p className="banner__synopsis">{video?.description}</p>
            <Link to={`/review/${video?.id}/?page=1`}>
              <button>리뷰보러가기</button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
export default BannerSlide;
