<template>
  <div class="radio-demo">
    <Radio v-model="selectedValue" :options="radioOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Radio from '../../../src/components/Radio/Radio.vue'

const selectedValue = ref('option1')
const radioOptions = [
  { label: 'HTML', value: 'option1' },
  { label: 'CSS', value: 'option2' },
  { label: 'JavaScript', value: 'option3' }
]
</script>

<style scoped>
.radio-demo {
  padding: 20px 0;
}
</style>