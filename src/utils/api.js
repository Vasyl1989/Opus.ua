import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://opus-ua-backend-dev.herokuapp.com/api/v1'
});

const uid = sessionStorage.getItem('uid');
const client = sessionStorage.getItem('client');
const token = sessionStorage.getItem('access-token');

// const headers = {
//     'Authenticate': 'Bearer ' + token, client, uid
// };
const headers = {
    "uid": uid,
    "client": client,
    "access-token": token,
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



