import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://opus-ua-backend-dev.herokuapp.com/api/v1'
});

function getHeaders() {
    console
    return {
        'access-token': localStorage.getItem('token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
    };
}
console.log(getHeaders());
export function sendRequest(method, url, data, params) {
    return instance({
        method: method,
        url: url,
        data: data || {},
        params: params || {},
        headers: getHeaders()
    });
}



