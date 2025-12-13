<template>
  <button
    class="x-dropdown-menu-sub-trigger"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <slot />
    <span class="x-dropdown-menu-sub-trigger-arrow">
      <!-- 使用Unicode右箭头，或者可以替换为图标组件 -->
      ▶
    </span>
  </button>
</template>

<script setup>
import { inject } from 'vue';

const emit = defineEmits(['click']);

// 从父组件获取子菜单状态
const subMenuState = inject('subMenuState', null);
const dropdownState = inject('dropdownState', null);

const handleClick = e => {
  emit('click', e);
  e.stopPropagation(); // 防止触发父菜单关闭
  if (subMenuState) {
    subMenuState.isOpen = !subMenuState.isOpen;
  }
};

const handleMouseEnter = () => {
  if (subMenuState && dropdownState?.value.hoverable) {
    subMenuState.isOpen = true;
  }
};

const handleMouseLeave = () => {
  if (subMenuState && dropdownState?.value.hoverable) {
    subMenuState.isOpen = false;
  }
};
</script>

<style scoped>
.z-dropdown-menu-sub-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
  transition: background-color 0.2s;
}

.z-dropdown-menu-sub-trigger:hover {
  background-color: var(--hover-background-color);
}

.z-dropdown-menu-sub-trigger-arrow {
  font-size: 10px;
  color: var(--text-color-secondary);
  margin-left: 4px;
}
</style>
