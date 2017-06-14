import { combineReducers } from 'redux';
import vacancy, * as fromVacancy from './vacancyReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  vacancy,
  routing: routerReducer
});

export default rootReducer;

// selectors
export const getVacancyById = (state, id) => {
  return fromVacancy.getVacancyById(state.vacancy, id);
}
