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
          console.log("SignIp success");

          sessionStorage.setItem('client', response.headers.client);
          sessionStorage.setItem('access-token', response.headers['access-token']);
          sessionStorage.setItem('uid', response.headers.uid);

          dispatch({ type: types.SIGN_IN, payload: response });
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
          // browserHistory.push("/"); 
          console.log(response);
        }
      }).catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });

  };
}

export function signOut() {
  return dispatch => {
    
    sendRequest("delete", "/auth/sign_out", null, null)
      .then(response => {
         
        if (response && response.status === 200 || response.status === 201) {
           sessionStorage.removeItem('client');
           sessionStorage.removeItem("access-token");
           sessionStorage.removeItem('uid');  
          dispatch({ type: types.SIGN_OUT });
          browserHistory.push("/"); 
        }
      }).catch(function (error) {
        console.log(error);
      });
  };
}