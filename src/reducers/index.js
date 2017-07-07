import { combineReducers } from 'redux';
import vacancy from './vacancyReducer';
import filter from './filterReducer';
import open from './openReducer';
import registration from './registrationReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  vacancy,
  filter,
  open,
  registration,
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