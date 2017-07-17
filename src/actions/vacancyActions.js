import * as _ from 'lodash';
import * as api from '../utils/api';
import * as types from './actionTypes';
import { filtration } from './filterActions';
import { browserHistory } from 'react-router';
import * as consts from '../constants/constants';

export function getVacancyById(id, vacancies, forUpdate) {
  return dispatch => {
    if (forUpdate) {
      dispatch({ type: types.SHOULD_UPDATE });
    }
    const vacancy = _.find(vacancies, { id: Number(id) });
    if (vacancy) {
      dispatch({ type: types.GET_VACANCY_BY_ID, payload: vacancy });
      if (forUpdate) {
        browserHistory.push('/add_vacancy');
        return;
      } else {
        browserHistory.push(`/vacancy_detail/${id}`);
        return;
      }
    }
    api.getVacancyById(id)
      .then((response) => {
        dispatch({ type: types.GET_VACANCY_BY_ID, payload: response.data });
        if (forUpdate) {
          browserHistory.push('/add_vacancy');
        } else {
          browserHistory.push(`/vacancy_detail/${id}`);
        }
      })
      .catch((error) => console.error(error));
  };
}

export function getAllVacancy() {
  return dispatch => {
    api.getAllVacancy().then((response) => dispatch({
      type: types.GET_ALL_VACANCIES, payload: response.data
    })).catch((error) => console.log(error));
  };
}

export function getAllUserVacancy() {
  const id = localStorage.getItem('id');
  return dispatch => {
    api.getAllUserVacancy(id).then((response) => dispatch({
      type: types.GET_ALL_USER_VACANCIES, payload: response.data
    })).catch((error) => console.log(error));
  };
}

export function sendVacancy(vacancy) {
  return dispatch => {
    api.sendVacancy(vacancy).then(() => {
      console.log('data send on server success');
      dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
    }).catch(function (error) {
      console.log(error);
      dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
    });
  };
}

export function deleteVacancy(id, vacancies) {
  return dispatch => {
    api.deleteVacancy(id).then(() => {
      const rest = vacancies.filter(vacancy => vacancy.id !== id);
      dispatch({ type: types.DELETE_VACANCY, payload: rest });
    }).catch((error) => console.log(error));
  };
}

export function editVacancy(vacancy) {
  return dispatch => {
    api.editVacancy(vacancy)
      .then(() => {
        const rest = _.map(vacancy => vacancy.id === vacancy.id);
        dispatch({ type: types.EDIT_VACANCY, payload: rest });
        dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });
  };
}

export function searchVacancy(query, fromPage, parametr, id) {
  console.log("query", query);
  return dispatch => {
    api.searchVacancy(query)
      .then((response) => {
        console.log('response', response.data);
        dispatch({ type: types.SEARCH, payload: response.data });

        if (fromPage !== consts.PAGES.BROWSE_VACANCY) {
          if (id) {
            if (id === 1) {
              browserHistory.push("/browse_vacancy/" + "Автоперевезення");
            } else if (id === 2) {
              browserHistory.push("/browse_vacancy/" + "Будівництво");
            } else if (id === 3) {
              browserHistory.push("/browse_vacancy/" + "Виробництво");
            } else if (id === 4) {
              browserHistory.push("/browse_vacancy/" + "IТ");
            } else if (id === 5) {
              browserHistory.push("/browse_vacancy/" + "Краса та здоровя");
            } else if (id === 6) {
              browserHistory.push("/browse_vacancy/" + "Медицина");
            } else if (id === 7) {
              browserHistory.push("/browse_vacancy/" + "Навчання та репетиторство");
            } else if (id === 8) {
              browserHistory.push("/browse_vacancy/" + "Робочі спеціальності");
            } else if (id === 9) {
              browserHistory.push("/browse_vacancy/" + "Сільськогосподарські роботи");
            } else if (id === 10) {
              browserHistory.push("/browse_vacancy/" + "Сфера обслуговування");
            } else if (id === 11) {
              browserHistory.push("/browse_vacancy/" + "Телекомунікація");
            } else if (id === 12) {
              browserHistory.push("/browse_vacancy/" + "Управління персоналом");
            }
          } else {
            browserHistory.push("/browse_vacancy");
          }
        }
        if (parametr) {
          dispatch(filtration(parametr));
        }
      }).catch((error) => {
        console.log(error);
      });
  };
}


export function pagination(page, per) {
  return dispatch => {
    api.pagination(page, per)
      .then((response) => {
        dispatch({ type: types.PAGINATION, payload: response.data });
      }).catch((error) => {
        console.log(error);
      });
  };
}

export function agreeToVacancy(users_vacancy) {
  return dispatch => {
    const formData = new FormData();
    for (const k in users_vacancy) {
      formData.append(`users_vacancy[${k}]`, users_vacancy[k]);
    }
    api.agreeToVacancy(formData)
      .then(() => {
        console.log('data send on server success');
        dispatch({ type: types.SHOULD_OPEN_CLOSE.SUCCESS });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: types.SHOULD_OPEN_CLOSE.ERROR });
      });
  };
}