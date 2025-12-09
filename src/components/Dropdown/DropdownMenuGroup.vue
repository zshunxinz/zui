<template>
  <div class="x-dropdown-menu-group">
    <slot />
  </div>
</template>

<script setup>
// DropdownMenuGroup - 用于对下拉菜单项进行分组
</script>

<style scoped>
.x-dropdown-menu-group {
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>