<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch
        v-model="value1"
        type="primary"
        :loading="switchLoading"
        @change="handleLoad"
      />
      <Switch v-model="value2" loading />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
const switchLoading = ref(false);

const handleLoad = () => {
  if (value1.value == true) {
    switchLoading.value = true;
    setTimeout(() => {
      switchLoading.value = false;
    }, 1000);
  }
};
</script>

<style scoped>
.switch-demo {
  padding: 20px 0;
}
.demo-switch {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
}
</style>
