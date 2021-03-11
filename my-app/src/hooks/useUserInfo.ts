import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../modules';
// import {
//   setUserId,
//   setImg,
//   setUserName,
//   setNickname,
//   setIntroduction,
// } from '../modules/userInfo';
// import { useCallback } from 'react';
// import axios from 'axios';
// import profile from '../img/profileImg.png';

// export default function useUserInfo() {
//   const userInfo = useSelector((state: RootState) => state.userInfo);

//   const dispatch = useDispatch();

//   const onSetUserId = useCallback(
//     (userId: number) => dispatch(setUserId(userId)),
//     [dispatch]
//   );
//   const onSetImg = useCallback(
//     (imgPath: string) => {
//       // {
//       //   imgPath
//       //     ? axios
//       //         .patch(
//       //           '/users',
//       //           { profileUrl: imgPath },
//       //           {
//       //             headers: { Authorization: `Bearer ${accessToken}` },
//       //           }
//       //         )
//       //         .then((res) => {
//       //           console.log(res, 'Change Image');
//       dispatch(setImg(imgPath));
//       //     })
//       //     .catch((err) => console.log(err.response))
//       // : axios
//       //     .patch(
//       //       '/users',
//       //       { profileUrl: null },
//       //       {
//       //         headers: { Authorization: `Bearer ${accessToken}` },
//       //       }
//       //     )
//       //     .then((res) => {
//       //       console.log(res, 'Reset Image');
//       //       dispatch(setImg(profile));
//       //     })
//       //     .catch((err) => console.log(err.response));
//       // }
//     },
//     [dispatch]
//   );
//   const onSetUserName = useCallback(
//     (imgPath: string) => dispatch(setUserName(imgPath)),
//     [dispatch]
//   );
//   const onSetNickname = useCallback(
//     (nickname: string) => {
//       // axios
//       //   .patch(
//       //     '/users',
//       //     { nickname },
//       //     {
//       //       headers: { Authorization: `Bearer ${accessToken}` },
//       //     }
//       //   )
//       //   .then((res) => {
//       //     console.log('save diff nickname');
//       dispatch(setNickname(nickname));
//       // })
//       // .catch((err) => console.log(err.response));
//     },
//     [dispatch]
//   );
//   const onSetIntroduction = useCallback(
//     (introduction: string) => {
//       // axios
//       //   .patch(
//       //     '/users',
//       //     { introduction },
//       //     {
//       //       headers: { Authorization: `Bearer ${accessToken}` },
//       //     }
//       //   )
//       //   .then((res) => {
//       //     console.log('save 자기소개');
//       dispatch(setIntroduction(introduction));
//       // })
//       // .catch((err) => console.log(err.response));
//     },
//     [dispatch]
//   );
//   return {
//     userInfo,
//     onSetUserId,
//     onSetImg,
//     onSetUserName,
//     onSetNickname,
//     onSetIntroduction,
//   };
// }
