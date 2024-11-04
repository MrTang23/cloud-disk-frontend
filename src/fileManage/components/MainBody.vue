<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import {useStore} from 'vuex';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import api from "../../../fetchion.config.js";
import FileTable from "./FileTable.vue";

const store = useStore();
const selectedMenu = computed(() => store.getters.getSelectedMenu);
const fileList = ref([]);
onMounted(() => {
    if (selectedMenu.value.label === '浏览') {
        api.get('/query/file_list')
            .then(response => {
                fileList.value = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        fileList.value = [];
    }
})
</script>

<template>
    <main class="main">
        <div class="tool-bar">
            <div class="icon-box list-grid-icon">
                <FontAwesomeIcon :icon="['fas', 'list']"/>
                <FontAwesomeIcon :icon="['fas', 'arrows-up-down']" class="arrows-up-down"/>
            </div>
            <div class="icon-box tool-bar-center">
                <FontAwesomeIcon :icon="['fas', 'upload']"/>
            </div>
            <div class="icon-box">
                <FontAwesomeIcon :icon="['fas', 'folder-plus']"/>
            </div>

            <div class="tool-bar-right">
                <div class="icon-box">
                    <FontAwesomeIcon :icon="['fas', 'download']"/>
                </div>
                <div class="icon-box">
                    <FontAwesomeIcon :icon="['far', 'trash-can']"/>
                </div>
                <div class="icon-box">
                    <FontAwesomeIcon :icon="['fas', 'user-plus']"/>
                </div>
                <div class="icon-box">
                    <FontAwesomeIcon :icon="['far', 'envelope']"/>
                </div>
                <div class="icon-box">
                    <FontAwesomeIcon :icon="['fas', 'ellipsis']"/>
                </div>
            </div>
        </div>
        <div class="nav-bar">
            <div class="nav-bar-title">
                <FontAwesomeIcon :icon="['far', selectedMenu.icon]" class="menu-icon"/>
                {{ selectedMenu.label }}
            </div>
            <div class="nav-bar-text">
                4项内容
            </div>
        </div>
        <FileTable :fileList="fileList"></FileTable>
    </main>
</template>

<style scoped>
.nav-bar-text {
    color: #0000008f;
    font-size: 14px;
    padding-left: 9px;
    letter-spacing: 2px;
}

.menu-icon {
    color: rgba(0, 0, 0, 0.48);
    width: 30px;
    margin-right: 5px;
}

.nav-bar {
    height: 50px;
    padding: 5px 15px 5px 10px;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
}

.nav-bar-title {
    padding: 5px 9px 0 9px;
}

.main {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.tool-bar-right {
    margin-left: auto;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    gap: 7px;
}

.tool-bar-center {
    margin-left: auto;
}

.tool-bar {
    display: flex;
    flex-direction: row;
    height: 40px;
    align-items: center;
}

.arrows-up-down {
    margin-left: 8px;
}

.icon-box {
    height: 28px;
    display: flex;
    align-items: center;
    width: auto;
    padding: 0 7px 0 7px;
    border-radius: 7px;
    cursor: pointer;
    color: hsl(210, 100%, 45%);
    font-size: 17px;
}

.icon-box:hover {
    background: #e6e6eb;
}

.icon-box:active {
    background: #e6e6eb;
}

.list-grid-icon {
    margin-left: 10px;
}

@media (prefers-color-scheme: dark) {
    .icon-box {
        color: hsl(204, 100%, 50%);
    }

    .menu-icon {
        color: hsla(0, 0%, 100%, 0.5);
    }

    .icon-box:hover {
        background: rgba(118, 118, 128, 0.3);
    }

    .icon-box:active {
        background: rgba(118, 118, 128, 0.3);
    }

    .nav-bar-text {
        color: #ffffffa8;
    }
}
</style>