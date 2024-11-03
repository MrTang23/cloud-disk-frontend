import Fetchion from './core/Fetchion.js';
import router from "../router/index.js";

const config = {
    baseURL: 'http://127.0.0.1:8000', // 基础 API URL
    headers: {
        'Content-Type': 'application/json', // 默认 Content-Type
    },
    timeout: 5000, // 超时时间（以毫秒为单位）
};

const api = new Fetchion(config);

function hasUserIdAndToken() {
    const localUserId = localStorage.getItem('user_id');
    const localToken = localStorage.getItem('token');
    const sessionUserId = sessionStorage.getItem('user_id');
    const sessionToken = sessionStorage.getItem('token');

    // 检查 localStorage 或 sessionStorage 中是否同时存在 user_id 和 token
    const isLocalValid = localUserId && localToken;
    const isSessionValid = sessionUserId && sessionToken;

    return Boolean(isLocalValid || isSessionValid);
}


// api.interceptors.request.use((config) => {
//     console.log('拦截器正在处理请求:', config);
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });
//
// api.interceptors.response.use((response) => {
//     console.log('响应拦截器处理完毕:', response);
//     return response;
// }, (error) => {
//     return Promise.reject(error);
// });


export default api;