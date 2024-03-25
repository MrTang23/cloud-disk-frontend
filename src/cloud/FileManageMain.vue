<template>
    <div class="left-bar glass-container">
        <LeftBar></LeftBar>
    </div>
    <div class="right-bar">
        <router-view></router-view>
    </div>
</template>
<script setup>
import LeftBar from '../components/LeftBar.vue'
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
}
.glass-container {
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
    background-color: rgba(60, 60, 60, 0.4);
    transform: translateZ(0);
}
</style>