import * as types from '../actions/actionTypes';

const initialState = {
  fething: false,
  vacancies: null,
  active: 0
}

export default function vacancyReduce(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_VACANCIES:
      return {
        ...state,
        fething: false,
        vacancies: action.payload
      };
      case types.DELETE_VACANCY:
      return{
        
      }
  }
  
  return state
}

export const getVacancyById = (state, id) => {
// console.log('getVacancyById:', state, id);
  let vacancy = null;
  state.vacancies.forEach((item) => {
    if (item.id == id) {
      vacancy = item;
    }
  })
// console.log(vacancy);
  return vacancy;
}