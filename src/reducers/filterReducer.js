import * as types from '../actions/actionTypes';

const initialState = {
  title: '',
  city: '',
  part: '',
  job_type: [],
  full: '',
  freelance: '',
  internship: ''
};

export default function filterReducer(state = initialState, action) {

  switch (action.type) {
    case types.JOB_TYPE.SET_FULL_TIME:
      return {
        ...state,
        job_type: action.payload,
      };

    case types.JOB_TYPE.SET_FREELANCE:
      return {
        ...state,
        job_type: action.payload,
      };

    case types.JOB_TYPE.SET_PART_TIME:
      return {
        ...state,
        job_type: action.payload,
      };

    case types.JOB_TYPE.SET_INTERNSHIP:
      return {
        ...state,
        job_type: action.payload,
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
