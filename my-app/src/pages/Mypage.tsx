import React, { ChangeEvent, MouseEvent, useState } from 'react';
import SmallPoster from '../components/SmallPoster';
import '../scss/Mypage.scss';

function Mypage() {
  const [img, setImg] = useState<File | undefined>();
  const [profileImg, setProfileImg] = useState('/images/profileImg.png');

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;
    setImg(fileList[0]);
    if (img) {
      const formData = new FormData();
      formData.append('image', img);
      // 서버의 upload API 호출
      // const res = await axios.post('/api/upload', formData);
      // console.log(res);
    }
  };

  // const uploadImg = (/*e: MouseEvent<HTMLButtonElement, MouseEvent>*/) => {};

  return (
    <div className='mypage'>
      <section className='user'>
        <article className='user__aboutme'>
          <div className='user__profile'>
            <label className='user__profile-img'>
              <input
                className='user__profile-img__input'
                type='file'
                accept='image/*'
                name='profile_img'
                onChange={handleImgChange}
              />
              {/* <button onClick={uploadImg}>Choose Picture</button> */}
              <img src={profileImg} alt='profile image' />
              <div className='user__profile-img__hover'></div>
            </label>
            <div className='user__info'>
              <h3 className='user__id'>유저닉네임</h3>
              <span className='user__name'>유저이름</span>
            </div>
          </div>
          <p className='user__description'>
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.Fuga quos
            magnam aperiam quo, quisquam nisi atque recusandae vel, explicabo
            voluptate deleniti ipsa eum magni optio itaque inventore ut, aut
            expedita. */}
          </p>
          <div className='button'>
            <label>
              <input type='button' className='button__edit' value='수정' />
            </label>
            <label>
              <input type='button' className='button__close' value='탈퇴' />
            </label>
          </div>
        </article>
      </section>
      <section className='review-container'>
        <h2 className='review-container__title'>내가 쓴 리뷰List</h2>
        <div className='review-container__list'>
          <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster />
        </div>
      </section>
    </div>
  );
}

export default Mypage;
