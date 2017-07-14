import * as types from './actionTypes';

export function filtration(parametr) {
  return dispatch => {
    if (parametr.checkedElement === true) {
      dispatch({ type: types.CHECK, payload: parametr });
    } else if (parametr.checkedElement === false) {
      dispatch({ type: types.CHECK_OUT, payload: parametr });
    }
  };
}

