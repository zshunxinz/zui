<template>
  <li class="z-breadcrumb-separator">
    <slot>
      <span class="z-breadcrumb-separator-icon">/</span>
    </slot>
  </li>
</template>

<script setup>
// BreadcrumbSeparator - 面包屑项之间的分隔符
</script>

<style scoped>
.z-breadcrumb-separator {
  display: flex;
  align-items: center;
  margin: 0 var(--space-1);
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 20px;
  height: 20px;
}

.z-breadcrumb-separator-icon {
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  line-height: 1;
  vertical-align: middle;
}
</style>
