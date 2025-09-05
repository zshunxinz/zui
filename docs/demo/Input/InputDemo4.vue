<template>
  <div class="input-group">
    <Input v-model="value" placeholder="禁用状态" disabled />
    <Input v-model="password" type="password" placeholder="密码禁用" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
const password = ref('')
</script>