import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import "../scss/InfoCard.scss";

function InfoCard() {
  const {
    description,
    releaseYear,
    ageLimit,
    rating,
    title,
    actor,
    director,
    genres,
  } = useSelector((state: RootState) => state.video.videoInfo);

  return (
    <>
      <li className="infocard">
        <h6 className="infocard__title">평균</h6>
        <p className="infocard__detail">{rating?.toFixed(1)}</p>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">제목</h6>
        <p className="infocard__detail">{title}</p>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">감독</h6>
        <p className="infocard__detail">{director}</p>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">출연진</h6>
        <p className="infocard__detail">{actor}</p>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">년도</h6>
        <p className="infocard__detail">{releaseYear}</p>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">장르</h6>
        <p className="infocard__detail">{genres.join(" ")}</p>
      </li>
      <li className="infocard">
        <h6 className="infocard__title">영화 상세정보</h6>
        <p className="infocard__detail">{description}</p>
      </li>
    </>
  );
}

export default InfoCard;
