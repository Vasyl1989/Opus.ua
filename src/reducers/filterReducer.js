import * as types from '../actions/actionTypes';

const initialState = {
  title: '',
  city: '',
  job_type: [],
  prMn: '',
  prMx: '',
  ckeck: '',
  category: '',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHECK:
      return {
        ...state,
        job_type: state.job_type.concat(action.payload.job_type_target),
        ckeck: action.payload.checkedElement,
      };

    case types.CHECK_OUT:
      return {
        ...state,
        job_type: state.job_type.filter(type => type !== action.payload.job_type_target),
        ckeck: action.payload.checkedElement,
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

    case types.ABOUT_SEARCH.SET_MN:
      return {
        ...state,
        prMn: action.payload,
      };

    case types.ABOUT_SEARCH.SET_MX:
      return {
        ...state,
        prMx: action.payload,
      };

    case types.ABOUT_SEARCH.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
}
