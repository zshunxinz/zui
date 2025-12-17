<template>
  <span class="z-menubar-shortcut">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// 注入父组件提供的数据，确保在正确的上下文中使用
const menubarMenu = inject('menubarMenu');

if (!menubarMenu) {
  throw new Error('MenubarShortcut must be used within MenubarMenu component');
}
</script>

<style scoped>
.z-menubar-shortcut {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-left: var(--margin-2);
  font-family: var(--font-family-mono);
}
</style>
