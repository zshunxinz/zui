<template>
  <ol class="z-breadcrumb-list">
    <slot />
  </ol>
</template>

<script setup>
// BreadcrumbList - 包裹所有面包屑项和分隔符的列表
</script>

<style scoped>
.z-breadcrumb-list {
  display: flex;
  align-items: center;
  /* list-style: none; */
  /* margin: 0;
  padding: 0; */
}
</style>
