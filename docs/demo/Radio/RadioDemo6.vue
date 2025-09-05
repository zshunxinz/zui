<template>
  <div class="radio-type-demo">
    <Radio v-model="typeValue" :options="typeOptions" type="default" />
    <Radio v-model="typeValue" :options="typeOptions" type="primary" />
    <Radio v-model="typeValue" :options="typeOptions" type="success" />
    <Radio v-model="typeValue" :options="typeOptions" type="warning" />
    <Radio v-model="typeValue" :options="typeOptions" type="danger" />
    <Radio v-model="typeValue" :options="typeOptions" type="info" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Radio from '../../../src/components/Radio/Radio.vue'

const typeValue = ref('1')
const typeOptions = [
  { label: '主要选项', value: '1' },
  { label: '次要选项', value: '2' }
]
</script>

<style scoped>
.radio-type-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>