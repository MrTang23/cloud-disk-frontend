<template>
    <div class="main glass-container">
        <div class="login-title">登陆</div>
        <div class="login-box">
            <input
                type="text"
                class="input"
                placeholder="请输入用户名"
                v-model="username"
            />
            <input
                type="password"
                class="input"
                placeholder="请输入密码"
                v-model="password"
            />
        </div>
        <div @click="login" class="login-button">Go</div>
    </div>
</template>
<script setup>
import md5 from "js-md5";
import { onMounted, ref } from "vue";
import service from "../api/axios.js";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
    service
        .post("/login", {
            // method=1时为账号密码登陆，2为邮箱以及验证码登陆
            method: "1",
            username: username.value,
            password: password.value,
        })
        .then(function (response) {
            // 获取到的个人信息存储在localStorage中
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem(
                "md5_username",
                md5(response.data.data.username)
            );
            localStorage.setItem("username", response.data.data.username);
            localStorage.setItem("email", response.data.data.email);
            localStorage.setItem("uuid", response.data.data.uuid);
            sessionStorage.setItem("current_path", "/");
            router.push("/");
        })
        .catch(function (error) {
            console.log(error);
        });
};
onMounted(() => {
    localStorage.clear();
});
</script>
<style scoped>
.main {
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    width: auto;
    padding: 30px;
    border-radius: 30px;
    border: 1px solid rgb(100, 100, 100);
}
.login-button {
    width: 100%;
    height: 35px;
    border-radius: 12px;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 35px;
    letter-spacing: 5px;
    cursor: pointer;
    transition: all 0.5s;
}
.login-button:hover {
    background-color: white;
    color: black;
    font-weight: 600;
    letter-spacing: 8px;
}
.login-button:focus {
    background-color: white;
    color: black;
    font-weight: 600;
    letter-spacing: 8px;
}
.login-button:active {
    background-color: white;
    color: black;
    font-weight: 600;
    letter-spacing: 8px;
}
.login-box {
    font-size: 20px;
    display: flex;
    flex-direction: column;
}
.input {
    width: 250px;
    height: 35px;
    border-radius: 12px;
    outline-style: none;
    border: none;
    text-indent: 5px;
    margin-bottom: 30px;
    color: black;
    font-size: 14px;
    justify-content: center;
    align-items: center;
}
.input::-webkit-input-placeholder {
    color: #c2c2c2;
    font-size: 12px;
}
.login-title {
    font-size: 35px;
    font-weight: 600;
    letter-spacing: 20px;
    margin-bottom: 40px;
}
.glass-container {
    /* justify-content: center;
    align-items: center; */
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
    background-color: rgba(60, 60, 60, 0.4);
    /* box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px; */
    transform: translateZ(0);
}
</style>