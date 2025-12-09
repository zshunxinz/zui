<template>
  <button
    class="x-dropdown-menu-trigger"
    :class="triggerClass"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { inject, ref } from 'vue';

const emit = defineEmits(['click']);

const triggerClass = ref('');

// 从父组件获取状态管理
const dropdownState = inject('dropdownState', null);

const handleClick = (e) => {
  emit('click', e);
  if (dropdownState) {
    dropdownState.isOpen = !dropdownState.isOpen;
  }
};

const handleMouseEnter = () => {
  if (dropdownState && dropdownState.hoverable) {
    dropdownState.isOpen = true;
  }
};

const handleMouseLeave = () => {
  if (dropdownState && dropdownState.hoverable) {
    dropdownState.isOpen = false;
  }
};
</script>

<style scoped>
.x-dropdown-menu-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
}
</style>