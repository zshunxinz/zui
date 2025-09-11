<script setup lang="ts">
import { vk } from '@vueuse/core';

interface SidebarMenuButtonProps {
  asChild?: boolean;
  active?: boolean;
}

const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
  asChild: false,
  active: false,
});

const Comp = props.asChild ? 'span' : 'button';
const buttonProps = props.asChild
  ? {}
  : {
      type: 'button',
    };
</script>

<template>
  <Comp
    :as-child="props.asChild"
    v-bind="buttonProps"
    class="SidebarMenuButton"
    :class="{
      'SidebarMenuButton--active': props.active,
    }"
  >
    <slot />
  </Comp>
</template>

<style scoped>
.SidebarMenuButton {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  padding: var(--padding-2);
  border-radius: var(--border-radius);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--font-size);
  color: var(--color-text);
  transition: all 0.2s ease;
  text-decoration: none;
}

.SidebarMenuButton:hover {
  background-color: var(--color-bg-hover-1);
}

.SidebarMenuButton--active {
  background-color: var(--color-bg-hover-1);
  color: var(--color-primary);
}
</style>
