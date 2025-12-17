<template>
  <div class="z-menubar-menu">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, inject } from 'vue';
import type { MenubarType, MenubarMenuType } from './types';

interface Props {
  /**
   * 菜单项的唯一标识符
   */
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
});

// 注入父组件提供的数据
const menubar = inject<MenubarType>('menubar');

if (!menubar) {
  throw new Error('MenubarMenu must be used within Menubar component');
}

// 使用传入的id或生成一个唯一的id
const menuId = props.id || `menu-${Math.random().toString(36).substr(2, 9)}`;

// 提供给子组件的数据
provide('menubarMenu', {
  menuId,
  menubar,
});
</script>

<style scoped>
.z-menubar-menu {
  position: relative;
  display: inline-block;
}
</style>
