<script setup lang="ts">
import { inject } from 'vue';

const group:any = inject('sidebar-group');
const toggle = group?.toggle || (() => {});
const open = group?.open;
const collapsible = group?.collapsible;
const active = group?.active;
// const toggle = () => {
//   if (collapsible) {
//     toggle();
//   }
// };
</script>

<template>
  <div>
  <div class="SidebarGroupLabel" v-if="collapsible" @click="toggle">
      <slot />
    </div>
    <div v-else class="SidebarGroupLabel">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.SidebarGroupLabel {
  font-size: var(--font-size-1);
  /* height: 100%;
  line-height: 100%; */
  font-weight: var(--font-weight-2);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-1);
  margin: var(--space-0) 0 var(--space-0) 0;
  padding: var(--padding-1);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.SidebarGroupLabel:hover {
  background-color: var(--color-bg-hover-1);
}
</style>
