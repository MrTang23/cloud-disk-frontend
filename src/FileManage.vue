<script setup>
import Header from "./components/Header.vue";
import LeftBar from "./components/LeftBar.vue";
import MainBody from "./components/MainBody.vue";

</script>

<template>
    <Header></Header>
    <div class="body">
        <LeftBar></LeftBar>
        <MainBody></MainBody>
    </div>
</template>

<style scoped>
.body {
    display: flex;
    flex-direction: row;
    flex: 1;
}
</style>
