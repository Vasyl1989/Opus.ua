import * as types from './actionTypes';
import { sendRequest } from '../utils/api';

export function signUp(user) {
  const data = { user };
  return dispath => {
    sendRequest("post", "/auth/sign_up", data, null)
      .then(response => {
        if (response && response.status === 200 || response.status === 201) {
          console.log("SignUp success");
          dispath({ type: types.SIGN_UP, payload: response });
        }
      }).catch((error) => console.error(error));
  };
}