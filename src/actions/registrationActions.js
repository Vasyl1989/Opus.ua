import * as types from './actionTypes';
import * as api from '../utils/api';
import { browserHistory } from 'react-router';

export function signUp(user) {
  return dispatch => {
    api.signUp(user)
      .then(() => {
          console.log("SignUp success");
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
          browserHistory.push("/login");   
      }).catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });
  };
}

export function singIn(email, password) {
  return dispatch => {
    api.signIn(email, password)
      .then((response) => {
          localStorage.setItem('userData', JSON.stringify(response.data.data));
          localStorage.setItem('id',response.data.data.id);
          dispatch({ type: types.SIGN_IN, payload: response.data.data });
          dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
          console.log(response.data.data);        
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
