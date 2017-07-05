import * as types from './actionTypes';

export function opening(){
  return dispatch=>{
    dispatch({type:types.SHOULD_OPEN_CLOSE_MAIN});
  };
}

export function closeOpenError(){
  return dispatch=>{
    dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
  };
}

export function closeOpenSucces(){
  return dispatch=>{
    dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
  };
}
