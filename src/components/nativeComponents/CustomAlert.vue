// CustomAlert.vue

<template>
  <div v-if="visible" class="custom-alert">
    <div class="content">
      <slot></slot>
      <button @click="closeAlert">关闭</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false);

    const showAlert = () => {
      visible.value = true;
    };

    const closeAlert = () => {
      visible.value = false;
    };

    return {
      visible,
      showAlert,
      closeAlert
    };
  },
};
</script>

<style scoped>
.custom-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}

button {
  margin-top: 10px;
}
</style>
