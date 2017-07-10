import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://opus-ua-backend-dev.herokuapp.com/api/v1'
});

const uid=localStorage.getItem('uid');
const client=localStorage.getItem('client');
const token=localStorage.getItem('token');


const headers={
    'Authenticate':'Bearer '+token,client,uid
};


export function sendRequest(method, url, data, params) {
    return instance({
        method: method,
        url: url,
        data: data || {},
        params: params || {},
        headers,
    });
}



