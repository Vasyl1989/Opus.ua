import * as types from '../actions/actionTypes';

const initialState = {
  users: [],
  authenticated: false,
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {

    case types.SIGN_UP:
      return {
        ...state,
        users: action.payload,
        authenticated: true,
      };

    case types.SIGN_OUT:
      return {
        ...state,
        authenticated: false,
      };

    default: return state;
  }
}