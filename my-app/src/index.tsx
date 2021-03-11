import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import axios from 'axios';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';
// axios.defaults.baseURL = 'https://www.gettoday4.click';
axios.defaults.baseURL = 'https://server.netfreview.com';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use((config) => {
  const { accessToken, isLogin } = store.getState().login;
  if (isLogin && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
