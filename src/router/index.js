import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
	// hash：createWebHashHistory()，url上带#号，不需要后端配置
	// history：createWebHistory()，url上不带#号，需要后端配置
	history: createWebHashHistory(),
	routes,
});

export default router;

// 路由导航守卫在这里写