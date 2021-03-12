import React from 'react';
// import { ReactComponent as StarSvg } from '../img/heart.svg';
import '../scss/Writeleaficon.scss';
import leaf from '../img/leaf.svg';
import emptyleaf from '../img/emptyleaf.svg';

type leafIconProps = {
  isActive: boolean;
};

export function Writeleaficon({ isActive }: leafIconProps) {
  return (
    <span>
      <img src={leaf} className={isActive ? 'leaf-active' : 'leaf-no-active'} />
    </span>
  );
}
