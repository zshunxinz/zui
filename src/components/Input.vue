<template>
    <div class="form-input">
      <label v-if="label">{{ label }}</label>
      <input v-bind="$attrs" v-model="modelValue" />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    label: String,
    modelValue: String
  })
  const emit = defineEmits(['update:modelValue'])
  </script>
  
  <style scoped>
  .form-input input {
    padding: 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
  }
  </style>