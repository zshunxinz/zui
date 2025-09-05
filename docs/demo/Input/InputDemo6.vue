<template>
  <div class="input-group">
    <Input
      v-model="debounceValue"
      placeholder="请输入内容"
      :debounce="1000"
      @debounce-input="handleDebounceInput"
    />
    <p>防抖后的值: {{ debouncedValue }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const debounceValue = ref("");
const debouncedValue = ref("");

const handleDebounceInput = (val) => {
  debouncedValue.value = val;
};
</script>