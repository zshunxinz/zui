<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checked1" label="禁用选项" disabled></Checkbox>
      <Checkbox v-model="checked2" label="已选中的禁用选项" disabled></Checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(true);
</script>

<style scoped>
.checkbox-demo {
  padding: 20px 0;
}
.checkbox-type-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
