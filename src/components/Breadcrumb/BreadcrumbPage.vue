<template>
  <span class="z-breadcrumb-page">
    <slot />
  </span>
</template>

<script setup>
// BreadcrumbPage - 当前页面的面包屑项（不可点击）
</script>

<style scoped>
.z-breadcrumb-page {
  color: var(--color-text);
  font-weight: 500;
  pointer-events: none;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  height: 20px;
}
</style>
