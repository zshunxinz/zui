<template>
  <div class="slider-demo">
    <p>禁用状态</p>
    <Slider v-model="value" disabled />
    <p class="slider-value">当前值: {{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Slider } from '../../../src/components/Slider';

const value = ref(50);
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