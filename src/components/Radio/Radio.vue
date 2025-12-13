<template>
  <div
    class="x-radio-group"
    :class="{
      'x-radio-group--disabled': disabled,
      'x-radio-group--tab-button': shape === 'tab-button',
    }"
  >
    <label
      v-for="(option, index) in typedOptions"
      :key="option.value"
      class="x-radio"
      :class="{
        'x-radio--checked':
          modelValue === option.value && (shape !== 'card' || !checkedClass),
        [checkedClass]:
          modelValue === option.value && shape === 'card' && checkedClass,
        'x-radio--disabled': disabled || option.disabled,
        'x-radio--square': shape === 'square',
        'x-radio--button': shape === 'button',
        'x-radio--tab-line': shape === 'tab-line',
        'x-radio--tab-button': shape === 'tab-button',
        'x-radio--small--circle': size === 'small' && shape === 'circle',
        'x-radio--medium--circle': size === 'medium' && shape === 'circle',
        'x-radio--large--circle': size === 'large' && shape === 'circle',
        'x-radio--small--square': size === 'small' && shape === 'square',
        'x-radio--medium--square': size === 'medium' && shape === 'square',
        'x-radio--large--square': size === 'large' && shape === 'square',
        'x-radio--small--button': size === 'small' && shape === 'button',
        'x-radio--medium--button': size === 'medium' && shape === 'button',
        'x-radio--large--button': size === 'large' && shape === 'button',
        'x-radio--small--tab-line': size === 'small' && shape === 'tab-line',
        'x-radio--medium--tab-line': size === 'medium' && shape === 'tab-line',
        'x-radio--large--tab-line': size === 'large' && shape === 'tab-line',
        'x-radio--small--tab-button':
          size === 'small' && shape === 'tab-button',
        'x-radio--medium--tab-button':
          size === 'medium' && shape === 'tab-button',
        'x-radio--large--tab-button':
          size === 'large' && shape === 'tab-button',
        'x-radio--card': shape === 'card',
        'x-radio--tab': shape === 'tab',
        'x-radio--default': type === 'default',
        'x-radio--primary': type === 'primary',
        'x-radio--success': type === 'success',
        'x-radio--warning': type === 'warning',
        'x-radio--danger': type === 'danger',
        'x-radio--info': type === 'info',
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
          'x-radio--info': type === 'info',
        }"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        :disabled="disabled || option.disabled"
        @change="handleChange"
      />
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
import { computed } from 'vue';

interface RadioOption {
  label: string;
  value: any;
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<{
    modelValue: any;
    options: RadioOption[];
    name?: string;
    disabled?: boolean;
    shape?:
      | 'circle'
      | 'square'
      | 'button'
      | 'card'
      | 'tab'
      | 'tab-line'
      | 'tab-button';
    checkedClass?: any;
    size?: 'small' | 'medium' | 'large';
    type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  }>(),
  {
    type: 'default',
    size: 'medium',
    shape: 'circle',
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'change', value: any): void;
}>();

// 显式类型化选项数组以帮助模板推断
const typedOptions = computed<RadioOption[]>(() => props.options);

const handleChange = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value;
  const selectedOption = props.options.find(
    option => String(option.value) === inputValue
  );
  if (selectedOption) {
    emit('update:modelValue', selectedOption.value);
    emit('change', selectedOption.value);
  }
};
</script>

<style scoped>
.z-radio-group {
  /* display: grid; */

  gap: 20px;

  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* align-items: center; */
}

.z-radio {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* height: var(--height-1); */
  /* line-height: var(--height-1); */
}

.z-radio__input {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0px;
  margin-right: 6px;
  /* border: 1px solid var(--color-text-1); */
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  transition: all 0.1s;
  display: grid;
  /* justify-content: center;
  align-items: center; */
  place-items: center;
}

.z-radio__label {
  /* font-size: var(--font-size); */
  color: var(--color-text);
  user-select: none;
  display: flex;
  justify-self: center;
  align-self: center;
  height: 100%;
  line-height: 100%;
}

