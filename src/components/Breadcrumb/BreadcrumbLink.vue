<template>
  <component
    :is="asChild ? 'span' : 'a'"
    class="z-breadcrumb-link"
    :class="{
      'z-breadcrumb-link--disabled': disabled,
    }"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  asChild: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.z-breadcrumb-link {
  color: var(--color-text);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  height: 20px;
}

/* 确保asChild模式下内部元素也能正确对齐 */
.z-breadcrumb-link > * {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  line-height: inherit;
}

/* 确保图标与文本垂直居中对齐 */
.z-breadcrumb-link .z-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  font-size: 16px;
  vertical-align: middle;
  line-height: 1;
}

.z-breadcrumb-link:hover:not(.z-breadcrumb-link--disabled) {
  color: var(--color-primary-hover);
}

.z-breadcrumb-link:hover:not(.z-breadcrumb-link--disabled) > * {
  text-decoration: underline;
  color: inherit;
}

.z-breadcrumb-link--disabled {
  color: var(--color-text-muted);
  cursor: not-allowed;
}

.z-breadcrumb-link--disabled > * {
  cursor: not-allowed;
}
</style>
