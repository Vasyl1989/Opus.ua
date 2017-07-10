import * as types from '../actions/actionTypes';

const initialState = {
  uid: [],
  accessToken: [],
  client: [],
  email:[],
  logIn:false,
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {

    case types.SIGN_IN:
      return {
        ...state,
        uid: action.payload.headers.uid,
        client: action.payload.headers.client,
        accessToken: action.payload.headers['access-token'],
        email:action.payload.data.data.email,
        logIn:true,
      };

    case types.SIGN_OUT:
      return {
        ...state,
        uid: '',
        client: '',
        accessToken: '',
        email: '',
        logIn:false,
      };

    default: return state;
  }
}