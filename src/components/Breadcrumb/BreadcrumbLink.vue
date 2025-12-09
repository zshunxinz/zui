<template>
  <component
    :is="asChild ? 'span' : 'a'"
    class="x-breadcrumb-link"
    :class="{
      'x-breadcrumb-link--disabled': disabled,
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
.x-breadcrumb-link {
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
.x-breadcrumb-link > * {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  line-height: inherit;
}

/* 确保图标与文本垂直居中对齐 */
.x-breadcrumb-link .x-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  font-size: 16px;
  vertical-align: middle;
  line-height: 1;
}

.x-breadcrumb-link:hover:not(.x-breadcrumb-link--disabled) {
  color: var(--color-primary-hover);
}

.x-breadcrumb-link:hover:not(.x-breadcrumb-link--disabled) > * {
  text-decoration: underline;
  color: inherit;
}

.x-breadcrumb-link--disabled {
  color: var(--color-text-muted);
  cursor: not-allowed;
}

.x-breadcrumb-link--disabled > * {
  cursor: not-allowed;
}
</style>
