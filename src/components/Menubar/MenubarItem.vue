<template>
  <button
    class="z-menubar-item"
    :class="{ 'z-menubar-item--disabled': disabled }"
    type="button"
    @click="handleClick"
    role="menuitem"
    :aria-disabled="disabled"
  >
    <span class="z-menubar-item__content">
      <slot></slot>
    </span>
    <slot name="shortcut"></slot>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { MenubarMenuType } from './types';

interface Props {
  /**
   * 是否禁用菜单项
   */
  disabled?: boolean;
  /**
   * 菜单项的点击回调
   */
  onClick?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  onClick: undefined,
});

// 注入父组件提供的数据
const menubarMenu = inject<MenubarMenuType>('menubarMenu');

if (!menubarMenu) {
  throw new Error('MenubarItem must be used within MenubarMenu component');
}

// 点击处理函数
const handleClick = () => {
  if (!props.disabled && !menubarMenu.menubar.disabled) {
    // 执行用户提供的回调
    if (props.onClick) {
      props.onClick();
    }
    // 关闭菜单
    menubarMenu.menubar.close();
  }
};
</script>

<style scoped>
.z-menubar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--padding-1);
  background: none;
  border: none;
  color: var(--color-text);
  font-size: var(--font-size-base);
  cursor: pointer;
  border-radius: var(--border-radius-small);
  transition: background-color var(--transition-duration);
  text-align: left;
  outline: none;
}

.z-menubar-item:hover:not(:disabled) {
  background-color: var(--color-background-hover);
}

.z-menubar-item:active:not(:disabled) {
  background-color: var(--color-background-active);
}

.z-menubar-item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.z-menubar-item__content {
  flex: 1;
}
</style>
