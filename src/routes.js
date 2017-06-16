import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import VacancyDetail from './components/VacancyDetail/VacancyDetail';
import AddVacancy from './components/addvacancy/AddVacancy';
import BrowseVacancy from './components/browsevacancy/BrowseVacancy';
import BrowseCategories from './components/browsecategories/BrowseCategories';
import ManageVacancy from './components/manageVacancy/ManageVacancy';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="VacancyDetail/:id" component={VacancyDetail} />
    <Route path="AddVacancy" component={AddVacancy} />
    <Route path="BrowseVacancy" component={BrowseVacancy} />
    <Route path="ManageVacancy" component={ManageVacancy} />
    <Route path="BrowseCategories" component={BrowseCategories} />

  </Route>
);

