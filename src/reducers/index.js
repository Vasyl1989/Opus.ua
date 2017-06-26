import { combineReducers } from 'redux';
import vacancy, * as fromVacancy from './vacancyReducer';
import filterReducer,* as fromFilter  from './filterReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  vacancy,
  filterReducer,
  routing: routerReducer,
});

export default rootReducer;

// selectors

export const getVacancyById = (state, id) => {
  // TODO
  return fromVacancy.getVacancyById(state.vacancy, id);
}
