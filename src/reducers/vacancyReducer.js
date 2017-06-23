import * as types from '../actions/actionTypes';

const initialState = {
  fething: false,
  singleVacancy: {},
  shouldUpdate: false,
  vacancies: [],
  SearchResults: []
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
      return {
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
    case types.EDIT_VACANCY:
      return {
        ...state,
        fething: false,
        vacancies: action.payload
      };

    case types.SHOULD_UPDATE:
      return {
        ...state,
        fething: false,
        shouldUpdate: true
      };

    case types.SEARCH:
      return {
        ...state,
        fething: false,
        SearchResults: action.payload
      }

    default:
      return state;
  };
}
