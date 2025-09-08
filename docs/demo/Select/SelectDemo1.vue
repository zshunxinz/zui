<template>
  <Select v-model="value" placeholder="请选择">
    <Option value="数据12356789">数据12356789</Option>
    <Option label="选项1" value="1" />
    <Option label="选项2" value="2" />
    <Option label="选项3" value="3" />
    <Option label="选项4" value="4" />
    <Option label="选项5" value="5" />
    <Option label="选项6" value="6" />
    <Option label="选项7" value="7" />
    <Option label="选项8" value="8" />
    <Option label="选项9" value="9" />
    <Option label="选项10" value="10" />
    <Option label="选项11" value="11" />
    <Option label="选项12" value="12" />
    <Option label="选项13" value="13" />
  </Select>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('1');
</script>
