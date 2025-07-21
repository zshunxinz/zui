<template>
  <div class="x-radio-group" :class="{ 'x-radio-group--disabled': disabled }">
    <label 
  v-for="(option, index) in typedOptions" 
  :key="option.value" 
  class="x-radio" 
  :class="{
    'x-radio--checked': modelValue === option.value && (shape !== 'card' || !checkedClass),
      [checkedClass]: modelValue === option.value && shape === 'card' && checkedClass,
    'x-radio--disabled': disabled || option.disabled,
    'x-radio--square': shape === 'square',
    'x-radio--button': shape === 'button',
    'x-radio--card': shape === 'card',
    'x-radio--tab': shape === 'tab',
    'x-radio--default': type === 'default',
    'x-radio--primary': type === 'primary',
    'x-radio--success': type === 'success',
    'x-radio--warning': type === 'warning',
    'x-radio--danger': type === 'danger',
    'x-radio--info': type === 'info'
  }" 
>
      <input
        type="radio"
        class="x-radio__input"
        :class="{
          'x-radio--default': type === 'default',
          'x-radio--primary': type === 'primary',
          'x-radio--success': type === 'success',
          'x-radio--warning': type === 'warning',
          'x-radio--danger': type === 'danger',
          'x-radio--info': type === 'info'
        }"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        :disabled="disabled || option.disabled"
        @change="handleChange"
      >
      <template v-if="shape === 'card'">
  <slot :name="`card-${option.value}`" :option="option">
    <span class="x-radio__label">{{ option.label }}</span>
  </slot>
</template>
<template v-else>
  <span class="x-radio__label">{{ option.label }}</span>
</template>
    </label>
  </div>
</template>

<script setup lang="ts">
import {computed } from 'vue';

interface RadioOption {
  label: string;
  value: any;
  disabled?: boolean;
}

const props = defineProps<{
  modelValue: any;
  options: RadioOption[];
  name?: string;
  disabled?: boolean;
  shape?: 'circle' | 'square' | 'button' | 'card' | 'tab';
  checkedClass?: any;
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'change', value: any): void;
}>();

// 显式类型化选项数组以帮助模板推断
const typedOptions = computed<RadioOption[]>(() => props.options);

const handleChange = (e: Event) => {
    const inputValue = (e.target as HTMLInputElement).value;
    const selectedOption = props.options.find(option => String(option.value) === inputValue);
    if (selectedOption) {
      emit('update:modelValue', selectedOption.value);
      emit('change', selectedOption.value);
    }
  };
</script>

<style scoped>
.x-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.x-radio {
  display: flex;
  cursor: pointer;
}

.x-radio__input {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0px;
  margin-right: 6px;
  border: 1px solid var(--color-border-1);
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  transition: all 0.1s;
}

.x-radio__input:checked {
  border: var(--color-primary);
  background-color: var(--color-default);
}

.x-radio__input:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 9px;
  height: 9px;
  background-color: var(--color-default-text-1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

/* 方形样式 */
.x-radio--square .x-radio__input {
  border-radius: 0;
}

.x-radio--square .x-radio__input:checked::after {
  border-radius: 0;
}

/* 按钮样式 */
.x-radio--button {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 6px 12px;
}

.x-radio--button.x-radio--checked {
  /* background-color: var(--color-bg-hover); */
  border-color: var(--color-default-active);
}

.x-radio--button .x-radio__input {
  position: absolute;
  opacity: 0;
}

/* 卡片样式 */
.x-radio--card {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 0px;
  transition: all 0.2s;
}

.x-radio--card.x-radio--checked {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Type-based color styles */
.x-radio--default:checked {
  border-color: var(--color-default);
  background-color: var(--color-default);
}

.x-radio--primary:checked {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}
.x-radio--success:checked {
  border-color: var(--color-success);
  background-color: var(--color-success);
}
.x-radio--warning:checked {
  border-color: var(--color-warning);
  background-color: var(--color-warning);
}
.x-radio--danger:checked {
  border-color: var(--color-danger);
  background-color: var(--color-danger);
}
.x-radio--info:checked {
  border-color: var(--color-info);
  background-color: var(--color-info);
}

.x-radio--card .x-radio__input {
  position: absolute;
  opacity: 0;
}

.x-radio--card .x-radio__label {
  font-size: 16px;
  font-weight: 500;
}

/* 选项卡样式 */
.x-radio--tab {
  border-bottom: 1px solid var(--color-border);
  border-radius: 0;
  padding: 10px 20px;
  /* border-bottom: 2px solid transparent; */
  margin-right: -1px;
  font-size: 14px;
  font-weight: 500;
}

.x-radio--tab:first-child {
  /* border-radius: 4px 0 0 4px; */
}

.x-radio--tab:last-child {
  /* border-radius: 0 4px 4px 0; */
}

.x-radio--tab.x-radio--checked {
  /* border-top-color: var(--color-border); */
  border-left-color: var(--color-border);
  border-right-color: var(--color-border);
  background-color: var(--color-bg);
  border-bottom: 2px solid transparent;
  z-index: 1;
}

.x-radio--tab.x-radio--default.x-radio--checked {
  border-bottom-color: var(--color-default);
}
.x-radio--tab.x-radio--primary.x-radio--checked {
  border-bottom-color: var(--color-primary);
}
.x-radio--tab.x-radio--success.x-radio--checked {
  border-bottom-color: var(--color-success);
}
.x-radio--tab.x-radio--warning.x-radio--checked {
  border-bottom-color: var(--color-warning);
}
.x-radio--tab.x-radio--danger.x-radio--checked {
  border-bottom-color: var(--color-danger);
}
.x-radio--tab.x-radio--info.x-radio--checked {
  border-bottom-color: var(--color-info);
}

.x-radio__input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.x-radio__label {
  font-size: 14px;
  color: var(--color-text-default);
  user-select: none;
  display: flex;
  justify-self:center;
  align-self: center;
  height: 16px;
  line-height: 16px;
}

.x-radio-group--disabled .x-radio {
  cursor: not-allowed;
}

.x-radio--disabled .x-radio__label {
  color: var(--color-text-disabled);
}
</style>