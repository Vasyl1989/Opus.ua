import * as types from './actionTypes';
import * as api from '../utils/api';
import { browserHistory } from 'react-router';

export function signUp(user) {
  const data = { user };
  return dispatch => {
    api.sendRequest("post", "/auth/sign_up", data, null)
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
    api.sendRequest("post", "/auth/sign_in", data, null)
      .then(response => {
        if (response && response.status === 200 || response.status === 201) {
          localStorage.setItem('userData', JSON.stringify(response.data.data));
          localStorage.setItem('id',response.data.data.id);
          dispatch({ type: types.SIGN_IN, payload: response.data.data });
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
          console.log(response.data.data);
        }
      }).catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });
  };
}

export function getUser() {
  return dispatch => {
    dispatch({ type: types.GET_USER });
  };
}

export function signOut() {
  return dispatch => {
    api.signOut().then(() => {
      dispatch({ type: types.SIGN_OUT });
      localStorage.removeItem('access-tokens');
      localStorage.removeItem('userData');
      localStorage.removeItem('id');
    }).catch(function (error) {
      console.log(error);
    });
  };
}

