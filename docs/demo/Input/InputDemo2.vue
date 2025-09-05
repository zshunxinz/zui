<template>
  <div class="input-group">
    <Input v-model="text" placeholder="请输入文本内容" />
    <Input v-model="password" type="password" placeholder="请输入密码" />
    <Input v-model="number" type="number" placeholder="请输入数字" />
    <Input v-model="email" type="email" placeholder="请输入邮箱" />
    <Input v-model="phone" type="tel" placeholder="请输入手机号" />
    <Input v-model="website" type="url" placeholder="请输入网址" />
    <Input v-model="search" type="search" placeholder="请输入搜索内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
const password = ref('')
const number = ref('')
const email = ref('')
const phone = ref('')
const website = ref('')
const search = ref('')
</script>