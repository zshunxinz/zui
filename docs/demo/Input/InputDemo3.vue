<template>
  <div class="input-group">
    <Input v-model="value" placeholder="请输入内容" :error="true" />
    <Input v-model="value2" type="email" placeholder="请输入邮箱" :error="true" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
const value2 = ref("");
</script>