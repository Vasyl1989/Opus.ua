import * as types from '../actions/actionTypes';

const initialState = {
  fething: false,
  users: [],
};

export default function registrationReduce(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_REGISTRATION:
      return {
        ...state,
        fething: false,
        users: action.payload,
      };
    default:
      return state;
  }
}