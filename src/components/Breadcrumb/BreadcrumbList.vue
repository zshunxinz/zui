<template>
  <ol class="x-breadcrumb-list">
    <slot />
  </ol>
</template>

<script setup>
// BreadcrumbList - 包裹所有面包屑项和分隔符的列表
</script>

<style scoped>
.x-breadcrumb-list {
  display: flex;
  align-items: center;
  /* list-style: none; */
  /* margin: 0;
  padding: 0; */
}
</style>
