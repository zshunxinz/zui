<template>
  <div class="checkbox-demo">
    <div class="checkbox-group">
      <Checkbox v-model="checked1" label="HTML"></Checkbox>
      <Checkbox v-model="checked2" label="CSS"></Checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(false);
</script>

<style scoped>
.checkbox-demo {
  padding: 20px 0;
}
.checkbox-group {
  display: flex;
  gap: 30px;
  padding: 20px;
}
</style>
