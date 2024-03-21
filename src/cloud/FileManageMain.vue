<template>
    <router-view></router-view>
    <div class="left-bar glass-container">
    </div>
    <div class="right-bar">
        <div class="tool-bar glass-container"></div>
        <div class="file-list glass-container">
            <img src="../assets/image/fileManageIcon/GenericFolderIcon.png" alt="" height="100px" v-for="i in 500" :key="i">
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
import service from "../api/axios.js";
const router = useRouter();

// 判断登陆状态
const checkLoginStatus=()=>{
    let token = localStorage.getItem("token");
    let md5_username = localStorage.getItem("md5_username");
    if (token !== null && md5_username !== null) {
        service.defaults.headers.common["amos-cloud-token"] = token;
	    service.defaults.headers.common["amos-cloud-user"] = md5_username;
        service
            .get("/check_user_status")
            .then(function (response) {
                // 获取到的个人信息存储在localStorage中
                localStorage.setItem("username", response.data.data.username);
                localStorage.setItem("email", response.data.data.email);
                localStorage.setItem("uuid", response.data.data.uuid);
            })
            .catch(function (error) {
                localStorage.clear()
                router.push('/login')
            });
    } else {
        localStorage.clear()
        router.push('/login')
    }
}
onMounted(() => {
    checkLoginStatus()  
});
</script>
<style scoped>
.left-bar{
    width: 240px;
    border-radius: 20px;
    margin-right: 20px;
    padding: 20px;
}
.right-bar{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.tool-bar {
    height: 60px;
    border-radius: 20px;
    margin-bottom: 20px;
}
.file-list {
    flex: 1;
    border-radius: 20px;
    max-height: calc(100vh - 242px);
    overflow-x: hidden;
    overflow-y: auto;
}
/* 整个滚动条 */
.file-list::-webkit-scrollbar {
    width: 5px;
    
}
/* 滚动条里面滑块 */
.file-list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: white;
    cursor: pointer;
    margin: 20px 5px 20px 5px;
}
/*滚动条里面轨道*/
.file-list::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
    background: transparent;
}
.glass-container {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    background-color: rgba(60, 60, 60, 0.4);
    transform: translateZ(0);
}
</style>