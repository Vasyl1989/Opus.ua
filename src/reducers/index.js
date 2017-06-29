import { combineReducers } from 'redux';
import vacancy, * as fromVacancy from './vacancyReducer';
import { routerReducer } from 'react-router-redux';
import filter, * as fromFilter from './filterReducer';

const rootReducer = combineReducers({
  vacancy,
  filter,
  routing: routerReducer,
});

export default rootReducer;

// selectors
export const getVacancyById = (state, id) => {
  // TODO
  return fromVacancy.getVacancyById(state.vacancy, id);
};
