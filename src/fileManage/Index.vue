<script setup>
import Header from "./components/Header.vue";
import LeftBar from "./components/LeftBar.vue";
import MainBody from "./components/MainBody.vue";
import {onMounted} from "vue";
import router from "../router/index.js";

onMounted(() => {
    checkAuthFields()
})

const checkAuthFields = () => {
    const hasLocalAuth = localStorage.getItem('token') && localStorage.getItem('user_id');
    const hasSessionAuth = sessionStorage.getItem('token') && sessionStorage.getItem('user_id');

    if (hasLocalAuth || hasSessionAuth) {
        // TODO: 请求用户信息
    } else {
        router.push('/login');
    }
}
</script>

<template>
    <header>
        <Header></Header>
    </header>
    <main class="body">
        <LeftBar></LeftBar>
        <MainBody></MainBody>
    </main>
</template>

<style scoped>
.body {
    display: flex;
    flex-direction: row;
    flex: 1;
}
</style>
