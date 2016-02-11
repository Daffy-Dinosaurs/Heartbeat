import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';

import d3Globe from './components/d3.js';
import rootReducer from './reducers/index';
import { requestCountries } from './actions/request_country';
import CountryList from './containers/countryList';
import Globe from './components/globe';
import App from './components/app';
import styles from './style.css';


const loggerMiddleware = createLogger();
const store = applyMiddleware(promiseMiddleware, loggerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={ store(rootReducer) }>
    <App />
  </Provider>,
  document.querySelector('.container')
);
