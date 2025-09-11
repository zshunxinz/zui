<script setup lang="ts">
import { vk } from '@vueuse/core';

interface SidebarMenuItemProps {
  active?: boolean;
}

const props = withDefaults(defineProps<SidebarMenuItemProps>(), {
  active: false,
});
</script>

<template>
  <li
    class="SidebarMenuItem"
    :class="{
      'SidebarMenuItem--active': props.active,
    }"
  >
    <slot />
  </li>
</template>

<style scoped>
.SidebarMenuItem {
  list-style: none;
  margin: 0;
}
</style>
