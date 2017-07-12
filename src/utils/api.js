import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://opus-ua-backend-dev.herokuapp.com/api/v1'
});

function getHeaders() {
    return JSON.parse(localStorage.getItem('access-tokens'));
}

export function sendRequest(method, url, data, params) {
    return instance({
        method: method,
        url: url,
        data: data || {},
        params: params || {},
        headers: getHeaders()
    }).then(response => {
        if (response && (response.status === 200 || response.status === 201 || response.status===304)) {
            const accessTokens = {
                'access-token': response.headers['access-token'],
                'client': response.headers.client,
                'uid': response.headers.uid
            };
            if(accessTokens!==null){localStorage.setItem('access-tokens', JSON.stringify(accessTokens));}
            return response;
        } else {
            throw new Error(`wrong response code: ${response.status} (expedted 200 or 201).`);
        }
    });
}

export function signUp(user) {
    const data = { user };
    return sendRequest("post", "/auth/sign_up", data, null);
}

export function signOut() {
    return sendRequest("delete", "/auth/sign_out", null, null);
}

export function signIn(email, password) {
    const data = { email, password };
    return sendRequest("post", "/auth/sign_in", data, null);
}