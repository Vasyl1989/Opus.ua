import * as types from './actionTypes';
import * as api from '../utils/api';
import { sendRequest } from '../utils/api';
import { browserHistory } from 'react-router';

export function signUp(user) {
  const data = user;
  return dispatch => {
    // dispatch(types.SIGN_UP_START)
    api.signUp(data).then(() => {
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
      localStorage.removeItem('userId');
    }).catch(function (error) {
      console.log(error);
    });
  };
}

export function getUserVacancies() {
  const userId = localStorage.getItem('userId');
  console.log(userId);
  return dispatch => {
    sendRequest('get', `/vacancies?user_id=${userId}`, null, null)
      .then(response => dispatch({ type: types.GET_USER_VACANCIES, payload: response.data }))
      .catch((error) => console.log(error));
  };
}