import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/BigPoster.scss';

type BigPosterProps = {
  id?: number;
  rating: number;
  title: string;
  posterUrl: string;
};

function BigPoster({ id, rating, title, posterUrl }: BigPosterProps) {
  return (
    <article className="poster-big poster-recommend">
      <div className="poster-big__img">
        <Link to={`/review/${id}/?page=1`}>
          <img src={posterUrl} alt={title} />
        </Link>
      </div>
      <div className="poster-big__info">
        <span className="poster-big__name">
          <Link to="/">{title}</Link>
        </span>
        <div className="poster-big__rate">
          <span className="poster-big__avg">평균</span>
          <span className="poster-big__rate-number">{rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  );
}

export default BigPoster;
