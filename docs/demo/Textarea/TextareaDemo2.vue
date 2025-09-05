<template>
  <div class="textarea-group">
    <Textarea v-model="value1" label="顶部标签" placeholder="请输入内容" />
    <Textarea v-model="value2" label="左侧标签" labelPosition="left" placeholder="请输入内容" />
    <Textarea v-model="value3" label="居中标签" labelPosition="center" placeholder="请输入内容" />
    <Textarea v-model="value4" label="右侧标签" labelPosition="right" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from "vue"


const value1 = ref("")
const value2 = ref("")
const value3 = ref("")
const value4 = ref("")
</script>