import { combineReducers } from 'redux';
import vacancy, * as fromVacancy from './vacancyReducer';
import filter,* as fromFilter  from './filterReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  vacancy,
  filter,
  routing: routerReducer,
});

export default rootReducer;






// selectors

// export const getVacancyById = (state, id) => {
//   return fromVacancy.getVacancyById(state.vacancy, id);
// }



//filterSelector
// export const showVacancyByCategory = (state,filter) => {
//   return fromFilter.showVacancyByCategory(state.filter,filter)
// }