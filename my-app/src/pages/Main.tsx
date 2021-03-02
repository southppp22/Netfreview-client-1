import React from 'react';
import PosterContainer from '../components/PosterContainer';

import '../css/Main.css';

function Main() {
  return (
    <main>
      <div className='bg-color__top'></div>
      <section className='banner'>
        <div className='bg-color'>
          <div className='banner__container'>
            <article>
              <h1 className='banner__title'>기묘한 이야기</h1>
              <span className='banner__title-eng'>STRANGER THINGS</span>
              <p className='banner__synopsis'>
                실종된 소년 윌 바이어스가 돌아온 1년 후,
                <br />
                인디애나 호킨스 마을에서 벌어진 <br />
                더욱 기묘해지고 거대한 사건들을 다룬 미스터리 스릴러
              </p>
              <button>리뷰보러가기</button>
            </article>
          </div>
        </div>
      </section>
      <PosterContainer subTitle='넷프리뷰가 추천하는 탑 5' />
      <PosterContainer subTitle='리뷰를 달아주세요!' />
      <PosterContainer subTitle='넷프리뷰 최다리뷰작' />
    </main>
  );
}
export default Main;
