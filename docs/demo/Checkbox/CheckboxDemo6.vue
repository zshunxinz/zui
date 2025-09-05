<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checked1" label="HTML" border></Checkbox>
      <Checkbox v-model="checked2" label="CSS" border></Checkbox>
      <Checkbox v-model="checked3" label="JavaScript" border></Checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
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
