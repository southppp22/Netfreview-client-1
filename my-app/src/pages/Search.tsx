import React, { useState } from 'react';
import SmallPoster from '../components/SmallPoster';
import Header from '../components/Header';
import nosearch from '../img/nosearch.png';
import '../scss/Search.scss';

function Search() {
  const [isSearch, setIsSearch] = useState(true);

  return (
    <div>
      {/* {isSearch ? ( 
      <section className='mysearchlist'>
        <Header />
        <SmallPoster />
        <SmallPoster />
        <SmallPoster />
        <SmallPoster />
        <SmallPoster />
        <SmallPoster />
        <SmallPoster />
        <SmallPoster />
        <SmallPoster />
        <SmallPoster />
      </section>*/}
      {/* ) : ( */}
      <section className='mysearchlist'>
        <Header />
        <div className='nosearch__info'>
          <div className='info-wrapper'>
            <img className='info-wrapper__img' src={nosearch} alt='검색결과' />
            <h3 className='info-wrapper__title'>검색결과가 없습니다.</h3>
            <span className='info-wrapper__text'>
              단어철자가 정확한지 확인하거나 다른 키워드로 검색해보세요!
            </span>
          </div>
        </div>
      </section>
      {/* )} */}
    </div>
  );
}
export default Search;
