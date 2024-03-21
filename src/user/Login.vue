<template>
    <div class="main glass-container">
        <div class="login-title">登陆</div>
        <div class="login-box">
            <input type="text" class="input" placeholder="请输入用户名" />
            <input type="password" class="input" placeholder="请输入密码" />
        </div>
    </div>
</template>
<script setup></script>
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
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    background-color: rgba(60, 60, 60, 0.4);
    /* box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px; */
    transform: translateZ(0);
}


</style>