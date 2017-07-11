import * as types from '../actions/actionTypes';

const isLoggedIn = localStorage.getItem('uid');
console.log(isLoggedIn);

const initialState = {
  // uid: [],
  // accessToken: [],
  // client: [],
  user: {},
  logIn: !!isLoggedIn,
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN:
      console.log('user:action.payload', action.payload);
      return {
        ...state,
        user: action.payload,
        logIn: true,
      };

    case types.SIGN_OUT:
      return {
        ...state,
        logIn: false,
      };

    default: return state;
  }
}