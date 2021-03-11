import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import ReduxThunk from 'redux-thunk';
// axios.defaults.baseURL = 'https://www.gettoday4.click';
axios.defaults.baseURL = 'https://server.netfreview.com';
axios.defaults.withCredentials = true;
const store = createStore(
  rootReducer,
  // composeWithDevTools()
  //applyMiddleware(thunk)
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
