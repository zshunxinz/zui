<template>
  <label
    class="x-checkbox"
    :class="[
      checkboxSize,
      borderStyle,
      disabledClass,
      modelValue ? 'x-checkbox--checked' : '',
    ]"
  >
    <input
      type="checkbox"
      class="x-checkbox__input"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="handleChange"
    />
    <span class="x-checkbox__inner"></span>
    <span class="x-checkbox__label" v-if="$slots.default"><slot></slot></span>
    <span class="x-checkbox__label" v-else>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useModelWrapper } from './useModelWrapper';

const props = defineProps<{
  modelValue?: boolean | string | number;
  label?: string | number | boolean;
  trueLabel?: string | number;
  falseLabel?: string | number;
  disabled?: boolean;
  border?: boolean;
  size?: 'large' | 'medium' | 'small' | 'mini';
  name?: string;
  checked?: boolean;
  indeterminate?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | string | number): void;
  (e: 'change', value: boolean | string | number): void;
}>();

const { modelValue, handleChange: emitChange } = useModelWrapper(
  props,
  emit,
  'modelValue',
  'change'
);

const checkboxSize = computed(() =>
  props.size ? `x-checkbox--${props.size}` : ''
);
const borderStyle = computed(() =>
  props.border || modelValue.value ? 'x-checkbox--border' : ''
);
const disabledClass = computed(() => (props.disabled ? 'is-disabled' : ''));

const handleChange = (e: Event) => {
  const checked = (e.target as HTMLInputElement).checked;
  const value = checked ? props.trueLabel ?? true : props.falseLabel ?? false;
  emitChange(value);
};

// Handle checked prop
watch(
  () => props.checked,
  val => {
    if (val !== undefined && val !== modelValue.value) {
      modelValue.value = val;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.z-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  padding: 3px 9px;
  border: 1px solid var(--color-border);
}

.z-checkbox.is-disabled {
  cursor: not-allowed;
}

.z-checkbox__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}

.z-checkbox__inner {
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  text-align: center;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background-color: var(--color-background);
  transition: all 0.2s ease;
  border-radius: var(--border-radius);
}

.z-checkbox__input:checked + .z-checkbox__inner {
  background-color: var(--color-default);
  border-color: var(--color-text-1);
  border-radius: var(--border-radius);
  /* box-shadow: 0 2px 4px rgba(205, 205, 205, 1); */
}

.z-checkbox__input:checked + .z-checkbox__inner::after {
  content: '';
  position: absolute;
  top: 5px;
  left: calc(50% - 7px);
  width: 5px;
  height: 10px;
  border: solid var(--color-primary-text-1);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) translateY(-70%) translateX(10%);
}

.z-checkbox__input:indeterminate + .z-checkbox__inner {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.z-checkbox__input:indeterminate + .z-checkbox__inner::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 2px;
  background-color: var(--color-primary-text-1);
  transform: translate(-50%, -50%);
}

.z-checkbox__input:disabled + .z-checkbox__inner {
  border-color: var(--color-disabled);
  background-color: var(--color-disabled);
}

.z-checkbox__label {
  margin-left: 8px;
  color: var(--color-text);
}

.z-checkbox.is-disabled .z-checkbox__label {
  color: var(--color-text-muted);
}

.z-checkbox--border {
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;
}

.z-checkbox--border.z-checkbox--checked {
  border: 1px solid var(--color-default);
  box-shadow: 0 0 5px 2px var(--color-border-1);
}

.z-checkbox--large .z-checkbox__inner {
  width: 20px;
  height: 20px;
}

.z-checkbox--medium .z-checkbox__inner {
  width: 16px;
  height: 16px;
}

.z-checkbox--small .z-checkbox__inner {
  width: 14px;
  height: 14px;
}

.z-checkbox--mini .z-checkbox__inner {
  width: 12px;
  height: 12px;
}
</style>
