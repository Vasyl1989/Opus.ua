import * as types from './actionTypes';
import * as consts from '../constants/const';
import * as _ from 'lodash';
import { sendRequest } from '../utils/api';
import { browserHistory } from 'react-router';
import { filtration } from './filterAction';

export function getVacancyById(id, vacancies, forUpdate) {

  return dispatch => {
    if (forUpdate) {
      dispatch({ type: types.SHOULD_UPDATE });
    }

    const vacancy = _.find(vacancies, { id: Number(id) });
    if (vacancy) {
      dispatch({ type: types.GET_VACANCY_BY_ID, payload: vacancy });
      if (forUpdate) {
        browserHistory.push("/add_vacancy");
        return;
      } else {
        browserHistory.push(`/vacancy_detail/${id}`);
        return;
      }
    }

    sendRequest('get', `/vacancies/${id}`, null, null)
      .then(response => {
        dispatch({ type: types.GET_VACANCY_BY_ID, payload: response.data })
        if (forUpdate) {
          browserHistory.push("/add_vacancy");
        } else {
          browserHistory.push(`/vacancy_detail/${id}`)
        }
      })
      .catch((error) => console.error(error));
  };
}

export function getAllVacancy() {
  return dispatch => {
    sendRequest('get', '/vacancies', null, null)
      .then(response => dispatch({ type: types.GET_ALL_VACANCIES, payload: response.data }))
      .catch((error) => console.log(error));

  };
}

export function sendVacancy(vacancy) {
  return dispatch => {
    const data = { vacancy };

    sendRequest('post', consts.PATH, data)
      .then((response) => {
        if (response && response.status === 200 || response.status === 201) {
          console.log('data send on server success');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function sendVacancy2(users_vacancy) {
  return dispatch => {
    const formData = new FormData();
    for (const k in users_vacancy) {
      formData.append(`users_vacancy[${k}]`, users_vacancy[k]);
    }

    sendRequest('post', '/users_vacancies', formData)
      .then((response) => {
        if (response && response.status === 200 || response.status === 201) {
          console.log('data send on server success');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function deleteVacancy(id, vacancies) {

  return dispatch => {
    sendRequest('delete', `/vacancies/${id}`, null, null)
      .then(response => {
        const rest = vacancies.filter(vacancy => vacancy.id !== id);
        dispatch({ type: types.DELETE_VACANCY, payload: rest });
      })
      .catch((error) => console.log(error));
  };
}

export function editVacancy(vacancy, vacancies) {

  const data = { vacancy };
  return dispatch => {

    sendRequest('put', `/vacancies/${vacancy.id}`, data, null)
      .then(response => {
        const rest = _.map(vacancy => vacancy.id === vacancy.id);
        dispatch({ type: types.EDIT_VACANCY, payload: rest });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function searchVacancy(query, fromPage, parametr) {
  // debugger;
  return dispatch => {
    sendRequest('get', '/vacancies', null, query)
      .then(response => {
        parametr;
        console.log('parametr', parametr)
        dispatch({ type: types.SEARCH, payload: response.data });
        if (fromPage !== consts.PAGES.BROWSE_VACANCY) {
          browserHistory.push("/browse_vacancy");
        }
        dispatch(filtration(parametr))
      }).catch((error) => {
        console.log(error);
      });
  };
}

export function pagination(query) {
  return dispatch => {
    sendRequest('get', '/vacancies', null, query)
      .then(response => {
        dispatch({ type: types.PAGINATION, payload: response.data });
      }).catch((error) => {
        console.log(error);
      });
  };
}













