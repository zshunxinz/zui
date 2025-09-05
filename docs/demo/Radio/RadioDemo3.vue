<template>
  <div class="radio-demo">
    <Radio v-model="selectedValue" :options="radioOptions" shape="button" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Radio from '../../../src/components/Radio/Radio.vue'

const selectedValue = ref('option1')
const radioOptions = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' }
]
</script>

<style scoped>
.radio-demo {
  padding: 20px 0;
}
</style>