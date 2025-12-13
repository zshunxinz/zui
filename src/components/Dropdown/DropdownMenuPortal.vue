<template>
  <Teleport to="body">
    <div class="x-dropdown-menu-portal">
      <slot />
    </div>
  </Teleport>
</template>

<script setup>
// DropdownMenuPortal - 用于将下拉菜单内容渲染到body中，避免父元素样式限制
</script>

<style scoped>
.z-dropdown-menu-portal {
  position: relative;
  z-index: 1000;
}
</style>
