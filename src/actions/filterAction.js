import * as types from './actionTypes';
import * as consts from '../constants/const';


//action for filtering 
//замінити стрінги на константи

export function filtration(query) {
  //debugger;
  return dispatch => {
    switch (query) {
      case 'Повна':
        dispatch({ type: types.JOB_TYPE.SET_FULL_TIME, payload: query });
      case 'Часткова':
        dispatch({ type: types.JOB_TYPE.SET_PART_TIME, payload: query });
      case 'Інтернатура':
        dispatch({ type: types.JOB_TYPE.SET_INTERNSHIP, payload: query  });
      case 'Фріланс':
        dispatch({ type: types.JOB_TYPE.SET_FREELANCE, payload: query  });
    };
   
  }
}

