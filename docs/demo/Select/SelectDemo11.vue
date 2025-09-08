<template>
  <Select v-model="value" placeholder="分组选项" icon-position="left">
    <OptionGroup label="基础分组测试">
      <Option label="选项1" value="1">
        <template #icon>
          <span style="color: var(--color-primary)">★</span>
        </template>
        选项1
      </Option>
      <Option label="选项2" value="2">
        <template #icon>
          <span style="color: var(--color-success)">●</span>
        </template>
        选项2
      </Option>
    </OptionGroup>
  </Select>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
