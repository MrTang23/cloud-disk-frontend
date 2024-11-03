<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useStore} from 'vuex';
import {computed, onMounted, ref} from "vue";

const store = useStore();
const fadeIn = ref(true)
const menuItems = [
    {label: '最近使用', icon: 'clock'},
    {label: '浏览', icon: 'folder-closed'},
    {label: '已共享', icon: 'share-from-square'},
    {label: '最近删除', icon: 'trash-can'},
];

const selectedIndex = computed(() => menuItems.findIndex(item => item.label === store.state.selectedMenu.label)); // 从 Vuex 获取选中项

onMounted(() => {
    fadeIn.value = true;
})

const selectItem = (index) => {
    store.dispatch('selectMenu', menuItems[index]);
}

const toggleLeftBar = () => {
    fadeIn.value = !fadeIn.value;
}
</script>

<template>
    <div class="icon-box slider-icon" @click="toggleLeftBar">
        <FontAwesomeIcon :icon="['fas', 'sliders']"/>
    </div>
    <div class="left-bar" :class="{'fade-in': fadeIn, 'fade-out': !fadeIn}">
        <div class="menu">
            <div
                v-for="(item, index) in menuItems"
                :key="index"
                :class="['menu-item', { active: selectedIndex === index }]"
                @click="selectItem(index)"
            >
                <FontAwesomeIcon :icon="['far', item.icon]" class="menu-icon"/>
                <span>{{ item.label }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu {
    display: flex;
    flex-direction: column;
}

.menu-item {
    font-size: 15px;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    white-space: nowrap;
}

.menu-item:hover {
    background: #e6e6eb;
}

.menu-item:active {
    outline: 2px solid rgb(0, 113, 235);
    outline-offset: -2px;
}

.menu-item.active {
    background: #e6e6eb;
}

.menu-icon {
    margin: 0 8px 0 10px;
    color: hsl(210, 100%, 45%);
}

.left-bar {
    width: 250px;
    box-sizing: border-box;
    padding: 53px 9px 0 10px;
    background: #FBFBFD;
    border-right: 1px solid #0000001E;
    display: flex;
    flex-direction: column;
    transition: transform 0.8s ease, opacity 0.8s ease;
    overflow: hidden;
}

.slider-icon {
    position: fixed;
    z-index: 9999;
    margin: 5px 0 0 10px;
}

.icon-box {
    display: flex;
    width: auto;
    padding: 7px;
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


.fade-in {
    animation: slideIn 0.5s ease forwards; /* 显示动画 */
}

.fade-out {
    animation: slideOut 0.5s ease forwards; /* 隐藏动画 */
}

@media (prefers-color-scheme: dark) {
    .left-bar {
        background: #202023;
        border-right: 1px solid #000;
    }

    .icon-box {
        color: hsl(204, 100%, 50%);
    }

    .icon-box:hover {
        background: rgba(118, 118, 128, 0.3);
    }

    .icon-box:active {
        background: rgba(118, 118, 128, 0.3);
    }

    .menu-icon {
        color: hsl(204, 100%, 50%);
    }

    .menu-item:hover {
        background: #343437;
    }

    .menu-item.active {
        background: #343437;
    }
}

@keyframes slideIn {
    from {
        width: 0;
        opacity: 0;
    }
    to {
        width: 250px;
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        width: 250px;
        opacity: 1;
    }
    to {
        width: 0;
        opacity: 0;
    }
}

@media (max-width: 667px) {
    .left-bar{
        display: none;
    }
}
</style>