import React from 'react';
import BigPoster from './BigPoster';

import '../css/RecommendedModal.css';

function RecommendedModal() {
  return (
    <section className='recommend'>
      <div className='recommend__container'>
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
      </div>
    </section>
  );
}
export default RecommendedModal;
