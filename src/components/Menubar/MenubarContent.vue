<template>
  <div v-show="isOpen" class="x-menubar-content" role="menu" @click.stop>
    <div class="x-menubar-content__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed, onMounted, onUnmounted } from 'vue';
import type { MenubarMenuType } from './types';

// 注入父组件提供的数据
const menubarMenu = inject<MenubarMenuType>('menubarMenu');

if (!menubarMenu) {
  throw new Error('MenubarContent must be used within MenubarMenu component');
}

// 计算当前菜单是否打开
const isOpen = computed(() => {
  return menubarMenu?.menubar?.openMenu?.value === menubarMenu?.menuId;
});

// 点击外部关闭菜单
const handleClickOutside = (event: MouseEvent) => {
  if (isOpen.value) {
    const target = event.target as HTMLElement;
    const menuContent = document.querySelector(
      `#x-menubar-content-${menubarMenu.menuId}`
    );
    const trigger = target.closest('.z-menubar-trigger');

    if (menuContent && !menuContent.contains(target) && !trigger) {
      menubarMenu.menubar.close();
    }
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.z-menubar-content {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: var(--margin-1);
  background-color: var(--color-background);
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  z-index: 1000;
  min-width: 160px;
}

.z-menubar-content__inner {
  padding: var(--padding-1);
}
</style>
