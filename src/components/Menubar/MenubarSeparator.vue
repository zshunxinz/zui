<template>
  <div class="x-menubar-separator" role="separator"></div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// 注入父组件提供的数据，确保在正确的上下文中使用
const menubarMenu = inject('menubarMenu');

if (!menubarMenu) {
  throw new Error('MenubarSeparator must be used within MenubarMenu component');
}
</script>

<style scoped>
.x-menubar-separator {
  height: 1px;
  background-color: var(--color-border-1);
  margin: var(--margin-1) var(--margin-2);
}
</style>
