import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { requestCountries } from './actions/request_country';
import rootReducer from './reducers/index';
import promiseMiddleware from 'redux-promise';
import { Route, Router, browserHistory, hashHistory } from 'react-router';
import App from './components/app';
import D3Graphs from './components/d3Graphs';

// import routes from './routes.js';

const loggerMiddleware = createLogger();

const store = applyMiddleware(promiseMiddleware, loggerMiddleware)(createStore);

// store.dispatch({type: 'REQUEST_COUNTRIES'})
// store.dispatch(requestCountries()).then(() =>
//   console.log(store.getState());
// )
// )
//

// var Globe = React.createClass({
//   componentDidMount: function() {
//     d3Globe.go();
// }

ReactDOM.render(
  <Provider store={ store(rootReducer) }>
    <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/d3Graphs" component={D3Graphs}/>
    <Route path="/sandbox/jon" component={D3Graphs}/>
    </Router>
  </Provider>,
  document.querySelector('.container-fluid')
);
