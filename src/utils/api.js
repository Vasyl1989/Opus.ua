import axios  from 'axios';


var instance = axios.create({ 
     baseURL:'https://opus-ua-backend-dev.herokuapp.com/api/v1'
    });

    export function sendRequest(method, url, data) {
     
     return instance({
         method: method,
         url: url,
         data: data || {},
       
        });
    } 