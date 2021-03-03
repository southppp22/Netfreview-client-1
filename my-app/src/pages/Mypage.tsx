import React from 'react';
import SmallPoster from '../components/SmallPoster';
import '../css/Mypage.css';

function Mypage() {
  return (
    <div className='mypage'>
      <section className='user'>
        <article className='user__aboutme'>
          <div className='user__profile'>
            <div className='user__profile-img'>
              <img src='/images/profileImg.png' alt='profile image' />
            </div>
            <div className='user__info'>
              <h3 className='user__id'>유저닉네임</h3>
              <span className='user__name'>유저이름</span>
            </div>
          </div>
          <p className='user__description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos
            magnam aperiam quo, quisquam nisi atque recusandae vel, explicabo
            voluptate deleniti ipsa eum magni optio itaque inventore ut, aut
            expedita.
          </p>
          <div className='button'>
            <button className='button__edit'>수정</button>
            <button className='button__close'>탈퇴</button>
          </div>
        </article>
      </section>
      <section className='review-container'>
        <h2 className='review-container__title'>내가 쓴 리뷰List</h2>
        <div className='review-container__list'>
          <SmallPoster />
        </div>
      </section>
    </div>
  );
}

export default Mypage;
