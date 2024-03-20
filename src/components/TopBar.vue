<template>
    <div class="top-main">
        <div class="title">
            <img
                src="../assets/image/logo_transparent.png"
                alt="logo"
                class="title-logo"
                @click="clickTitle"
            /><div class="title-basic" @click="clickTitle">Amos Cloud</div>
        </div>
        <div class="right">username</div>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const clickTitle = () => {
    router.push("/");
};
</script>
<style scoped>
.top-main {
    height: 45px;
    margin: 15px;
    line-height: 45px;
    display: flex;
    flex-direction: row;
    color: white;
}
.title {
    font-size: 32px;
    font-weight: 800;
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.title-basic {
    cursor: pointer;
    padding-left: 15px;
}
.title-logo{
    cursor: pointer;
    height: 26px;
}
.right {
    flex: 1;
    text-align: right;
}
</style>