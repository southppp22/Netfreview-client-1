import React, {
  useEffect,
  useLayoutEffect,
  EffectCallback,
  DependencyList,
} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BigPoster from './BigPoster';

import '../css/RecommendedModal.css';

type RecommendedModalProps = {
  open: boolean;
  close: () => void;
};

function RecommendedModal({ open, close }: RecommendedModalProps) {
  useEffect(() => {
    if (open) {
      // open이라는 상태(모달창이 떠있으면 true, 모달창이 close되어 있으면 false)로 분기
      // 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 스크롤 방지 해제
      document.body.style.overflow = 'scroll';
      // document.body.style.overflow = 'unset';
    }
  }); // 마지막에 배열을 넣지 않은 이유: 상태가 바뀔때마다 변경되어야되서
  // 배열을 넣을 경우: 화면 첫페이지에서 한번 실행되기 때문에 추후 모달창이 뜰때 변경이 되지 않는다
  return (
    <div className={open ? 'isModal recommend' : 'recommend'}>
      <div className='dim' onClick={close}></div>
      {open ? (
        <section className='recommend__container'>
          <button className='close' onClick={close}>
            닫기
          </button>
          <div className='recommend__wrap'>
            <h2 className='recommend__title'>이거어때?</h2>
            <p className='recommend__description'>
              여러분이 경험해보지 않았던 영역을 탐구해보세요!
              <br />
              나도 몰랐던 나의 흥미를 찾아드릴게요
            </p>
            <div className='recommend__list'>
              <BigPoster
                id={1}
                rating={3.6}
                title='미나리'
                posterUrl='https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk'
              />
              <BigPoster
                id={1}
                rating={3.6}
                title='미나리'
                posterUrl='https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk'
              />
              <BigPoster
                id={1}
                rating={3.6}
                title='미나리'
                posterUrl='https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk'
              />
              <BigPoster
                id={1}
                rating={3.6}
                title='미나리'
                posterUrl='https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk'
              />
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default RecommendedModal;
