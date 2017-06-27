import * as types from './actionTypes';
import * as consts from '../constants/const';

export function filtration(query) {
  return dispatch => {
    if (query === consts.VACANCY_TYPE.FULL) {
      dispatch({ type: types.JOB_TYPE.SET_FULL_TIME, payload: query });
    } else if (query === consts.VACANCY_TYPE.PART) {
      dispatch({ type: types.JOB_TYPE.SET_PART_TIME, payload: query });
    } else if (query === consts.VACANCY_TYPE.INTERNSHIP) {
      dispatch({ type: types.JOB_TYPE.SET_INTERNSHIP, payload: query });
    } else if (query === consts.VACANCY_TYPE.FREELANCE) {
      dispatch({ type: types.JOB_TYPE.SET_FREELANCE, payload: query });
    }
  };
}

