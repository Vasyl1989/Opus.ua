import * as types from './actionTypes';

export function opening(){
  return dispatch=>{
    dispatch({type:types.SHOULD_OPEN_CLOSE_MAIN});
  };
}