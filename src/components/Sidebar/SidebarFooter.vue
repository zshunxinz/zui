<script setup lang="ts">
import { vk } from '@vueuse/core';
</script>

<template>
  <footer class="SidebarFooter">
    <slot />
  </footer>
</template>

<style scoped>
.SidebarFooter {
  display: flex;
  align-items: center;
  padding: var(--padding-3);
  border-top: 1px solid var(--sidebar-border);
}
</style>