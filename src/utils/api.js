import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://opus-ua-backend-dev.herokuapp.com/api/v1'
});

function getHeaders() {
    return JSON.parse(localStorage.getItem('access-tokens'));
}

function sendRequest(method, url, data, params) {
    return instance({
        method: method,
        url: url,
        data: data || {},
        params: params || {},
    }).then(response => {
        if (response && (response.status === 200 || response.status === 201)) {
            return response;
        } else {
            throw new Error(`wrong response code: ${response.status} (expedted 200 or 201).`);
        }
    });
}

function sendAuthRequest(method, url, data, params) {
    return instance({
        method: method,
        url: url,
        data: data || {},
        params: params || {},
        headers: getHeaders()
    }).then(response => {
        if (response && (response.status === 200 || response.status === 201 || response.status === 304)) {
            const token = response.headers['access-token'];
            if (token) {
                const accessTokens = {
                    'access-token': response.headers['access-token'],
                    'client': response.headers.client,
                    'uid': response.headers.uid
                };
                localStorage.setItem('access-tokens', JSON.stringify(accessTokens));
            }
            return response;
        } else {
            throw new Error(`wrong response code: ${response.status} (expedted 200 or 201).`);
        }
    });
}

export function signOut() {
    return sendAuthRequest('delete', '/auth/sign_out', null, null);
}

export function deleteVacancy(id) {
    return sendAuthRequest('delete', `/vacancies/${id}`, null, null);
}

export function editVacancy(vacancy) {
    const data = { vacancy };
    return sendAuthRequest('put', `/vacancies/${vacancy.id}`, data, null);
}

export function signIn(email, password) {
    const data = { email, password };
    return sendAuthRequest('post', '/auth/sign_in', data, null);
}

export function sendVacancy(vacancy) {
    const data = { vacancy };
    return sendAuthRequest('post', '/vacancies', data, null);
}

export function getAllVacancy() {
    return sendRequest('get', '/vacancies', null, null);
}

export function signUp(user) {
    const data = { user };
    return sendRequest('post', '/auth/sign_up', data, null);
}

export function searchVacancy(query) {
    return sendRequest('get', '/vacancies', null, query);
}

export function pagination(page, per) {
    const query = { page, per };
    return sendRequest('get', '/vacancies', null, query);
}

export function agreeToVacancy(formData) {
    return sendRequest('post', '/users_vacancies', formData, null);
}

export function getVacancyById(id) {
    return sendRequest('get', `/vacancies/${id}`, null, null);
}

export function getAllUserVacancy(id) {
    return sendRequest('get', `/vacancies?user_id=${id}`, null);
}