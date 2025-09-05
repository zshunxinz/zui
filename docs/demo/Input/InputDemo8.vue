<template>
  <div class="input-group">
    <Input v-model="value1" label="用户名" placeholder="请输入用户名" />
    <Input v-model="value2" label="邮箱" type="email" placeholder="请输入邮箱" :error="true" />
    <Input v-model="value3" label="密码" type="password" placeholder="请输入密码" clearable />
    <Input v-model="value4" label="搜索" type="search" placeholder="请输入搜索内容" clearable />
    <Input v-model="value5" label="手机号" type="tel" placeholder="请输入手机号" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
</script>