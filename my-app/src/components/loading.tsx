import React from 'react';
import { useSelector, connect } from 'react-redux';
import { RootState } from '../modules';
import '../scss/loading.scss';
import spinner from '../img/Spinner-1s-98px.gif';
//import netfreivew from '../img/netfreview.gif';

function loading() {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={spinner} />
      </div>
    </div>
  );
}

export default loading;
