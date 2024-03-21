<template>
    <div class="tool-bar glass-container">
        
    </div>
    <div class="file-list glass-container">

    </div>
</template>
<script setup>
</script>
<style scoped>
.tool-bar{
    height: 60px;
    border-radius: 20px;
    margin-bottom: 20px;
}
.file-list{
    flex: 1;
    border-radius: 20px;
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