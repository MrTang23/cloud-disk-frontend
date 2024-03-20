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
				path: "/",
				name: "file-manage",
				component: () => import("../cloud/FileManage.vue"),
			}
		],
	},
];
