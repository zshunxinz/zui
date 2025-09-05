<template>
  <div class="textarea-group">
    <Textarea v-model="value" size="large" label="大尺寸文本域" placeholder="请输入内容" />
    <Textarea v-model="value" disabled label="禁用文本域" placeholder="此文本域已禁用" />
    <Textarea v-model="limitValue" maxlength="50" show-word-limit label="带字数限制" placeholder="最多输入50个字符" />
    <Textarea v-model="autosizeValue" :autosize="{ minRows: 2, maxRows: 4 }" label="自动调整高度" placeholder="最小2行，最大4行" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const limitValue = ref('')
const autosizeValue = ref('')
</script>