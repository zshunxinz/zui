<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value1" shape="round" />
      <Switch v-model="value2" shape="square" />
      <Switch v-model="value3" shape="square" size="small" />
      <Switch v-model="value4" shape="square" size="large" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
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
