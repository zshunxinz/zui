<script setup lang="ts">
import { ref, provide } from 'vue';
import { vk } from '@vueuse/core';

interface SidebarGroupProps {
  defaultOpen?: boolean;
  collapsible?: boolean;
}

const props = withDefaults(defineProps<SidebarGroupProps>(), {
  defaultOpen: true,
  collapsible: true,
});

const open = ref(props.defaultOpen);

const toggle = () => {
  if (props.collapsible) {
    open.value = !open.value;
  }
};

const context = {
  open,
  toggle,
  collapsible: props.collapsible,
};

provide('sidebar-group', context);
</script>

<template>
  <div class="SidebarGroup">
    <slot />
  </div>
</template>

<style scoped>
.SidebarGroup {
  margin-bottom: var(--space-3);
}
</style>
