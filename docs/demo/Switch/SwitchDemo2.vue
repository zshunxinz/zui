<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value" active-text="开启" inactive-text="关闭" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(true);
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
