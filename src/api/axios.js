//axios.js

import axios from "axios";

const service = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 6000,
    headers: {"X-Requested-With": "XMLHttpRequest"},
});

// 请求拦截
service.interceptors.request.use(
    function (config) {
        // 发送请求之前执行的代码

        return config;
    },
    function (error) {
        // 请求发送失败后执行的代码
        alert(error);
        return Promise.reject(error);
    }
);

// 响应拦截
service.interceptors.response.use(
    function (response) {
        // 状态码在 2xx 内范围触发
        return response;
    },
    function (error) {
        // 状态码超出 2xx 触发，如400，403等
        // 此处写响应失败的代码

        return Promise.reject(error);
    }
);
export default service;