<template>
  <div class="slider-demo">
    <div class="slider-item">
      <p>小号尺寸</p>
      <Slider v-model="smallValue" size="small" />
      <p class="slider-value">当前值: {{ smallValue }}</p>
    </div>
    
    <div class="slider-item">
      <p>中号尺寸 (默认)</p>
      <Slider v-model="mediumValue" size="medium" />
      <p class="slider-value">当前值: {{ mediumValue }}</p>
    </div>
    
    <div class="slider-item">
      <p>大号尺寸</p>
      <Slider v-model="largeValue" size="large" />
      <p class="slider-value">当前值: {{ largeValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Slider } from '../../../src/components/Slider';

const smallValue = ref(30);
const mediumValue = ref(50);
const largeValue = ref(70);
</script>

<style scoped>
.slider-demo {
  padding: 20px;
}

.slider-item {
  margin-bottom: 30px;
}

.slider-value {
  margin-top: 10px;
  color: var(--color-text-2);
}
</style>