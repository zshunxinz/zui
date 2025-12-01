<script setup lang="ts">
import { ref, computed, inject } from 'vue';

interface SidebarProps {
  collapsedWidth?: number;
  width?: number;
}

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsedWidth: 49,
  width: 240,
});

const sidebar:any = inject('sidebar');
const open = sidebar?.open || ref(true);

const computedWidth = computed(() => {
  return open.value ? props.width : props.collapsedWidth;
});

const isCollapsed = computed(() => !open.value);
</script>

<template>
  <aside
    class="Sidebar"
    :class="{
      'Sidebar--closed': !open,
    }"
    :style="{ width: `${computedWidth}px` }"
  >
    <slot />
  </aside>
</template>

<style scoped>
.Sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--sidebar-background);
  border-right: 1px solid var(--sidebar-border);
  transition: width 0.3s ease;
  z-index: 50;
  min-width: 0;
}
</style>
