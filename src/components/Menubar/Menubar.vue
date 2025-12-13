<template>
  <nav
    class="x-menubar"
    :class="[
      { 'x-menubar--disabled': disabled },
      {
        'x-menubar--primary': theme === 'primary',
        'x-menubar--success': theme === 'success',
        'x-menubar--warning': theme === 'warning',
        'x-menubar--danger': theme === 'danger',
        'x-menubar--info': theme === 'info',
        'x-menubar--small': size === 'small',
        'x-menubar--large': size === 'large',
        'x-menubar--rounded': rounded,
        'x-menubar--shadow': shadow,
        'x-menubar--shadow-lg': shadow === 'lg',
        'x-menubar--transparent': transparent,
        'x-menubar--dense': dense,
      },
    ]"
  >
    <slot></slot>
  </nav>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';

interface Props {
  /**
   * 是否禁用整个菜单栏
   */
  disabled?: boolean;
  theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'default' | 'small' | 'large';
  rounded?: boolean;
  shadow?: boolean | 'lg';
  transparent?: boolean;
  dense?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

// 跟踪当前打开的菜单
const openMenu = ref<string | null>(null);

// 延迟关闭定时器
let closeTimer: NodeJS.Timeout | null = null;

// 打开菜单
const open = (menuId: string) => {
  if (!props.disabled) {
    // 清除延迟关闭定时器
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
    openMenu.value = menuId;
  }
};

// 立即关闭菜单
const close = () => {
  openMenu.value = null;
  // 清除延迟关闭定时器
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
};

// 延迟关闭菜单，用于hover触发的场景
const closeWithDelay = () => {
  if (!props.disabled) {
    // 清除之前的定时器
    if (closeTimer) {
      clearTimeout(closeTimer);
    }
    // 设置200ms延迟关闭
    closeTimer = setTimeout(() => {
      openMenu.value = null;
      closeTimer = null;
    }, 200);
  }
};

// 提供给子组件的数据
provide('menubar', {
  open,
  close,
  closeWithDelay,
  openMenu,
  disabled: props.disabled,
});
</script>

<style scoped>
.z-menubar {
  display: flex;
  align-items: center;
  /* background-color: var(--color-background-2); */
  border-bottom: 1px solid var(--color-border-1);
  /* border: 1px solid var(--color-border-1); */
  padding: var(--padding-1);
  user-select: none;
}

.z-menubar--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

<style src="./menubar.styles.css"></style>
