class Interceptor {
    constructor() {
        this.handlers = [];
    }

    use(onFulfilled, onRejected) {
        this.handlers.push({onFulfilled, onRejected});
    }

    async runInterceptors(data) {
        let result = data;

        // 遍历拦截器
        for (const handler of this.handlers) {
            // 检查 onFulfilled 是否为函数
            if (typeof handler.onFulfilled === 'function') {
                console.log("调用前的数据:", result);
                try {
                    result = await handler.onFulfilled(result); // 调用成功处理函数
                    console.log("调用后的数据:", result); // 查看是否已被修改
                } catch (error) {
                    // 检查 onRejected 是否为函数
                    if (typeof handler.onRejected === 'function') {
                        result = await handler.onRejected(error); // 调用错误处理函数
                    } else {
                        // 如果没有错误处理函数，则抛出错误
                        throw error;
                    }
                }
            } else {
                console.warn('拦截器链中存在非函数项，已跳过该项:', handler);
            }
        }
        return result;
    }
}

export default Interceptor;