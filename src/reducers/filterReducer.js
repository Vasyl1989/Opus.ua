import * as types from '../actions/actionTypes';

const initialState = {
  title: '',
  city: '',
  job_type: [],
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHECK:
      return {
        ...state,
        job_type: state.job_type.concat(action.payload),
      };

    case types.CHECK_OUT:
      return {
        ...state,
        job_type: state.job_type.filter(type => type !== action.payload),
      };

    case types.ABOUT_SEARCH.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case types.ABOUT_SEARCH.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}
