<template>
  <button
    class="x-menubar-trigger"
    :class="{ 'x-menubar-trigger--disabled': disabled || menubarMenu.menubar.disabled }"
    type="button"
    @click="handleClick"
    :aria-expanded="isOpen"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { MenubarMenuType } from './types';

interface Props {
  /**
   * 是否禁用触发器
   */
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
});

// 注入父组件提供的数据
const menubarMenu = inject<MenubarMenuType>('menubarMenu')

if (!menubarMenu) {
  throw new Error('MenubarTrigger must be used within MenubarMenu component')
}

// 计算当前菜单是否打开
const isOpen = computed(() => {
  return menubarMenu.menubar.openMenu.value === menubarMenu.menuId;
});

// 点击处理函数
const handleClick = () => {
  if (!props.disabled && !menubarMenu.menubar.disabled) {
    if (isOpen.value) {
      menubarMenu.menubar.close();
    } else {
      menubarMenu.menubar.open(menubarMenu.menuId);
    }
  }
};
</script>

<style scoped>
.x-menubar-trigger {
  padding: var(--padding-2) var(--padding-3);
  background: none;
  border: none;
  color: var(--color-text);
  font-size: var(--font-size-base);
  cursor: pointer;
  border-radius: var(--border-radius-small);
  transition: background-color var(--transition-duration);
  outline: none;
}

.x-menubar-trigger:hover:not(:disabled) {
  background-color: var(--color-background-hover);
}

.x-menubar-trigger:active:not(:disabled) {
  background-color: var(--color-background-active);
}

.x-menubar-trigger--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>