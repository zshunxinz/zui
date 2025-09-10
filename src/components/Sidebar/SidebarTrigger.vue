<script setup lang="ts">
import { inject, defineProps, withDefaults, computed } from 'vue';
import { vk } from '@vueuse/core';

interface SidebarTriggerProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<SidebarTriggerProps>(), {
  asChild: false
});

const sidebar = inject('sidebar');
const toggle = sidebar?.toggle || (() => {});
const open = computed(() => sidebar?.open?.value || true);

const Comp = props.asChild ? 'span' : 'button';
const triggerProps = props.asChild ? {
  onClick: toggle
} : {
  type: 'button',
  onClick: toggle
};
</script>

<template>
  <Comp
    :as-child="props.asChild"
    v-bind="triggerProps"
    class="SidebarTrigger"
  >
    <slot v-if="props.asChild">
      <button type="button" @click="toggle">切换侧边栏</button>
    </slot>
    <span v-else>切换侧边栏</span>
  </Comp>
</template>

<style scoped>
.SidebarTrigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2);
  border-radius: var(--border-radius);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--font-size);
  color: var(--color-text);
  transition: all 0.2s ease;
}

.SidebarTrigger:hover {
  background-color: var(--color-bg-hover-1);
}
</style>