// routes.js
//该文件用来书写并导出路由结构

export default [
	{
		path: "/index",
		redirect: "/",
	},
	{
		path: "/index",
		name: "index",
		children: [
			{
				path: "/login",
				name: "login",
				component: () => import("../user/Login.vue"),
			},
			{
				path: "/file-manage-main",
				name: "file-manage-main",
				component: () => import("../cloud/FileManageMain.vue"),
				children: [
					{
						path: "/",
						name: "file-manage",
						component: () => import("../cloud/FileManage.vue"),
					},
				],
			},
		],
	},
];
