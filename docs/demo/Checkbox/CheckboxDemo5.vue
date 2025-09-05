<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <CheckboxGroup v-model="checkedList" size="small">
        <CheckboxButton label="备选项1" color="primary"></CheckboxButton>
        <CheckboxButton label="备选项2" color="success"></CheckboxButton>
        <CheckboxButton label="备选项3" color="warning"></CheckboxButton>
        <CheckboxButton label="备选项4" color="danger"></CheckboxButton>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CheckboxGroup from '../../../src/components/Checkbox/CheckboxGroup.vue';
import CheckboxButton from '../../../src/components/Checkbox/CheckboxButton.vue';

const checkedList = ref(['备选项1', '备选项3']);
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