import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import VacancyDetail from './components/VacancyDetail/VacancyDetail';
import AddJob from './components/addjob/AddJob';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="VacancyDetail" component={VacancyDetail} />
    <Route path="AddJob" component={AddJob} />
    
  </Route>
);
