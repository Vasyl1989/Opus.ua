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
  }
  return state
}

export const getVacancyById = (state, id) => {
// debugger;
console.log('getVacancyById:', state, id);
  // TODO
  let vacancy = null;
// if 
  state.vacancies.forEach((item) => {
    if (item.id == id) {
      vacancy = item;
    }
  })
console.log(vacancy);
  return vacancy;
}