<template>
  <Card :skeleton="loading" padding="0px">
    <div v-if="!loading">
      这是异步加载的数据内容。
    </div>
  </Card>
  <Button @click="toggleLoading" text style="margin-top: 16px;">
    {{ loading ? '显示内容' : '显示骨架屏' }}
  </Button>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(true);
const toggleLoading = () => {
  loading.value = !loading.value;
};
</script>