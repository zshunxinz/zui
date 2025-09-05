<template>
  <Select
    v-model="value12"
    type="primary"
    :options="[
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3', disabled: true },
    ]"
    placeholder="使用 options 属性"
  />
</template>

<script setup>
import { ref } from "vue";
const value12 = ref("");
</script>