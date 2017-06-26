import * as types from '../actions/actionTypes';
import initialState from './vacancyReducer';

export default function filterReducer(state=initialState,action){
  switch (action.type) {
    case types.JOB_TYPE.FULL_TIME:
    return{
    ...state,
    SearchResults:action.payload
  }
   default:
      return state;
  }
}