<template>
  <button
    class="z-dropdown-menu-trigger"
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
const dropdownState = inject('dropdownState');
const openDropdown = inject('openDropdown');
const closeDropdown = inject('closeDropdown');

const handleClick = e => {
  emit('click', e);
  e.stopPropagation(); // 阻止事件冒泡，避免触发 handleClickOutside
  if (dropdownState) {
    dropdownState.value.isOpen = !dropdownState.value.isOpen;
  }
};

// 鼠标进入触发按钮时立即展开菜单
const handleMouseEnter = () => {
  if (openDropdown) {
    openDropdown();
  }
};

// 鼠标离开触发按钮时延迟关闭菜单
const handleMouseLeave = () => {
  if (closeDropdown) {
    closeDropdown();
  }
};
</script>

<style scoped>
.z-dropdown-menu-trigger {
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
