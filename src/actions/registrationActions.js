import * as types from './actionTypes';
import { sendRequest } from '../utils/api';
import { browserHistory } from 'react-router';

export function signUp(user) {
  const data = { user };
  return dispatch => {
    sendRequest("post", "/auth/sign_up", data, null)
      .then(response => {
        if (response && response.status === 200 || response.status === 201) {
          console.log("SignUp success");
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
          browserHistory.push("/login");
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
          localStorage.setItem('client', response.headers.client);
          localStorage.setItem('token', response.headers['access-token']);
          localStorage.setItem('uid', response.headers.uid);
          localStorage.setItem('id', response.data.data.id);
          localStorage.setItem('name', response.data.data.first_name);
          dispatch({ type: types.SIGN_IN, payload: response.data.data });
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
        }
      }).catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });
  };
}

// export function getUser() {
//   return dispatch => {
//     dispatch({ type: types.GET_USER });
//   };
// }

export function signOut() {
  return dispatch => {
    sendRequest("delete", "/auth/sign_out", null, null)
      .then(response => {
        if (response && response.status === 200 || response.status === 201) {
          // localStorage.removeItem('client');
          // localStorage.removeItem("token");
          // localStorage.removeItem('uid');
          dispatch({ type: types.SIGN_OUT });
        }
      }).catch(function (error) {
        console.log(error);
      });
  };
}