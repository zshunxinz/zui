<template>
  <span class="x-dropdown-menu-shortcut">
    <slot />
  </span>
</template>

<script setup>
// DropdownMenuShortcut - 用于显示下拉菜单项的快捷键
</script>

<style scoped>
.z-dropdown-menu-shortcut {
  margin-left: auto;
  font-size: 12px;
  color: var(--text-color-secondary);
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
}
</style>
