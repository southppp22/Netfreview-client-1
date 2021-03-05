import React from 'react';
import BigPoster from './BigPoster';

import '../scss/PosterContainer.scss';

type PosterContainerProps = {
  subTitle: string;
};

function PosterContainer({ subTitle }: PosterContainerProps) {
  return (
    <section className='poster-container'>
      <h2 className='poster-container__title'>{subTitle}</h2>
      <div className='poster-container__list'>
        <BigPoster
          id={1}
          rating={3.6}
          title='미나리'
          posterUrl='https://an2-img.amz.wtchn.net/image/v2/2aa2e957ce3e3403b913c0ba3eeb34a1.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOakF6TkRRME9EZzROemcwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1SczBrUDBoeFQ1aUVRY2pmdTJZMV9uVEdNajNFZ2RTcVVzM25VRmZjQlk'
        />
        <BigPoster
          id={2}
          rating={3.9}
          title='라야와 마지막 드래곤'
          posterUrl='https://an2-img.amz.wtchn.net/image/v2/a1ffe430f579776a7cb62a573d59cbcd.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek16YzNOelkxTkRBNE5EWTBPVFV4SWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5LjlwZ3Jic2tWMGJrZHZqSi14cTZ2bFBycm51UVlJNzlTdzVSU3lTU1htR00'
        />
        <BigPoster
          id={3}
          rating={4.1}
          title='극장판 귀멸의 칼날 무한열차편'
          posterUrl='https://an2-img.amz.wtchn.net/image/v2/bcbeef6a4c17508a5e18ca6b63246344.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFeE9UQTJOakkxTWpFek1UVXdOemt4SWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lnd2bjJJQXk4cmVSWXdNWFdERnk0QkRsZjN0ZFNQWUo1N1NoTEJiRWN3Ums'
        />
        <BigPoster
          id={4}
          rating={2.7}
          title='카오스 워킹'
          posterUrl='https://an2-img.amz.wtchn.net/image/v2/528faed9401a60268b4f1d01521b10c9.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFek9UYzROakl3TlRreU9UWTFOalEwSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5LkxFWFlXRzF5R3FDZ2JCZjh1QlNjS1lrU3hNcjR5Sy1iTDg3Rkh0bnVTY1k'
        />
        <BigPoster
          id={3}
          rating={4.0}
          title='중경삼림 리마스터링'
          posterUrl='https://an2-img.amz.wtchn.net/image/v2/e9043062b7710cf807af07c3d2872e49.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFeU56WTRPRGszTVRBd01Ua3pNamd4SWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5LnQwTWJJazN5dG1xRXQtMkxDNDlMTkVIbUZpU2NYUlZDQUhXWUNILXRrTm8'
        />
      </div>
    </section>
  );
}

export default PosterContainer;
