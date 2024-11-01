// src/store/index.js
import {createStore} from 'vuex';

const store = createStore({
    state: {
        selectedMenu: '最近使用' // 默认选中项
    },
    mutations: {
        setSelectedMenu(state, menu) {
            state.selectedMenu = menu; // 更新选中项
        }
    },
    actions: {
        selectMenu({commit}, menu) {
            commit('setSelectedMenu', menu); // 提交 mutation
        }
    },
    getters: {
        getSelectedMenu: (state) => state.selectedMenu // 获取选中项
    }
});

export default store;