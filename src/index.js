import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux';
import routes from './routes';
// import {rootReducer} from './reducers/index';


require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.css'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/yellow.css';
import './styles/base.css';
import './styles/font-awesome.css';

const store = configureStore();
// const history=syncHistoryWithStore(browserHistory,store);
console.log(store);


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);