<script setup lang="ts">
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
