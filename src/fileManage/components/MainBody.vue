<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();
const selectedMenu = computed(() => store.getters.getSelectedMenu);
</script>

<template>
    {{ selectedMenu }}
</template>

<style scoped>

</style>