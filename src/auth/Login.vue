<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import api from "../fetchion/config.js";
import {onMounted, ref, watch} from "vue";
import router from "../router/index.js";
import Footer from "./components/Footer.vue";

const showUserNotExitInfo = ref(false);
const showLoginErrorInfo = ref(false);
const showPasswordInput = ref(false)
const password = ref('')
const identifier = ref('')
const identifierType = ref('')
const ifKeepLoginStatus = ref(false)
const loginErrorInfo = ref('')

onMounted(() => {
    checkAuthFields()
})
const checkAuthFields = () => {
    const hasLocalAuth = localStorage.getItem('token') && localStorage.getItem('user_id');
    const hasSessionAuth = sessionStorage.getItem('token') && sessionStorage.getItem('user_id');

    if (hasLocalAuth || hasSessionAuth) {
        // TODO: 请求信息是否有效
        router.push('/');
    }
}
const checkUserExist = async () => {
    const identifierValue = identifier.value;
    if (identifierValue) {
        const url = `/query/find_user?identifier=${encodeURIComponent(identifierValue)}`;
        return await api.get(url)
            .then(response => {
                showUserNotExitInfo.value = false;
                identifierType.value = response.data.data
                document.getElementById('identifier-input').style.borderRadius = '12px 12px 0 0'
                showPasswordInput.value = true;

                // 请求成功后添加监听器
                watch(identifier, () => {
                    showPasswordInput.value = false;
                    showLoginErrorInfo.value = false;
                    document.getElementById('identifier-input').style.borderRadius = '12px'
                });

            })
            .catch(() => {
                showUserNotExitInfo.value = true;
            });
    }
}

const setStorage = (storage, data) => {
    const {email, uuid: user_id, token, username} = data;
    storage.setItem('email', email);
    storage.setItem('user_id', user_id);
    storage.setItem('token', token);
    storage.setItem('username', username);
};

const login = () => {

    const payload = {
        identifier_type: identifierType.value,
        identifier: identifier.value,
        password: password.value
    };
    console.log(payload)
    api.post('/auth/login', payload)
        .then(response => {
            showLoginErrorInfo.value = false;
            const storage = ifKeepLoginStatus.value ? localStorage : sessionStorage;
            setStorage(storage, response.data);
            router.push('/');
        })
        .catch(error => {
            loginErrorInfo.value = error.message || "登录时发生错误";
            showLoginErrorInfo.value = true;
        });
};
</script>

<template>
    <header class="header">
        <div class="title">Amos Cloud</div>
    </header>
    <main class="login-main">
        <div class="login-box">
            <div class="login-align">
                <img src="../assets/logo.png" alt="Amos Cloud logo" class="login-logo">
                <div class="login-title">通过 Amos ID 登陆</div>
            </div>

            <div class="login-form">
                <!-- 标识符输入 -->
                <input class="login-form-top login-input" type="text" placeholder=" " v-model="identifier"
                       id="identifier-input"/>
                <span class="login-placeholder">电子邮件或用户名</span>
                <FontAwesomeIcon :icon="['far', 'circle-right']" class="input-icon" @click="checkUserExist"
                                 v-if="!showPasswordInput"/>

                <!-- 密码输入 -->
                <div class="login-password-main" v-if="showPasswordInput">
                    <input class="login-form-password login-input" type="password" placeholder=" "
                           v-model="password"/>
                    <span class="login-placeholder">密码</span>
                    <FontAwesomeIcon :icon="['far', 'circle-right']" class="input-icon" @click="login"/>
                </div>

                <!-- 提示信息 -->
                <div class="login-user-not-exist" v-if="showUserNotExitInfo">
                    抱歉，未找到该用户名或邮箱。<br>请确保输入正确，或选择注册一个新账户。
                </div>
                <div class="login-error" v-if="showLoginErrorInfo">
                    {{ loginErrorInfo }}
                </div>

            </div>
            <div class="login-align">
                <div class="keep-login">
                    <input type="checkbox" name="login_status" v-model="ifKeepLoginStatus" class="check-box">保持我的登录状态
                </div>
                <div class="login-bottom-button">忘记了密码？</div>
                <div class="login-bottom-button">创建 Amos Cloud 账户</div>
            </div>
        </div>
    </main>
    <footer>
        <Footer></Footer>
    </footer>
</template>

<style scoped>
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
    box-shadow: 0 11px 34px 0 rgba(120, 120, 128, 0.16);
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
    text-align: center;
}

.login-form {
    height: 112px;
    margin-top: 44px;
    display: flex;
    flex-direction: column;
}

.login-form-top {
    border-radius: 12px;
    border: 1px solid #86868b;
}

.login-form-password {
    border: 1px solid #86868b;
    letter-spacing: 2px;
    border-top: none;
    border-radius: 0 0 12px 12px;
}

.login-password-main {
    margin-top: 17px;
    display: flex;
    flex-direction: column;
}

.login-input {
    background: transparent;
    z-index: 99;
    font-size: 17px;
    color: #1d1d1d;
    display: flex;
    flex-direction: column;
    height: 54px;
    padding-top: 20px;
    padding-left: 20px;
    box-sizing: border-box;
}

.login-input:focus {
    outline: none;
    border: 2px solid #0071e3;
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

.login-user-not-exist {
    margin-top: 20px;
    color: #FF3B30;
    font-size: 14px;
}

.login-error {
    transform: translate(0, 15px);
    color: #FF3B30;
    font-size: 14px;
    font-weight: 700;
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

.keep-login {
    color: #494949;
    margin-top: 62px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 隐藏原始复选框 */
.check-box {
    appearance: none; /* 移除默认样式 */
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border: 1px solid #6e6e73; /* 边框颜色 */
    border-radius: 2px;
    background-color: #ffffffa8; /* 未选中状态背景颜色 */
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* 选中时的背景颜色和边框颜色 */
.check-box:checked {
    background-color: rgb(0, 113, 235); /* 选中时的背景颜色 */
    border-color: rgb(0, 113, 235);
}

/* 选中时显示标记 */
.check-box:checked::before {
    font-size: 12px;
    content: '✓'; /* 选中标记 */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-bottom-button {
    color: #0066CC;
    font-size: 14px;
    padding-bottom: 9px;
}

/* 小屏幕 (手机横屏, ≥ 576px) */
@media (max-width: 768px) {
    .login-box {
        box-shadow: none !important;
        margin-top: 0;
        padding: 40px 40px 0 40px;
    }

    .header {
        background: rgba(251, 251, 253, .5);
    }

    @media (prefers-color-scheme: dark) {
        .header {
            backdrop-filter: blur(10px);
            background: rgba(28, 28, 30, .5);
            border-bottom: 1px solid rgba(28, 28, 30, .5);
        }
    }
}

@media (prefers-color-scheme: dark) {
    .keep-login {
        color: #ffffff;
    }

    .login-box {
        box-shadow: 0 11px 34px 0 rgba(0, 0, 0, 0.65);
    }

    .login-bottom-button {
        color: #2997ff;
    }

    .login-input {
        color: #fff;
        background: hsla(0, 0%, 100%, .04);
    }

    .login-input:not(:placeholder-shown) ~ .input-icon {
        cursor: pointer;
        color: #ffffffa8; /* 输入内容后颜色 */
    }

    .check-box {
        background: hsla(0, 0%, 100%, .04);
    }
}
</style>