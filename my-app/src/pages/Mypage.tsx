import React, { ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import axios from 'axios';
import SmallPoster from '../components/SmallPoster';
import '../scss/Mypage.scss';
import useUserInfo from '../hooks/useUserInfo';

function Mypage() {
  const { userInfo, onSetUserId, onSetImg, onSetNickname } = useUserInfo();
  const { userId, nickname, profileImgPath } = userInfo;

  const [img, setImg] = useState<File | undefined>();
  const [introduction, setIntroduction] = useState('');
  const [userName, setUserName] = useState('');
  type VideoList = {
    id: number;
    title: string;
    posterUrl: string;
    rating: number;
  };
  const [videoList, setVideoList] = useState<VideoList[] | undefined>([]);

  useEffect(() => {
    axios.get('/user/userinfo').then((res) => {
      console.log(res.data);
      const { id, name, nickname, introduction, profileUrl } = res.data;
      setUserName(name);
      setIntroduction(introduction);
      onSetUserId(id);
      onSetNickname(nickname);
      onSetImg(profileUrl);
    });
    axios.get('/videos/videolist/?path=myPage').then((res) => {
      console.log(res.data.videoLists);
      const videos = res.data.videoList.map((video: any) => {
        return {
          id: video.id,
          title: video.title,
          posterUrl: video.posterUrl,
          rating: video.rating,
        };
      });
      setVideoList(videos);
    });
  });

  // const renderVideoList = () => {
  //   if (videoList) {
  //     return videoList.map((video) => (
  //       <SmallPoster
  //         key={video.id}
  //         id={video.id}
  //         title={video.title}
  //         posterUrl={video.posterUrl}
  //         rating={video.rating}
  //       />
  //     ));
  //   }
  //   return <></>;
  // };

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
    <div className="mypage">
      <section className="user">
        <article className="user__aboutme">
          <div className="user__profile">
            <label className="user__profile-img">
              <input
                className="user__profile-img__input"
                type="file"
                accept="image/*"
                name="profile_img"
                onChange={handleImgChange}
              />
              {/* <button onClick={uploadImg}>Choose Picture</button> */}
              <img src={profileImgPath} alt="profile image" />
              <div className="user__profile-img__hover"></div>
            </label>
            <div className="user__info">
              <h3 className="user__id">{nickname}</h3>
              <span className="user__name">{userName}</span>
            </div>
          </div>
          <p className="user__description">{introduction}</p>
          <div className="button">
            <label>
              <input type="button" className="button__edit" value="수정" />
            </label>
            <label>
              <input type="button" className="button__close" value="탈퇴" />
            </label>
          </div>
        </article>
      </section>
      <section className="review-container">
        <h2 className="review-container__title">내가 쓴 리뷰List</h2>
        <div className="review-container__list">
          {/* <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster />
          <SmallPoster /> */}
          {/* {renderVideoList()} */}
        </div>
      </section>
    </div>
  );
}

export default Mypage;
