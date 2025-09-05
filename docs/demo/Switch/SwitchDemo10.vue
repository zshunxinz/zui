<template>
  <div class="demo-switch">
    <Switch v-model="value1" active-color="#123465" inactive-color="#495057" />
    <Switch
      v-model="value2"
      active-color="#4ecdc4"
      inactive-color="#868e96"
      style="margin-left: 20px"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
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
