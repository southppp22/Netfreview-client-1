import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/SmallPoster.scss';

type SmallPosterProps = {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
};

function SmallPoster({ id, title, posterUrl, rating }: SmallPosterProps) {
  return (
    <article className="smallPoster">
      <Link to={`/review/${id}/?page=1`}>
        <img src={posterUrl} alt={title} className="poster"></img>
      </Link>

      <div className="smallPoster__info">
        <span className="smallPoster__poster-name">
          <Link to="/">{title}</Link>
        </span>
        <div className="smallPoster__poster-rate">
          <span className="poster-rate__name">평점</span>
          <span className="poster-rate__rate-num">{rating}</span>
        </div>
      </div>
    </article>
  );
}

export default SmallPoster;
