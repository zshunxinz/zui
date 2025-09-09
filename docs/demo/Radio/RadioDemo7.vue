<template>
  <div class="radio-demo">
    <Radio
      v-model="typeValue"
      :options="typeOptions"
      shape="tab-button"
      type="primary"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Radio from '../../../src/components/Radio/Radio.vue';

const typeValue = ref('1');
const typeOptions = [
  { label: '主要选项', value: '1' },
  { label: '次要选项', value: '2' },
  { label: '次要选项', value: '3' },
];
</script>

<style scoped>
.radio-demo {
  padding: 20px 0;
}
</style>
