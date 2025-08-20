<template>
  <div
    class="x-select-option"
    :class="[
      selectContext.type && isSelected
        ? `is-selected--${selectContext.type.value}`
        : '',
      {
        'is-disabled': disabled,
        'is-hover': isHover,
      },
    ]"
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
  if (!selectContext.modelValue?.value) return false;

  const modelValue = selectContext.modelValue.value;

  if (Array.isArray(modelValue)) {
    return modelValue.includes(props.value);
  }

  return modelValue === props.value;
});

// const isSelected = ref(false);
const handleClick = () => {
  if (props.disabled) return;
  console.log(selectContext.type.value);
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

.is-selected--default {
  color: var(--color-default);
}

.is-selected--primary {
  color: var(--color-primary);
}

.is-selected--success {
  color: var(--color-success);
}

.is-selected--info {
  color: var(--color-info);
}

.is-selected--warning {
  color: var(--color-warning);
}

.is-selected--danger {
  color: var(--color-danger);
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
