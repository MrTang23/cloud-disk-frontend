// routes.js
// 该文件用来书写并导出路由结构

export default [
    {
        path: "/index",
        name: "index",
        redirect: "/",
    },
    {
        path: "/",
        name: "home",
        component: () => import("../fileManage/Index.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../auth/Login.vue"),

    },
    {
        path: "/privacy-policy",
        name: "privacy-policy",
        component: () => import("../auth/PrivacyPolicy.vue"),
    },
    {
        path: "/terms-and-conditions",
        name: "terms-and-conditions",
        component: () => import("../auth/Terms.vue"),
    },
];
