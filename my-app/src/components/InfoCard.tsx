import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import '../scss/InfoCard.scss';

function InfoCard() {
  const {
    description,
    releaseYear,
    ageLimit,
    title,
    actor,
    director,
    genres,
  } = useSelector((state: RootState) => state.video.videoInfo);

  return (
    <>
      <li className="infocard">
        <h6 className="infocard__title">제목</h6>
        <span className="infocard__detail">{title}</span>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">감독</h6>
        <span className="infocard__detail">{director}</span>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">출연진</h6>
        <span className="infocard__detail">{actor}</span>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">년도</h6>
        <span className="infocard__detail">{releaseYear}</span>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">관람 등급</h6>
        <span className="infocard__detail">{ageLimit}</span>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">장르</h6>
        <span className="infocard__detail">{genres.join(' ')}</span>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">영화 상세정보</h6>
        <span className="infocard__detail">{description}</span>
      </li>
    </>
  );
}

export default InfoCard;