.z-radio--small--circle {
  height: var(--height-0);
  line-height: var(--height-0);
}

.z-radio--medium--circle {
  height: var(--height-1);
  line-height: var(--height-1);
}

.z-radio--large--circle {
  height: var(--height-2);
  line-height: var(--height-2);
}

.z-radio--small--circle .z-radio__input {
  width: var(--font-size-0);
  height: var(--font-size-0);
}

.z-radio--medium--circle .z-radio__input {
  width: var(--font-size-1);
  height: var(--font-size-1);
}

.z-radio--large--circle .z-radio__input {
  width: var(--font-size-2);
  height: var(--font-size-2);
}

.z-radio--default .z-radio__input {
  border: 1px solid var(--color-default);
}

.z-radio__input:checked::after {
  content: '';
  /* width: 7px;
  height: 7px; */
  border-radius: 50%;
}

.z-radio--small--square .z-radio__input:checked::after {
  content: '';
  width: 7px;
  height: 7px;
}

.z-radio--medium--square .z-radio__input:checked::after {
  content: '';
  width: 8px;
  height: 8px;
}

.z-radio--large--square .z-radio__input:checked::after {
  content: '';
  width: 9px;
  height: 9px;
}

.z-radio--small--circle .z-radio__input:checked::after {
  content: '';
  padding: 2.9px;
  border-radius: 100%;
}

.z-radio--medium--circle .z-radio__input:checked::after {
  content: '';
  padding: 3.9px;
  border-radius: 100%;
}

.z-radio--large--circle .z-radio__input:checked::after {
  content: '';
  padding: 4.9px;
  border-radius: 100%;
}

.z-radio--large--circle .z-radio__label {
  font-size: var(--font-size-2);
  color: var(--color-text);
  user-select: none;
  display: flex;
  justify-self: center;
  align-self: center;
  height: var(--font-size-2);
  line-height: var(--font-size-2);
}

.z-radio--medium--circle .z-radio__label {
  font-size: var(--font-size-1);
  color: var(--color-text);
  user-select: none;
  display: flex;
  justify-self: center;
  align-self: center;
  height: var(--font-size-1);
  line-height: var(--font-size-1);
}

.z-radio--small--square .z-radio__label {
  /* font-size: var(--font-size-0);
  color: var(--color-text);
  user-select: none;
  display: flex;
  justify-self: center;
  align-self: center;
  height: var(--font-size-0);
  line-height: var(--font-size-0); */
}

/* 为不同类型的单选按钮定义选中状态样式 */
.z-radio--default .z-radio__input:checked {
  border: 1px solid var(--color-default);
  background-color: var(--color-bg);
}

.z-radio--default .z-radio__input:checked::after {
  background-color: var(--color-default);
}

.z-radio--primary .z-radio__input {
  border: 1px solid var(--color-primary);
}

.z-radio--primary .z-radio__input:checked {
  border: 1px solid var(--color-primary);
  background-color: var(--color-bg);
}

.z-radio--primary .z-radio__input:checked::after {
  background-color: var(--color-primary);
}

.z-radio--success .z-radio__input {
  border: 1px solid var(--color-success);
}

.z-radio--success .z-radio__input:checked {
  border: 1px solid var(--color-success);
  background-color: var(--color-bg);
}

.z-radio--success .z-radio__input:checked::after {
  background-color: var(--color-success);
}

.z-radio--warning .z-radio__input {
  border: 1px solid var(--color-warning);
}

.z-radio--warning .z-radio__input:checked {
  border: 1px solid var(--color-warning);
  background-color: var(--color-bg);
}

.z-radio--warning .z-radio__input:checked::after {
  background-color: var(--color-warning);
}

.z-radio--danger .z-radio__input {
  border: 1px solid var(--color-danger);
}

.z-radio--danger .z-radio__input:checked {
  border: 1px solid var(--color-danger);
  background-color: var(--color-bg);
}

