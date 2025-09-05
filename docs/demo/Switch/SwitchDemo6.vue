<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value1" type="primary" />
      <Switch v-model="value2" type="success" />
      <Switch v-model="value3" type="warning" />
      <Switch v-model="value4" type="danger" />
      <Switch v-model="value5" type="info" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(true);
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
