import * as types from '../actions/actionTypes';

const initialState = {
  users: [],
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        users: action.payload,
      };
    default: return state;
  }
}