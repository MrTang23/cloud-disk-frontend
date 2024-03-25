<template>
    <div class="footer-main">
        <div class="links">
            <div class="placeholder"></div>
            <div class="link-button" @click="aboutUs">About Me</div>
            <div class="placeholder"></div>
        </div>
        <div class="copyright">
            Copyright © 2024 Amos Tang.All rights reserved.
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const aboutUs = () => {
    alert("About Me");
};

onMounted(() => {
    setInterval(() => {});
});
</script>
<style scoped>
.footer-main {
    letter-spacing: 1px;
    margin: 0 20px 20px 20px;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    flex-direction: column;
    color: white;
    mix-blend-mode: difference;
}
.links {
    flex: 1;
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-bottom: 5px;
}
.copyright {
    flex: 1;
    text-align: center;
    mix-blend-mode: difference;
}
.placeholder {
    flex: 1;
}
.link-button {
    padding: 10px;
    transition: all 0.5s;
    border-radius: 10px;
}
.link-button:hover {
    background-color: white;
    cursor: pointer;
    color: black;
    letter-spacing: 3px;
}
</style>