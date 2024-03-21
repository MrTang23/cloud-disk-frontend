<template>
    <div class="main">
        <TopBar></TopBar>
        <div class="body">
            <MainBody></MainBody>
        </div>
        <FooterBar></FooterBar>
    </div>
</template>
<script setup>
import TopBar from "./components/TopBar.vue";
import MainBody from "./components/MainBody.vue";
import FooterBar from "./components/FooterBar.vue";
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url("./assets/image/background.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: black;
}
.body {
    flex: 1;
    margin: 0 20px 20px 20px;
    display: flex;
}
</style>