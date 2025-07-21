<template>
  <div class="x-checkbox-group" :class="[sizeClass, disabledClass]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue';
import { useModelWrapper } from './useModelWrapper';

const props = defineProps<{
  modelValue?: (string | number | boolean)[];
  size?: 'medium' | 'small' | 'mini';
  disabled?: boolean;
  min?: number;
  max?: number;
  textColor?: string;
  fill?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: (string | number | boolean)[]): void;
  (e: 'change', value: (string | number | boolean)[]): void;
}>();

const { modelValue, handleChange: emitChange } = useModelWrapper(
  props,
  emit,
  'modelValue',
  'change'
);

const sizeClass = computed(() => props.size ? `x-checkbox-group--${props.size}` : '');
const disabledClass = computed(() => props.disabled ? 'is-disabled' : '');
const checkboxes = ref<{props: any, updateModelValue: (value: any) => void}[]>([]);

provide('CheckboxGroup', {
  props,
  modelValue,
  registerCheckbox: (checkbox: any) => checkboxes.value.push(checkbox),
  unregisterCheckbox: (checkbox: any) => {
    checkboxes.value = checkboxes.value.filter(cb => cb !== checkbox);
  },
  handleChange: (value: string | number | boolean) => {
    console.log('CheckboxGroup handleChange triggered with value:', value);
    const currentValue = modelValue.value || [];
    console.log('Current value before change:', currentValue);
    const isChecked = currentValue.includes(value);
    let newValue;

    if (isChecked) {
      newValue = currentValue.filter((item: string | number | boolean) => item !== value);
    } else {
      if (props.max && currentValue.length >= props.max) return;
      newValue = [...currentValue, value];
    }

    if (props.min && newValue.length < props.min) return;
    modelValue.value = newValue;
    emitChange(newValue);
  }
});

watch(
  () => modelValue.value,
  (newVal) => {
    checkboxes.value.filter(checkbox => checkbox?.props).forEach(checkbox => {
      const isChecked = newVal?.includes(checkbox.props.label);
      if (checkbox.props.checked !== isChecked) {
        checkbox.updateModelValue(isChecked);
      }
    });
  },
  { deep: true }
);
</script>

<style scoped>
.x-checkbox-group {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
}

.x-checkbox-group--medium {
  gap: 10px;
}

.x-checkbox-group--small,
.x-checkbox-group--mini {
  gap: 6px;
}

.x-checkbox-group.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>