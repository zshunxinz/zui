<template>
  <div
    class="x-select-option"
    :class="{
      'is-selected': isSelected,
      'is-disabled': disabled,
      'is-hover': isHover,
    }"
    @click="handleClick"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <slot>{{ label || value }}</slot>
  </div>
</template>

<script setup>
import { inject, computed, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const selectContext = inject("selectContext", {});
const isHover = ref(false);

const isSelected = computed(() => {
  if (!selectContext.modelValue) return false;

  if (Array.isArray(selectContext.modelValue)) {
    return selectContext.modelValue.includes(props.value);
  }

  return selectContext.modelValue === props.value;
});

const handleClick = () => {
  if (props.disabled) return;

  if (selectContext.selectOption) {
    selectContext.selectOption({
      value: props.value,
      label: props.label || props.value,
      disabled: props.disabled,
    });
  }
};
</script>

<style scoped>
.x-select-option {
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s;
  color: #606266;
  font-size: 14px;
  /* line-height: 1.4; */
}

.x-select-option:hover {
  background-color: #f5f7fa;
}

.x-select-option.is-hover {
  background-color: #f5f7fa;
}

.x-select-option.is-selected {
  color: #409eff;
  background-color: #ecf5ff;
  font-weight: 500;
}

.x-select-option.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-color: transparent;
}

.x-select-option.is-disabled:hover {
  background-color: transparent;
}
</style>
