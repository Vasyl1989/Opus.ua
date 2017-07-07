import * as types from '../actions/actionTypes';

const initialState = {
   uid:"",
   accessToken:"",
   client:"",
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
   
    case types.SIGN_IN:
      return {
        ...state,
       uid:action.payload.headers.uid,
       client:action.payload.headers.client
      };
    

    case types.SIGN_OUT:
      return {
        ...state,
        
      };

    default: return state;
  }
}