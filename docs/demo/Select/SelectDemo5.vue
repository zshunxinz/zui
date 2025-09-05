<template>
  <Select v-model="value9" placeholder="可清空的选择" clearable>
    <Option label="选项1" value="1" />
    <Option label="选项2" value="2" />
    <Option label="选项3" value="3" />
  </Select>
</template>

<script setup>
import { ref } from "vue";
const value9 = ref("");
</script>