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
import "https://at.alicdn.com/t/c/font_4475184_ovh54jdhgj.js"
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url("https://ts1.cn.mm.bing.net/th/id/R-C.c43197c3232a473e7123019f1c0e83ad?rik=dP1L%2f9d2HZE1EA&riu=http%3a%2f%2fbbsfiles.vivo.com.cn%2fvivobbs%2fattachment%2fforum%2f201601%2f06%2f113404b4pmivt51dddntgg.jpg&ehk=RDePoIFnpYdbM5QGBVO%2bUN1La1wr4FASlacGX%2btVbjw%3d&risl=&pid=ImgRaw&r=0");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: black;
    overflow: hidden;
}
.body {
    flex: 1;
    margin: 0 20px 7px 20px;
    display: flex;
    max-height: calc(100vh - 169px);
}
</style>