.z-radio--danger .z-radio__input:checked::after {
  background-color: var(--color-danger);
}

.z-radio--info .z-radio__input {
  border: 1px solid var(--color-info);
}

.z-radio--info .z-radio__input:checked {
  border: 1px solid var(--color-info);
  background-color: var(--color-bg);
}

.z-radio--info .z-radio__input:checked::after {
  background-color: var(--color-info);
}

/* 方形样式 */
.z-radio--square .z-radio__input {
  border-radius: 0;
}

.z-radio--square .z-radio__input:checked::after {
  border-radius: 0;
}

/* 按钮样式 */
.z-radio--button {
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius-0);
  padding: var(--padding-2);
}

.z-radio--small--button {
  font-size: var(--font-size-0);
  padding: var(--padding-1);
}

.z-radio--medium--button {
  padding: var(--padding-2);
  font-size: var(--font-size-1);
}

.z-radio--large--button {
  padding: var(--padding-3);
  font-size: var(--font-size-2);
}

.z-radio--button.z-radio--checked {
  border-color: var(--color-default-active);
}

.z-radio--button .z-radio__input {
  position: absolute;
  opacity: 0;
  display: none;
}
.z-radio--button {
  .z-radio__label {
    color: var(--color-text-1);
  }
}
.z-radio--button.z-radio--checked.z-radio--default {
  border-color: var(--color-default);
  .z-radio__label {
    color: var(--color-default);
  }
}

.z-radio--button.z-radio--checked.z-radio--primary {
  border-color: var(--color-primary);
  .z-radio__label {
    color: var(--color-primary);
  }
}

.z-radio--button.z-radio--checked.z-radio--success {
  border-color: var(--color-success);
  .z-radio__label {
    color: var(--color-success);
  }
}

.z-radio--button.z-radio--checked.z-radio--warning {
  border-color: var(--color-warning);
  .z-radio__label {
    color: var(--color-warning);
  }
}

.z-radio--button.z-radio--checked.z-radio--danger {
  border-color: var(--color-danger);
  .z-radio__label {
    color: var(--color-danger);
  }
}

.z-radio--button.z-radio--checked.z-radio--info {
  border-color: var(--color-info);
  .z-radio__label {
    color: var(--color-info);
  }
}

/* 卡片样式 */
.z-radio--card {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 0px;
  transition: all 0.2s;
}

