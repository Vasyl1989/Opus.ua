import * as types from '../actions/actionTypes';

const initialState = {
  singleVacancy: {},
  fething: false,
  vacancies: [],
  active: 0
};

export default function vacancyReduce(state = initialState, action) {
  switch (action.type) {
  case types.GET_ALL_VACANCIES:
    return {
      ...state,
      fething: false,
      vacancies: action.payload
    };

  case types.GET_VACANCY_BY_ID:
    return{
      ...state,
      fething: false,
      singleVacancy: action.payload
    };
  case types.DELETE_VACANCY:
    return {
      ...state,
      fething: false,
      vacancies: action.payload
    };
  default:
    return state;
  }
}
