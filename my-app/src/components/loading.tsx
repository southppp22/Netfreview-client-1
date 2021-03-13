import React from 'react';
import { useSelector, connect } from 'react-redux';
import { RootState } from '../modules';
import '../scss/loading.scss';
import spinner from '../img/Spinner.gif';
//import netfreivew from '../img/netfreview.gif';
type loadingPropsType = {
  on?: boolean;
};

function loading({ on }: loadingPropsType) {
  return (
    <div className={on ? 'loader-container' : 'loader-container inactive'}>
      <div className="loader">
        <img src={spinner} />
      </div>
    </div>
  );
}

export default loading;
