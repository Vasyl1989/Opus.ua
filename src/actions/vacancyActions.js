import * as types from './actionTypes';
import * as consts from '../constants/const';
import {sendRequest, getRequest, deleteRequest} from '../utils/api';
import axios from 'axios';

export function getAllVacancy(dispatch) {
    return dispatch => {

        getRequest('get', consts.PATH).then(response => {
            // console.log(response);
            
            dispatch({type: types.GET_ALL_VACANCIES, payload: response.data});
        }).catch((error) => {
            console.log(error);
        });

    };
}
export function sendVacancy(vacancy) {
    return dispatch => {

        vacancy = {
            "title": vacancy.title,
            "category": vacancy.category,
            "email": vacancy.email,
            "city": vacancy.city,
            "active_to_date": vacancy.active_to_date,
            "job_type": vacancy.job_type,
            "description": vacancy.description,
            "company": vacancy.company,
            "tags": vacancy.tags,
            "price_per_hour": vacancy.price_per_hour,
            "website": vacancy.website
        };

        const data = {
            vacancy: vacancy
        };

        sendRequest('post', consts.PATH, data).then((data) => {
            if (data && data.status === 200 ||data.status === 201) {
                console.log('data send on server success');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };
}
export function deleteVacancy(vacancy){
    // debugger;
   return dispatch=>{
       deleteRequest('DELETE',`/vacancies/${vacancy.id}`,vacancy)
       .then(()=>{
           console.log(`deleted ${vacancy.id}`)
           dispatch({type:types.DELETE_VACANCY,vacancy})
       }).catch((error) => {
            console.log(error);
        });
   }
}
