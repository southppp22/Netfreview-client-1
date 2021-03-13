import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import queryString from 'query-string';
import SmallPoster from '../components/SmallPoster';
import nosearch from '../img/nosearch.png';
import service from '../img/service.png';
import '../scss/TVprogram.scss';

function TVprogram() {
  return (
    <div className="programlist-wrapper">
      <div className="programimage-wrap">
        <img className="programimage" src={service} />
      </div>
      <div className="program__wrap">
        <h1 className="program__title">서비스 준비중입니다!</h1>
        <span className="program__text">
          보다 나은 서비스 제공을 위해 페이지 준비중에 있습니다.
        </span>
        <span className="program__text">
          빠른 시일내에 준비하여 찾아뵙겠습니다.
        </span>
      </div>
    </div>
  );
}
export default TVprogram;
