<template>
  <div class="x-dropdown-menu-label">
    <slot />
  </div>
</template>

<script setup>
// DropdownMenuLabel - 用于显示下拉菜单的标签
</script>

<style scoped>
.x-dropdown-menu-label {
  display: block;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
