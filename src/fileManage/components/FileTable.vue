<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {defineProps, ref} from 'vue';

const props = defineProps({
    fileList: {
        type: Array,
        default: () => [],
    },
});
const activeRowId = ref(null)
const selectRow = (item) => {
    activeRowId.value = item.id;
    console.log(item)
}

import {getFileTypeByLabel} from '../../assets/fileIcon.js';

</script>

<template>
    <table class="file-table-header">
        <thead>
        <tr>
            <th style="width: 50px"></th>
            <th>名称</th>
            <th>种类</th>
            <th>大小</th>
            <th>日期</th>
            <th>共享</th>
            <th style="width: 50px"></th>
        </tr>
        </thead>
    </table>
    <div class="file-table-content">
        <div @click="selectRow(item)" v-for="item in props.fileList" :key="item.name" class="file-row"
             :class="['file-row', { 'active-row': activeRowId === item.id }]">
            <div class="table-icon file-icon">
                <FontAwesomeIcon :icon="['fas', getFileTypeByLabel(item.type).icon]"
                                 :color="activeRowId === item.id ? '#fff' : getFileTypeByLabel(item.type).color"/>
            </div>
            <div class="file-name table-column">
                {{ item.name }}
            </div>
            <div class="table-column">{{ item.type }}</div>
            <div class="table-column">{{ item.size }}</div>
            <div class="table-column">{{ item.lastModifiedTime }}</div>
            <div class="table-column">--</div>
            <div class="table-icon">
                <div class="more-box" :class="{'more-box-normal-active': activeRowId === item.id}">
                    <FontAwesomeIcon :icon="['fas', 'ellipsis']"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.file-icon {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.more-box {
    width: 36px;
    height: 36px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: transparent;
}

.more-box:hover {
    cursor: pointer;
    background: #a5a5aa;
    color: white !important;
}

.file-table-header {
    margin: 5px 36px 0 18px;
    box-sizing: border-box;
    border-collapse: collapse;
    text-align: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.48);
    height: 44px;
    border-bottom: 1px solid #d1d1d6;
}

.file-table-content {
    margin: 2px 36px 0 18px;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.48);
    height: 44px;
    flex: 1;
}

.table-icon {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.file-name {
    font-size: 17px;
    color: #000000e0;
}

.file-row {
    display: flex;
    flex-direction: row;
    line-height: 41px;
    height: 41px;
}

.file-row:hover {
    background: #e6e6eb;
    border-radius: 10px;

    .more-box {
        color: gray;
    }
}

.file-row.active-row {
    background: hsl(210, 100%, 45%);
    border-radius: 10px;
}

.file-row.active-row:hover {
    background: hsl(210, 100%, 37%);

    .more-box {
        color: #fff;
    }
}

.table-column {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 10px;
}
</style>