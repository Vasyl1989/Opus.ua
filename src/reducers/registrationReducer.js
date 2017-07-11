import * as types from '../actions/actionTypes';

const initialState = {
  // uid: [],
  // accessToken: [],
  // client: [],
  email:[],
  user:{},
  logIn:false,
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
 
    case types.SIGN_IN:
    console.log('user:action.payload',action.payload);
      return {
        ...state,
        // uid: action.payload.headers.uid,
        // client: action.payload.headers.client,
        // accessToken: action.payload.headers['access-token'],
        user:action.payload,
        // email:action.payload.data.data.email,
        logIn:true,
      };

    case types.SIGN_OUT:
      return {
        ...state,
        // uid: '',
        // client: '',
        // accessToken: '',
        email: '',
        logIn:false,
      };

    default: return state;
  }
}