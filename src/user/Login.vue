<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
    <div class="main">
        <div class="header">
            <div class="title">Amos Cloud</div>
        </div>
        <div class="login-main">
            <div class="login-box">
                <div class="login-align">
                    <img src="../assets/logo.png" alt="Amos Cloud logo" class="login-logo">
                    <div class="login-title">通过 Amos ID 登陆</div>
                </div>

                <div class="login-form">
                    <input class="login-form-top login-input" type="text" placeholder=" "/>
                    <span class="login-placeholder">电子邮件或用户名</span>
                    <FontAwesomeIcon :icon="['far', 'circle-right']" class="input-icon"/>
                </div>
            </div>
        </div>
        <div class="footer footer-text">
            123
        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    background: #FBFBFD;
    flex: 1;
}

.header {
    display: flex;
    height: 44px;
    padding-left: 10px;
    align-items: center;
}

.title {
    line-height: 1.5;
    font-size: 20px;
    font-weight: 700;
}

.login-main {
    display: flex;
    background: transparent;
    flex: 1;
    justify-content: center;
}

.login-box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 640px;
    height: 610px;
    margin-top: 44px;
    padding: 40px 80px 0 80px;
    box-shadow: 0 11px 34px 0 rgba(0, 0, 0, .2);
    border-radius: 34px;
}

.login-align {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-logo {
    width: 160px;
    height: 160px;
}

.login-title {
    font-size: 31px;
    font-weight: 900;
    margin-top: 20px;
    line-height: 1;
}

.login-form {
    margin-top: 44px;
    display: flex;
    flex-direction: column;
}

.login-form-top {
    border-radius: 12px;
}

.login-input {
    background: transparent;
    z-index: 99;
    font-size: 17px;
    color: #1d1d1d;
    border: 1px solid #86868b;
    display: flex;
    flex-direction: column;
    height: 54px;
    padding-top: 20px;
    padding-left: 20px;
    box-sizing: border-box;
}

.login-placeholder {
    font-size: 17px;
    color: #6e6e73;
    height: 20px;
    transition: all 0.2s ease; /* 平滑过渡 */
    transform: translateY(0); /* 初始位置 */
    margin-top: -38px; /* 向上预留空间 */
    margin-left: 20px;
}

.input-icon {
    width: 26px;
    height: 26px;
    margin-top: -21px;
    margin-left: auto;
    margin-right: 12px;
    transition: all 0.2s ease;
    transform: translateY(0);
    font-family: 'Font Awesome 5 Free', sans-serif; /* 确保 Font Awesome 已加载 */
    font-weight: 900; /* 使用 Font Awesome 的粗体 */
    font-size: 24px; /* 设置图标大小 */
    color: #86868b;
}

/* 获得焦点后样式 */
.login-input:focus + .login-placeholder,
.login-input:not(:placeholder-shown) + .login-placeholder {
    transform: translateY(-10px);
    font-size: 12px;
}

.login-input:focus ~ .input-icon,
.login-input:not(:placeholder-shown) ~ .input-icon {
    transform: translateY(9px);
    z-index: 99;
}

/* 仅在输入内容时改变图标颜色 */
.login-input:not(:placeholder-shown) ~ .input-icon {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.88); /* 输入内容后颜色 */
}

.footer {
    background: #F2F2F7;
    padding: 30px 0 30px 0;
}

.footer-text {
    font-size: 11px;
    color: rgba(0, 0, 0, .56);
    line-height: 2;
}
</style>