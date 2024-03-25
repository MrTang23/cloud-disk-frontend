<template>
    <div class="main">
        <div class="tool-bar glass-container">
            <div class="tool-bar-folder" @click="jumpToPath('/')">
                    /
                </div>
            <div v-for="folder in toolbarFolderArray.length" :key="folder" style="display: flex;flex-direction: row;">
                <div style="line-height: 30px;color: #2E95D3;font-size: 12px;">></div>
                <div class="tool-bar-folder" @click="jumpToPath(toolbarFolderArray[folder - 1].folderPath)">
                    {{ toolbarFolderArray[folder - 1].folderName }}
                </div>
            </div>
        </div>
        <div class="file-list glass-container">
            <table class="table" frame="void">
                <thead>
                    <tr class="table-header">
                        <th scope="col">
                            <label for="chooseFile">
                                <input
                                    type="checkbox"
                                    name="chooseFile"
                                    id="chooseFile"
                            /></label>
                        </th>
                        <th scope="col">文件名</th>
                        <th scope="col">大小</th>
                        <th scope="col">修改时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="height: 20px"></tr>
                    <tr
                        v-for="count in fileList.length"
                        :key="count"
                        class="table-body"
                    >
                        <td scope="row"></td>
                        <td
                            scope="row"
                            style="
                                text-align: left;
                                display: flex;
                                flex-direction: row;
                            "
                            @click="
                                enterFolder(
                                    fileList[count - 1].name,
                                    fileList[count - 1].type
                                )
                            "
                        >
                            <div
                                style="
                                    height: 50px;
                                    transform: translate(0, 10px);
                                "
                            >
                                <img
                                    :src="fileList[count - 1].icon"
                                    alt=""
                                    height="30px"
                                />
                            </div>

                            <div class="file-name">
                                {{ fileList[count - 1].name }}
                            </div>
                        </td>
                        <td scope="row">{{ fileList[count - 1].size }}</td>
                        <td scope="row">
                            {{ fileList[count - 1].last_modified }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
// 引入图标按钮
import folderIcon from "../assets/image/fileManageIcon/folderIcon.png";
import documentIcon from "../assets/image/fileManageIcon/documentIcon.png";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import service from "../api/axios.js";

const fileList = ref([]); //页面文件列表
const toolbarFolderArray = ref([]); //toolbar的路径数组
const currentPath = ref(""); //当前路径

//点击toolbar跳转路径
const jumpToPath=(toPath)=>{
    sessionStorage.setItem('current_path',toPath)
    console.log(toPath)
    currentPath.value = toPath
    getFileList(toPath)
    toolbarFolderArray.value=convertToFolderArray(toPath)
}

// 点击页面文件夹进入
const enterFolder = (fileName, fileType) => {
    console.log(fileType);
    if (fileType == "文件夹") {
        sessionStorage.setItem(
            "current_path",
            currentPath.value + fileName + "/"
        );
        currentPath.value = sessionStorage.getItem("current_path");
        getFileList(currentPath.value);
        toolbarFolderArray.value=convertToFolderArray(currentPath.value)
    }
};

// 将当前路径转换为toolbar的路径数组
const convertToFolderArray = (pathString) => {
    const folders = pathString.split("/").filter((folder) => folder !== ""); // 分割路径字符串并过滤空文件夹名称
    let currentFolderPath = ""; // 记录当前路径
    const folderArray = [];

    for (let i = 0; i < folders.length; i++) {
        currentFolderPath += "/" + folders[i]; // 构建当前路径
        folderArray.push({
            folderName: folders[i],
            folderPath: currentFolderPath,
        });
    }
    return folderArray;
};

// 获取文件夹内文件列表
const getFileList = (current_path) => {
    service
        .get("/get_filelist?current_path=" + current_path)
        .then(function (response) {
            let fileListBefore = response.data.data;
            for (let i = 0; i < fileListBefore.length; i++) {
                fileListBefore[i].type == "文件夹"
                    ? (fileListBefore[i]["icon"] = folderIcon)
                    : (fileListBefore[i]["icon"] = documentIcon);
            }
            fileList.value = fileListBefore;
        })
        .catch(function (error) {});
};

onMounted(() => {
    currentPath.value = sessionStorage.getItem("current_path");
    toolbarFolderArray.value = convertToFolderArray(currentPath.value);
    console.log(toolbarFolderArray.value);
    getFileList(currentPath.value);
});
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.tool-bar {
    height: 30px;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 15px;
    line-height: 60px;
    display: flex;
    flex-direction: row;
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
.table {
    width: 100%;
    letter-spacing: 1.25px;
}
.table-header {
    text-align: left;
    font-size: 12px;
    color: #c2c2c2;
}
.table-body {
    font-size: 14px;
    height: 50px;
}
.file-name {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
}
.file-name:hover {
    color: #df3079;
}
.tool-bar-folder {
    line-height: 30px;
    font-size: 14px;
    padding: 0 5px 0 5px;
    border-radius: 7px;
    transition: all 0.5s;
    cursor: pointer;
}
.tool-bar-folder:hover {
    background-color: #df3079;
}
.glass-container {
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(100px);
    background-color: rgba(60, 60, 60, 0.4);
    transform: translateZ(0);
}
</style>