import * as types from './actionTypes';
import * as api from '../utils/api';
import { sendRequest } from '../utils/api';
import { browserHistory } from 'react-router';

export function signUp(user) {
  const { first_name, last_name, email, password } = user;
  return dispatch => {
    // dispatch(types.SIGN_UP_START)
    api.signUp(first_name, last_name, email, password).then(() => {
      console.log("SignUp success");
      dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
      browserHistory.push("/login");
    }).catch((error) => {
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
          localStorage.setItem('userData', JSON.stringify(response.data.data));
          dispatch({ type: types.SIGN_IN, payload: response.data.data });
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
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
    }).catch(function (error) {
      console.log(error);
    });
  };
}