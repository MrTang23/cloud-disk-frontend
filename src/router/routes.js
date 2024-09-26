// routes.js
// 该文件用来书写并导出路由结构

export default [
    {
        path: "/index",
        redirect: "/",
    },
    {
        path: "/",
        name: "home",
        component: () => import("../FileManage.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../user/Login.vue"),
    },
];
