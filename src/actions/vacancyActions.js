import * as types from './actionTypes';
import * as consts from '../constants/const';
import * as _ from 'lodash';
import {sendRequest, getRequest, deleteRequest} from '../utils/api';

export function getVacancyById(id, vacancies) {
  return dispatch => {
    const vacancy = _.find(vacancies, {id: Number(id)});
    if (vacancy) {
      dispatch({type: types.GET_VACANCY_BY_ID, payload: vacancy});
      return;
    }
    getRequest('get', `${consts.PATH}/${id}`)
      .then(response => dispatch({type: types.GET_VACANCY_BY_ID, payload: response.data}))
      .catch((error) => console.log(error));

  };
}

export function getAllVacancy() {
  return dispatch => {
    getRequest('get', consts.PATH)
      .then(response => dispatch({type: types.GET_ALL_VACANCIES, payload: response.data}))
      .catch((error) => console.log(error));

  };
}
export function sendVacancy(vacancy) {
  return dispatch => {
    const data = { vacancy };

    sendRequest('post', consts.PATH, data)
      .then((response) => {
          if (response && response.status === 200 ||response.status === 201) {
            console.log('data send on server success');
          }
        })
        .catch(function (error) {
            console.log(error);
        });
  };
}

export function deleteVacancy(id, vacancies){
  return dispatch => {
    deleteRequest('delete', `${consts.PATH}/${id}`)
      .then(response => {
        const rest = _.filter(vacancies, vacancy => vacancy.id !== id);
        dispatch({type: types.DELETE_VACANCY, payload: rest});
      })
      .catch((error) => console.log(error));
  };
}