.z-radio--card.z-radio--checked {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Type-based color styles */
.z-radio--default:checked {
  border-color: var(--color-default);
  background-color: var(--color-default);
}

.z-radio--primary:checked {
  border-color: var(--color-primary);
  /* background-color: var(--color-primary); */
}

.z-radio--success:checked {
  border-color: var(--color-success);
  background-color: var(--color-success);
}

.z-radio--warning:checked {
  border-color: var(--color-warning);
  background-color: var(--color-warning);
}

.z-radio--danger:checked {
  border-color: var(--color-danger);
  background-color: var(--color-danger);
}

.z-radio--info:checked {
  border-color: var(--color-info);
  background-color: var(--color-info);
}

.z-radio--card .z-radio__input {
  position: absolute;
  opacity: 0;
}

.z-radio--card .z-radio__label {
  font-size: var(--font-size);
  font-weight: 500;
}

/* 选项卡样式 */
.z-radio--tab {
  border-bottom: 1px solid var(--color-border);
  border-radius: 0;
  padding: 10px 20px;
  /* border-bottom: 2px solid transparent; */
  margin-right: -1px;
  font-size: var(--font-size);
  font-weight: 500;
}

.z-radio--tab:first-child {
  /* border-radius: 4px 0 0 4px; */
}

.z-radio--tab:last-child {
  /* border-radius: 0 4px 4px 0; */
}

.z-radio--tab.z-radio--checked {
  /* border-top-color: var(--color-border); */
  border-left-color: var(--color-border);
  border-right-color: var(--color-border);
  background-color: var(--color-bg);
  border-bottom: 2px solid transparent;
  z-index: 1;
}

/* 为tab形状添加选中状态的中间圆点样式 */
.z-radio--tab .z-radio__input {
  position: relative;
  opacity: 1;
}

.z-radio--tab.z-radio--checked .z-radio__input::after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.z-radio--tab.z-radio--default.z-radio--checked {
  border-bottom-color: var(--color-default);
}

.z-radio--tab.z-radio--primary.z-radio--checked {
  border-bottom-color: var(--color-primary);
}

.z-radio--tab.z-radio--success.z-radio--checked {
  border-bottom-color: var(--color-success);
}

.z-radio--tab.z-radio--warning.z-radio--checked {
  border-bottom-color: var(--color-warning);
}

.z-radio--tab.z-radio--danger.z-radio--checked {
  border-bottom-color: var(--color-danger);
}

.z-radio--tab.z-radio--info.z-radio--checked {
  border-bottom-color: var(--color-info);
}

.z-radio--tab-line {
  border-bottom: 2px solid var(--color-border);
  /* border-radius: 100%; */
  padding: 10px 20px;
  /* border-bottom: 2px solid transparent; */
  margin-right: -1px;
  font-size: var(--font-size);
  /* font-weight: 500; */
}
.z-radio--tab-line .z-radio__input {
  display: none;
}
.z-radio--tab-line.z-radio--checked {
  border-bottom-color: var(--color-default);
}

.z-radio--tab-line.z-radio--default.z-radio--checked {
  border-bottom-color: var(--color-default);
}

.z-radio--tab-line.z-radio--primary.z-radio--checked {
  border-bottom-color: var(--color-primary);
}

.z-radio--tab-line.z-radio--success.z-radio--checked {
  border-bottom-color: var(--color-success);
}

.z-radio--tab-line.z-radio--warning.z-radio--checked {
  border-bottom-color: var(--color-warning);
}

.z-radio--tab-line.z-radio--danger.z-radio--checked {
  border-bottom-color: var(--color-danger);
}

.z-radio--tab-line.z-radio--info.z-radio--checked {
  border-bottom-color: var(--color-info);
}

.z-radio-group--tab-button {
  background-color: var(--color-bg-hover-1);
  width: fit-content;
  gap: 5px;
  /* padding: 0.2rem; */
  height: var(--height-2);
  box-sizing: border-box;
  padding: 0.2rem;
  /* border: 1px solid var(--color-border-1); */
}

.z-radio-group--tab-button .z-radio__input {
  display: none;
}

.z-radio--tab-button {
  line-height: 100%;
  /* height: var(--height-2); */
  display: flex;
  padding: var(--padding-1);
  align-items: center;
  justify-content: center;
}

.z-radio--tab-button .z-radio__label {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  color: var(--color-text-2);
}

.z-radio--tab-button.z-radio--checked {
  background-color: var(--color-background);
}

.z-radio--tab-button.z-radio--default.z-radio--checked {
  .z-radio__label {
    color: var(--color-default);
  }
}

.z-radio--tab-button.z-radio--primary.z-radio--checked {
  .z-radio__label {
    color: var(--color-primary);
  }
}

.z-radio--tab-button.z-radio--success.z-radio--checked {
  .z-radio__label {
    color: var(--color-success);
  }
}

.z-radio--tab-button.z-radio--warning.z-radio--checked {
  .z-radio__label {
    color: var(--color-warning);
  }
}

.z-radio--tab-button.z-radio--danger.z-radio--checked {
  .z-radio__label {
    color: var(--color-danger);
  }
}

.z-radio--tab-button.z-radio--info.z-radio--checked {
  .z-radio__label {
    color: var(--color-info);
  }
}

.z-radio__input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.z-radio-group--disabled .z-radio {
  cursor: not-allowed;
}

.z-radio--disabled .z-radio__label {
  color: var(--color-text-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
