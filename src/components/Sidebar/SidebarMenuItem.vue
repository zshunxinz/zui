<script setup lang="ts">
interface SidebarMenuItemProps {
  active?: boolean;
  style?: string;
}

const props = withDefaults(defineProps<SidebarMenuItemProps>(), {
  active: false,
  style: "",
});
</script>

<template>
  <li
    class="SidebarMenuItem"
    :class="{
      'SidebarMenuItem--active': props.active,
    }"
    :style="props.style"
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
