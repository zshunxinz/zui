<template>
  <div class="button-group">
    <Button :loading="isLoading" @click="handleClick">点击加载</Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isLoading = ref(false);
const handleClick = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
