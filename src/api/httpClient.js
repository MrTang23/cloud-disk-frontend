// httpClient.js
class HttpClient {
    constructor(baseURL, timeout = 5000) {
        this.baseURL = baseURL;
        this.timeout = timeout;
    }

    async get(url, options = {}) {
        return this.request(url, {...options, method: 'GET'});
    }

    async post(url, data, options = {}) {
        return this.request(url, {...options, method: 'POST', body: JSON.stringify(data)});
    }

    async request(url, options) {
        const controller = new AbortController();
        const signal = controller.signal;

        const timeoutId = setTimeout(() => {
            controller.abort();
        }, this.timeout);

        const response = await fetch(`${this.baseURL}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || 'Request failed');
        }

        return response.json();
    }
}

// 默认配置
const httpClient = new HttpClient('http://127.0.0.1:8000', 10000);

// 导出方法
export const GET = (url, options) => httpClient.get(url, options);
export const POST = (url, data, options) => httpClient.post(url, data, options);
