import * as types from './actionTypes';

export function opening(){
  return dispatch=>{
    dispatch({type:types.SHOULD_OPEN_CLOSE.MAIN});
  };
}

export function closeError(){
  return dispatch=>{
    dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
  };
}

export function closeSucces(){
  return dispatch=>{
    dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
  };
}