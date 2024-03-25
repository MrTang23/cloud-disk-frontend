<template>
    <div>
        <div class="avatar">
            <svg class="avatar-img" aria-hidden="true">
                <use xlink:href="#amos-icon-test3"></use>
            </svg>
        </div>
        <div class="user-info username">{{ username }}</div>
        <div class="user-info email-main">
            <svg class="email-icon" aria-hidden="true">
                <use xlink:href="#amos-icon-test2"></use>
            </svg>
            <div class="email">{{ email }}</div>
            <div class="email-status">未认证</div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const username = ref("");
const email = ref("");

onMounted(() => {
    username.value = localStorage.getItem("username");
    email.value = localStorage.getItem("email");
});
</script>
<style scoped>
.avatar-img {
    width: 100%;
    text-align: center;
    vertical-align: middle;
    height: 175px;
    fill: white;
}
.user-info {
    text-align: center;
    margin: 20px;
}
.username {
    font-size: 36px;
    font-weight: 800;
}
.email-main {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    margin: 0;
    height: 16px;
    line-height: 16px;
}
.email-icon {
    height: 16px;
    width: 16px;
    fill: #ffffff80;
}
.email {
    max-width: 200px;
    width: 200px;
    font-size: 14px; /* 初始字体大小 */
    white-space: nowrap; /* 防止文字换行 */
    overflow: hidden; /* 隐藏溢出部分 */
    text-overflow: ellipsis; /* 在溢出时显示省略号 */
}
.email-status {
    height: 16px;
    font-size: 8px;
    width: 35px;
    line-height: 16px;
    margin-left: auto;
    border-radius: 5px;
    background-color: #f22c3d;
    cursor: pointer;
    transition: all 0.5s;
}
.email-status:hover {
    background-color: rgb(255, 0, 0, 0.5);
}
</style>