<script setup lang="ts">
import { vk } from '@vueuse/core';
</script>

<template>
  <header class="SidebarHeader">
    <slot />
  </header>
</template>

<style scoped>
.SidebarHeader {
  display: flex;
  align-items: center;
  padding: var(--padding-3);
  border-bottom: 1px solid var(--sidebar-border);
}
</style>