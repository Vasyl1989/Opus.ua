import * as types from '../actions/actionTypes';

const initialState = {
  title: '',
  city: '',
  job_type: [],
};

export default function filterReducer(state = initialState, action) {

  switch (action.type) {


    case types.JOB_TYPE.SET_FULL_TIME:
      console.log('---', action.payload)
        return {
          ...state,
          job_type: state.job_type.concat(action.payload.job_type)
        };

        
    case types.JOB_TYPE.SET_FREELANCE:
        return {
          ...state,
          job_type: state.job_type.concat(action.payload.job_type),
        };



    case types.JOB_TYPE.SET_PART_TIME:
        return {
          ...state,
          job_type: state.job_type.concat(action.payload.job_type),
        };

    case types.JOB_TYPE.SET_INTERNSHIP:
      // if (action.payload.checkedElement) {
        return {
          ...state,
          job_type: state.job_type.concat(action.payload.job_type),
        };
      // } else {
      //   return {
      //     ...state,
      //     job_type: state.job_type.filter(type => type !== action.payload.job_type)
      //   };
      // }


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
