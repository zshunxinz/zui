<template>
  <nav class="x-breadcrumb" aria-label="Breadcrumb">
    <slot />
  </nav>
</template>

<script setup>
// Breadcrumb - 面包屑导航主容器
</script>

<style scoped>
.x-breadcrumb {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-text);
}
</style>
