import React from 'react';
import './css/BigPoster.css';

type BigPosterProps = {
  id: number;
  rating: number;
  title: string;
  posterUrl: string;
};

function BigPoster(/*{ id:number, rating, title, posterUrl }: BigPosterProps*/) {
  // return (
  //   <article className='poster-big'>
  //     <div className='poster-big__img'>
  //       <img src={posterUrl} alt={title} />
  //     </div>
  //     <div className='poster-big__info'>
  //       <span className='poster-big__name'>{title}</span>
  //       <div className='poster-big__rate'>
  //         <span>평균</span>
  //         <span className='poster-big__rate-number'>{rating}</span>
  //       </div>
  //     </div>
  //   </article>
  // );
  return (
    <article className='poster-big'>
      <div className='poster-big__img'>
        <img src='https://via.placeholder.com/236x341' alt='poster' />
      </div>
      <div className='poster-big__info'>
        <span className='poster-big__name'>Poster Title</span>
        <div className='poster-big__rate'>
          <span className='poster-big__avg'>평균</span>
          <span className='poster-big__rate-number'>4.5</span>
        </div>
      </div>
    </article>
  );
}

export default BigPoster;
