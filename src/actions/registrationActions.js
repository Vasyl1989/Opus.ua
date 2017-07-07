import * as types from './actionTypes';
import { sendRequest } from '../utils/api';

export function signUp(user) {
  const data = { user };
  return dispatch => {
    sendRequest("post", "/auth/sign_up", data, null)
      .then((response) => {
        if (response && response.status === 200 || response.status === 201) {
          console.log('data send on server success');
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
        }
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });
  };
}

export function signIn(email, password) {
  const data = { email, password };
  return dispatch => {
    sendRequest("post", "/auth/sign_in", data, null)
      .then((response) => {
        if (response && response.status === 200 || response.status === 201) {
          console.log(response.data);
          console.log(response.headers);
          console.log("*****", response.headers.client, "*****", response.headers.uid);
          console.log(response.token_type);
          console.log('data send on server success');
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS, payload: response });
        }
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });
  };
}