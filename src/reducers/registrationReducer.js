import * as types from '../actions/actionTypes';

let userData;
const initialState = {
  user: {},
  logIn: false,
  userVacancies:[],
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        user: action.payload,
        logIn: true
      };

    case types.SIGN_OUT:
      return {
        ...state,
        user: {},
        logIn: false
      };

    case types.GET_USER:
      userData = JSON.parse(localStorage.getItem('userData'));
      return {
        ...state,
        user: userData,
        logIn: !!userData
      };

     

    default: return state;
  }
}