import axios from 'axios';
import { access } from 'node:fs';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../modules';

import '../scss/ModifyUserInfo.scss';

function Resetpw() {
  const history = useHistory();
  // const { userInfo, onSetNickname, onSetIntroduction } = useUserInfo();
  // const { userName, nickname, introduction } = userInfo;
  const { nickname, introduction } = useSelector(
    (state: RootState) => state.userInfo
  );
  const [diffNickname, setDiffNickname] = useState(nickname);
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [description, setDescription] = useState(introduction);
  const [isValidPw, setIsValidPw] = useState(true);
  const [isMatchPw, setIsMatchPw] = useState(true);

  const accessToken = history.location.pathname.slice(9);

  // const errorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (password !== confirmPw && confirmPw) {
      setIsMatchPw(false);
    } else if (password === confirmPw) {
      setIsMatchPw(true);
    }
  }, [password, confirmPw]);

  //비밀번호 유효성 검사
  const handlePW = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value === '') {
      setIsValidPw(true);
    } else {
      const regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*()_+|<>?:{}]).*$/;
      if (regExp.test(e.target.value)) {
        setIsValidPw(true);
      } else {
        setIsValidPw(false);
      }
    }
  };
  const isPwMatches = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPw(e.target.value);
  };

  const checkModified = () => {
    if (diffNickname !== nickname || password || description !== introduction) {
      return true;
    }
    return false;
  };

  const confirmModified = () => {
    const isModified = confirm('회원정보 변경 사항을 적용하시겠습니까?');
    if (isModified && password && isValidPw && isMatchPw) {
      axios
        .patch('/users', {
          nickname: diffNickname,
          password,
          introduction: description,
        }, {headers : {
          Authorization : `bearer ${accessToken}`
        }})
        .then(() => {
          alert('비밀번호 재설정이 완료되었습니다. 다시 로그인 해주세요')
          history.push('/mypage');
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (isModified && !password) {
      axios
        .patch('/users', {
          nickname: diffNickname,
          introduction: description,
        })
        .then(() => {
          history.push('/mypage');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <section className="modify-user">
      <article className="modify-user-wrap">
        <h2 className="modify-user__title">비밀번호 재설정</h2>
        <table className="table">
          <tbody>
            <tr className="table__pw">
              <th className="table__th">
                <div className="table__th-cell text">비밀번호 변경</div>
              </th>
              <td className="table__td">
                <div className="table__td-cell">
                  <input
                    className={
                      isValidPw
                        ? 'table__td-cell__pw'
                        : 'table__td-cell__pw error'
                    }
                    type="password"
                    placeholder={'비밀번호를 입력해주세요'}
                    onChange={handlePW}
                  />
                  <div
                    className={
                      isValidPw
                        ? 'table__td-cell__caution'
                        : 'table__td-cell__caution error'
                    }
                  >
                    8-15자리의 영문/숫자/특수문자를 함께 입력해주세요.
                  </div>
                  <input
                    className={
                      isMatchPw
                        ? 'table__td-cell__pw-confirm'
                        : 'table__td-cell__pw-confirm error'
                    }
                    type="password"
                    placeholder={'입력하신 비밀번호를 다시 한번 입력해주세요'}
                    onChange={isPwMatches}
                  />
                  <div
                    className={
                      isMatchPw
                        ? 'table__td-cell__caution'
                        : 'table__td-cell__caution error'
                    }
                    // ref={errorRef}
                  >
                    {isMatchPw
                      ? null
                      : '입력하신 비밀번호가 일치하지 않습니다. 다시 확인해 주세요.'}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-wrap">
          <Link to="/mypage">
            <button className="btn btn-cancel">취소</button>
          </Link>
          {checkModified() ? (
            <button className="btn btn-save" onClick={confirmModified}>
              적용
            </button>
          ) : (
            <div className="btn-save no-change">적용</div>
          )}
        </div>
      </article>
    </section>
  );
}
export default Resetpw;