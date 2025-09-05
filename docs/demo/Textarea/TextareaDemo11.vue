<template>
  <div class="textarea-group">
    <Textarea
      v-model="debouncedValue"
      :debounce="1000"
      placeholder="1000ms防抖输入"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const debouncedValue = ref('')
</script>