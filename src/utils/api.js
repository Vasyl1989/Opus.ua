import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://opus-ua-backend-dev.herokuapp.com/api/v1'
});

export function sendRequest(method, url, data, params) {
    return instance({
        method: method,
        url: url,
        data: data || {},
        params: params || {},
    });
}



