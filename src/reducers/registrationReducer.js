import * as types from '../actions/actionTypes';

const initialState = {
  user:{},
  logIn:!!sessionStorage.getItem('uid'),
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
 
    case types.SIGN_IN:
          return {
        ...state,
        user:action.payload,
        logIn:true,
      };

    case types.SIGN_OUT:
      return {
        ...state,
        logIn:false,
      };

    default: return state;
  }
}