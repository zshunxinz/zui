<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value" active-value="开启" inactive-value="关闭" />
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("开启");
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
