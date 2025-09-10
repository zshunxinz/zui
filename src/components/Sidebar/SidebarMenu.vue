<script setup lang="ts">
import { vk } from '@vueuse/core';
</script>

<template>
  <nav class="SidebarMenu">
    <slot />
  </nav>
</template>

<style scoped>
.SidebarMenu {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
</style>