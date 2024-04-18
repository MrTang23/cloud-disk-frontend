<template>
    <div class="main">
        <div class="tool-bar glass-container">
            <div class="tool-bar-folder" @click="jumpToPath('/')">/</div>
            <div
                v-for="folder in toolbarFolderArray.length"
                :key="folder"
                style="display: flex; flex-direction: row;overflow-x: auto"
            >
                <div style="line-height: 30px; color: #2e95d3; font-size: 12px">
                    >
                </div>
                <div
                    class="tool-bar-folder"
                    @click="
                        jumpToPath(toolbarFolderArray[folder - 1].folderPath)
                    "
                >
                    {{ toolbarFolderArray[folder - 1].folderName }}
                </div>
            </div>
            <div
                class="tool-bar-folder"
                style="margin-right: 20px; font-weight: 200;margin-left: auto;"
            >
                新建文件夹
            </div>
            <!--            <div-->
            <!--                class="tool-bar-folder"-->
            <!--                style="margin-right: 20px; font-weight: 200;margin-left: auto;"-->
            <!--                @click="-->
            <!--                    jumpToPath(-->
            <!--                        toolbarFolderArray.length - 2 >= 2-->
            <!--                            ? toolbarFolderArray[toolbarFolderArray.length - 2]-->
            <!--                                  .folderPath-->
            <!--                            : '/'-->
            <!--                    )-->
            <!--                "-->
            <!--            >-->
            <!--                返回上一级-->
            <!--            </div>-->
            <div class="tool-bar-folder" @click="jumpToPath('/recycle')">
                <svg aria-hidden="true" class="icon-recycle">
                    <use xlink:href="#amos-delete"></use>
                </svg
                >回收站
            </div>
        </div>
        <div class="file-list glass-container">
            <table class="table">
                <thead style="position: sticky; top: 0; z-index: 1">
                <tr class="table-header">
                    <!-- <th scope="col" style="width: 30px">
                        <label for="chooseFile">
                            <input
                                type="checkbox"
                                name="chooseFile"
                                id="chooseFile"
                        /></label>
                    </th> -->
                    <th scope="col" style="width: 50%">文件名</th>
                    <th scope="col" style="width: 150px"></th>
                    <th scope="col" style="width: 150px">大小</th>
                    <th scope="col" style="width: 200px">修改时间</th>
                </tr>
                </thead>
                <tbody>
                <tr style="height: 20px"></tr>
                <tr
                    v-for="count in fileList.length"
                    :key="count"
                    class="table-body"
                >
                    <!-- <td scope="row"></td> -->
                    <td
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
                                    margin-left: 10px;
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
                            {{ fileList[count - 1]["name"] }}
                        </div>
                    </td>
                    <td>
                        <div class="icon-list">
                            <svg
                                aria-hidden="true"
                                class="icon-list-single"
                            >
                                <use xlink:href="#amos-icon-test"></use>
                            </svg>
                            <svg
                                aria-hidden="true"
                                class="icon-list-single"
                                @click="
                                        downloadFile(fileList[count - 1].name)
                                    "
                            >
                                <use xlink:href="#amos-icon-test1"></use>
                            </svg>
                            <svg
                                aria-hidden="true"
                                class="icon-list-single"
                                @click="
                                        deleteFile(fileList[count - 1].name)
                                    "
                            >
                                <use xlink:href="#amos-delete"></use>
                            </svg>
                            <svg
                                aria-hidden="true"
                                class="icon-list-single"
                            >
                                <use xlink:href="#amos-rename"></use>
                            </svg>
                        </div>
                    </td>
                    <td>{{ fileList[count - 1]["size"] }}</td>
                    <td>
                        {{ fileList[count - 1]["last_modified"] }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import service from "../api/axios.js";

// 文件下载是axios不能封装，否则blob无效
// 因此直接引入axios，仅用于下载文件。其他接口依然使用service(封装后的axios)
import axios from 'axios'

// 引入图标按钮
import iconMap from "../assets/iconMap.js";

const fileList = ref([]); //页面文件列表
const toolbarFolderArray = ref([]); //toolbar的路径数组
const currentPath = ref(""); //当前路径

//点击toolbar跳转路径
const jumpToPath = (toPath) => {
    let path;
    toPath === "/" ? (path = "/") : (path = toPath + "/");
    sessionStorage.setItem("current_path", path);
    currentPath.value = path;
    getFileList(path);
    toolbarFolderArray.value = convertToFolderArray(path);
    console.log(toolbarFolderArray.value);
};

const downloadFile = (fileName) => {
    axios({
            method: "GET",
            url: "http://127.0.0.1:8000/download?current_path=" + currentPath.value + "&file_name=/" + fileName,
            responseType: 'blob',
            headers: {
                "amos-cloud-token": localStorage.getItem("token"),
                "amos-cloud-user": localStorage.getItem("md5_username")
            }
        }
    )
        .then(function (response) {
            try {
                const file = new File([response.data], fileName, {
                    type: response.headers["content-type"] + ";charset=UTF-8",
                });
                const tempLink = document.createElement("a");
                tempLink.href = URL.createObjectURL(file);
                console.log(file)
                tempLink.download = fileName;
                document.body.appendChild(tempLink);
                console.log(tempLink)
                tempLink.click();
                document.body.removeChild(tempLink);
                URL.revokeObjectURL(tempLink.href);
            } catch (e) {
                alert("下载的文件出错 " + e);
            }
        })
        .catch(function (error) {
            console.log(error)
        });
};

const deleteFile = (fileName) => {
    service
        .delete("/delete", {
            data: {
                current_path: currentPath.value,
                file_name: "/" + fileName,
            },
        })
        .then(function (response) {
            getFileList(currentPath.value);
            alert(response.data.message);
        })
        .catch(function (error) {
            console.log(error)
        });
};

// 点击页面文件夹进入
const enterFolder = (fileName, fileType) => {
    if (fileType === "文件夹") {
        sessionStorage.setItem(
            "current_path",
            currentPath.value + fileName + "/"
        );
        currentPath.value = sessionStorage.getItem("current_path");
        getFileList(currentPath.value);
        toolbarFolderArray.value = convertToFolderArray(currentPath.value);
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
            // 遍历获取到的文件列表
            for (let i = 0; i < fileListBefore.length; i++) {
                // 判断是否为回收站目录，是则去除
                if (
                    current_path === "/" &&
                    fileListBefore[i].name === "recycle"
                ) {
                    fileListBefore.splice(i, 1);
                }
                // 根据文件后缀查找 iconMap 对应的图标
                if (fileListBefore[i].type === "文件夹") {
                    fileListBefore[i]["icon"] = iconMap["folder"]
                } else {
                    // 使用split()方法将文件名拆分成数组
                    let parts = fileListBefore[i].name.split('.');
                    // 获取数组的最后一个元素，即文件后缀名
                    let fileExtension = parts[parts.length - 1];
                    console.log(fileExtension);
                    fileListBefore[i]["icon"] = iconMap[fileExtension]
                }
            }
            fileList.value = fileListBefore;
        })
        .catch(function (error) {
            console.log(error)
        });
};

onMounted(() => {
    if (sessionStorage.current_path == null) {
        sessionStorage.setItem("current_path", "/");
    }
    currentPath.value = sessionStorage.getItem("current_path");
    toolbarFolderArray.value = convertToFolderArray(currentPath.value);
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    letter-spacing: 1px;
    table-layout: fixed;
    border-collapse: collapse;
}

.table-header {
    text-align: left;
    font-size: 12px;
    color: #c2c2c2;
}

.table-body {
    font-size: 14px;
    height: 50px;
    fill: transparent;
}

.table-body:hover {
    fill: white;
    background-color: #ffffff30;
}

.file-name {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    background-color: rgba(51, 51, 51, 0.4);
    transform: translateZ(0);
}

.icon-list {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    white-space: nowrap;
}

.icon-list-single {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    text-align: center;
    transition: background-color 0.5s;
    cursor: pointer;
    border-radius: 50%;
    padding: 7px;
}

.icon-list-single:hover {
    background-color: #df3079;
}

.icon-recycle {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    fill: white;
    margin-right: 5px;
}
</style>