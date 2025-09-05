<template>
  <div class="input-group">
    <Input v-model="value" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>