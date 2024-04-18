<template>
    <div class="top-main">
        <div class="title">
            <img
                src="../assets/image/logo_transparent.png"
                alt="logo"
                class="title-logo"
                @click="clickTitle"
            />
            <div class="title-basic" @click="clickTitle">Amos Cloud</div>
        </div>
        <div class="right"></div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const clickTitle = () => {
    router.push("/");
};
onMounted(() => {
    if (localStorage.getItem("username") !== null) {
        username.value = localStorage.getItem("username");
    } else {
        username.value = "";
    }
});
</script>
<style scoped>
.top-main {
    height: 45px;
    margin: 20px;
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
    padding-left: 20px;
    letter-spacing: 2px;
}
.title-logo {
    cursor: pointer;
    height: 26px;
}
.right {
    flex: 1;
    text-align: right;
    font-size: 20px;
}
</style>