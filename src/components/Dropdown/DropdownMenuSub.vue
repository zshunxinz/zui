<template>
  <div class="x-dropdown-menu-sub">
    <slot />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

// 创建子菜单状态
const subMenuState = ref({
  isOpen: false
});

// 提供子菜单状态给子组件
provide('subMenuState', subMenuState);
</script>

<style scoped>
.x-dropdown-menu-sub {
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>