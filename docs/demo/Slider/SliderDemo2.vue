<template>
  <div class="slider-demo">
    <p>范围设置 (0-200)</p>
    <Slider v-model="value" :min="0" :max="200" />
    <p class="slider-value">当前值: {{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Slider } from '../../../src/components/Slider';

const value = ref(100);
</script>

<style scoped>
.slider-demo {
  padding: 20px;
}

.slider-value {
  margin-top: 10px;
  color: var(--color-text-2);
}
</style>