<template>
  <div class="x-dropdown">
    <slot />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

const props = defineProps({
  hoverable: {
    type: Boolean,
    default: false
  }
});

// 创建下拉菜单状态
const dropdownState = ref({
  isOpen: false,
  hoverable: props.hoverable
});

// 提供状态给子组件
provide('dropdownState', dropdownState);
</script>

<style scoped>
.x-dropdown {
  position: relative;
  display: inline-block;
}
</style>