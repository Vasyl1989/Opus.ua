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