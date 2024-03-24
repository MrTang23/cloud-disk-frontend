<template>
    <div class="main">
        <div class="tool-bar glass-container"></div>
        <div class="file-list glass-container">
            <div class="file-list-row" v-for="count in fileList.length" :key="count">
            <div style="color: #c2c2c2; margin-right: 20px">{{ count }}</div>
            <img
                src="../assets/image/fileManageIcon/GenericFolderIcon.png"
                alt=""
                height="40px"
                style="margin-right: 20px"
            />
            <div style="width: 200px">{{ fileList[count - 1].name }}</div>
            <div style="margin-right: 20px">{{ fileList[count - 1].type }}</div>
            <div style="width: 100px">{{ fileList[count - 1].size }}</div>
            <div>
                {{ fileList[count - 1].last_modified }}
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import service from "../api/axios.js";

const fileList = ref([]);

const getFileList = () => {
    service
        .get("/get_filelist?current_path=" + "/")
        .then(function (response) {
            fileList.value = response.data.data;         
        })
        .catch(function (error) {});
    
};

onMounted(() => {
    getFileList()
});
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.tool-bar {
    height: 60px;
    border-radius: 20px;
    margin-bottom: 20px;
}
.file-list {
    flex: 1;
    border-radius: 20px;
    max-height: calc(100vh - 242px);
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
}
/* 整个滚动条 */
.file-list::-webkit-scrollbar {
    width: 5px;
}
/* 滚动条里面滑块 */
.file-list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: white;
    cursor: pointer;
    margin: 20px 5px 20px 5px;
}
/*滚动条里面轨道*/
.file-list::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
    background: transparent;
}
.file-list-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    line-height: 40px;
}
.glass-container {
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(100px);
    background-color: rgba(60, 60, 60, 0.4);
    transform: translateZ(0);
}
</style>