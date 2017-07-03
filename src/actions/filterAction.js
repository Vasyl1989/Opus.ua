import * as types from './actionTypes';
import * as consts from '../constants/const';


export function filtration(query) {
  return dispatch => {

    if (query.checkedElement === true) {
      dispatch({ type: types.CHECK, payload: query.job_type })
    } else if (query.checkedElement === false) {
      dispatch({ type: types.CHECK_OUT, payload: query.job_type })
    }

  };
}

