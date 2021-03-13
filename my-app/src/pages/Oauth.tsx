import React, { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { oauthLogin } from '../modules/login';

function Oauth() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { token } = queryString.parse(location.search);

  useEffect(() => {
    if (typeof token === 'string') {
      dispatch(oauthLogin(token));
    }
    history.push('/');
  }, []);
  return <div></div>;
}

export default Oauth;
