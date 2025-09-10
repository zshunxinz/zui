<script setup lang="ts">
import { vk } from '@vueuse/core';
</script>

<template>
  <div class="SidebarContent">
    <slot />
  </div>
</template>

<style scoped>
.SidebarContent {
  flex: 1;
  overflow-y: auto;
  padding: var(--padding-3);
}

/* 自定义滚动条样式 */
.SidebarContent::-webkit-scrollbar {
  width: 6px;
}

.SidebarContent::-webkit-scrollbar-track {
  background: var(--sidebar-background);
}

.SidebarContent::-webkit-scrollbar-thumb {
  background: var(--sidebar-border);
  border-radius: 3px;
}

.SidebarContent::-webkit-scrollbar-thumb:hover {
  background: var(--color-neutral-300);
}
</style>