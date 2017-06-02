
import * as types from './actionTypes';
import {sendRequest, getRequest} from '../utils/api';


export function createVacancy(vacances) {
 return { type:types.CREATE_VACANCY, vacances };
}
 export function getAllVacancies(){
        return dispatch=>{
            const path='/vacancies';
            getRequest('get',path)
            .then(response=>{
                dispatch({
                    type:types.GET_ALL_VACANCIES,
                    payload:response.data
                });
            })
            .catch((error)=>{
                console.log(error);
            });
        };
 }


const Actions={
    sendVacancy:(vacancy)=>{
        // debugger;

        return dispatch=>{
            vacancy={
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
  }

     const data={
         vacancy:vacancy
     };
     const path='/vacancies';
     sendRequest('post',path,data)
     .then((data)=>{
         if(data && data.status===200){
             console.log('success')
         }
     })
     .catch(function (error) {
      console.log(error);
      });



    }
}}

export {Actions};
