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
    <Route path="vacancy_detail/:id" component={VacancyDetail} />
    <Route path="add_vacancy" component={AddVacancy} />
    <Route path="browse_vacancy" component={BrowseVacancy} />
    <Route path="manage_vacancy" component={ManageVacancy} />
    <Route path="browse_categories" component={BrowseCategories} />
  </Route>
);

