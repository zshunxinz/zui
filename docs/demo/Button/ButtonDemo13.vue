<template>
  <Button @click="loadingHandleClick" :loading="isLoading">
    外部控制加载
    <template #loadData> 加载中 </template>
  </Button>
</template>
<script setup>
import { ref } from "vue";

const isLoading = ref(false);
const loadingHandleClick = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
