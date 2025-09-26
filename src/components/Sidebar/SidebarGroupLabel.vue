<script setup lang="ts">
import { inject } from 'vue';

const group = inject('sidebar-group');
const toggle = group?.toggle || (() => {});
const open = group?.open;
const collapsible = group?.collapsible;
</script>

<template>
  <h3 class="SidebarGroupLabel" v-if="collapsible" @click="toggle">
    <slot />
  </h3>
  <h3 v-else class="SidebarGroupLabel">
    <slot />
  </h3>
</template>

<style scoped>
.SidebarGroupLabel {
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin: 0 0 var(--space-2) 0;
  padding: var(--padding-1) var(--padding-2);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.SidebarGroupLabel:hover {
  background-color: var(--color-bg-hover-1);
}
</style>
