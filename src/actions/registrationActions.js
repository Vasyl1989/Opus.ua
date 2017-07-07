import * as types from './actionTypes';
import { sendRequest } from '../utils/api';

export function sendRegistration(user) {
 // debugger;
 return dispatch => {
  const data = { user };
  sendRequest('post', '/auth/sign_up', data)
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