import * as types from './actionTypes';
import { sendRequest } from '../utils/api';

export function signUp(user) {
  const data = { user };
  return dispatch => {
    sendRequest("post", "/auth/sign_up", data, null)
      .then(response => {
        if (response && response.status === 200 || response.status === 201) {
          console.log("SignUp success");
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
        }
      }).catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });
  };
}

export function singIn(email, password) {
  const data = { email, password };
  return dispatch => {
    sendRequest("post", "/auth/sign_in", data, null)
      .then(response => {
        if (response && response.status === 200 || response.status === 201) {
          console.log("SignIp success");
          dispatch({ type: types.SIGN_IN, payload: response });
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
          console.log('response', response.headers);
        }
      }).catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });

  };
}