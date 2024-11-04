import Fetchion from 'fetchion';

const config = {
    baseURL: 'http://127.0.0.1:8000', // 基础 API URL
    headers: {
        'Content-Type': 'application/json', // 默认 Content-Type
    },
    timeout: 5000, // 超时时间（以毫秒为单位）
};

const api = new Fetchion(config);

function checkStorage() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');

    if (token && userId) {
        sessionStorage.clear();
        return {token, userId};
    }

    const sessionToken = sessionStorage.getItem('token');
    const sessionUserId = sessionStorage.getItem('user_id');
    if (sessionToken && sessionUserId) {
        localStorage.clear();
        return {token: sessionToken, userId: sessionUserId};
    }

    // 都不存在，则清除并返回空对象
    sessionStorage.clear();
    localStorage.clear();
    return {};
}

api.interceptors.request.use((config) => {
    const {token, userId} = checkStorage();

    if (token && userId) {
        config.headers['Amos-Cloud-Token'] = token;
        config.headers['Amos-Cloud-Id'] = userId;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});


export default api;