<template>
    <div class="main-body">
        <div class="left-bar glass-container"></div>
        <div class="right-bar"><router-view></router-view></div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.main-body {
    flex: 1;
    display: flex;
    flex-direction: row;
    color: white;
}
.left-bar {
    width: 250px;
    border-radius: 20px;
    padding: 20px;
    margin-right: 20px;
}
.right-bar {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.glass-container {
    /* justify-content: center;
    align-items: center; */
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    background-color: rgba(60, 60, 60, 0.4);
    transform: translateZ(0);
}
</style>