<template>
  <label
    class="x-switch"
    :class="[
      sizeClass,
      colorClass,
      `x-switch--${props.shape}`,
      {
        'is-checked': isChecked,
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
    :style="switchStyle"
  >
    <input
      type="checkbox"
      class="x-switch__input"
      :checked="isChecked"
      :disabled="disabled || loading"
      @change="handleChange"
    />
    <span class="x-switch__core">
      <span class="x-switch__button">
        <slot name="icon"> </slot>
      </span>
    </span>
    <span
      v-if="$slots.default || inactiveText || activeText"
      class="x-switch__label"
    >
      <slot>
        <span>{{ isChecked ? activeText : inactiveText }}</span>
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue?: boolean | string | number;
  activeValue?: boolean | string | number;
  inactiveValue?: boolean | string | number;
  disabled?: boolean;
  loading?: boolean;
  size?: "small" | "default" | "large";
  type?: string;
  activeText?: string;
  inactiveText?: string;
  activeColor?: string;
  inactiveColor?: string;
  shape?: "round" | "square";
}

interface Emits {
  (e: "update:modelValue", value: boolean | string | number): void;
  (e: "change", value: boolean | string | number): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  activeValue: true,
  inactiveValue: false,
  disabled: false,
  loading: false,
  size: "default",
  type: "default",
  shape: "round",
});

const emit = defineEmits<Emits>();

const isChecked = computed(() => props.modelValue === props.activeValue);

const sizeClass = computed(() => `x-switch--${props.size}`);

const colorClass = computed(() => {
  if (props.activeColor && props.inactiveColor) {
    return `x-switch--free`;
  } else {
    return `x-switch--${props.type}`;
  }
});

const switchStyle = computed(() => {
  const style: any = {};
  style["--switch-active-color"] = props.activeColor;
  style["--switch-inactive-color"] = props.inactiveColor;
  return style;
});

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.checked ? props.activeValue : props.inactiveValue;

  emit("update:modelValue", value);
  emit("change", value);
};
</script>

<style scoped>
.x-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
}

.x-switch.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.x-switch.is-loading {
  cursor: not-allowed;
  opacity: 0.8;
}

.x-switch__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.x-switch__core {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;
  border-radius: 11px;
  background-color: var(--switch-inactive-color, var(--color-disabled-text));
  transition: all 0.3s ease;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
}

.x-switch--square .x-switch__core {
  border-radius: 0px;
}

.x-switch--small .x-switch__core {
  width: 36px;
  height: 18px;
  border-radius: 9px;
}

.x-switch--small.x-switch--square .x-switch__core {
  border-radius: 0px;
}

.x-switch--large .x-switch__core {
  width: 52px;
  height: 26px;
  border-radius: 13px;
}

.x-switch--large.x-switch--square .x-switch__core {
  border-radius: 0px;
}

.x-switch.is-checked .x-switch__core {
  background-color: var(--switch-active-color, var(--color-default));
}

.x-switch__button {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.x-switch--square .x-switch__button {
  border-radius: 0px;
}

.x-switch--small .x-switch__button {
  width: 14px;
  height: 14px;
}

.x-switch--small.x-switch--square .x-switch__button {
  border-radius: 0px;
}

.x-switch--large .x-switch__button {
  width: 22px;
  height: 22px;
}

.x-switch--large.x-switch--square .x-switch__button {
  border-radius: 0px;
}

.x-switch.is-checked .x-switch__button {
  transform: translateX(22px);
}

.x-switch--small.is-checked .x-switch__button {
  transform: translateX(18px);
}

.x-switch--large.is-checked .x-switch__button {
  transform: translateX(26px);
}

.x-switch__label {
  margin-left: 8px;
  font-size: var(--font-size-base);
  color: var(--color-text);
}

.x-switch--small .x-switch__label {
  font-size: var(--font-size-small);
}

.x-switch--large .x-switch__label {
  font-size: var(--font-size-large);
}
/* 颜色主题 - 修复自定义颜色优先级 */
.x-switch--default.is-checked .x-switch__core {
  background-color: var(--switch-active-color, var(--color-default-1));
}

.x-switch--primary.is-checked .x-switch__core {
  background-color: var(--switch-active-color, var(--color-primary));
}

.x-switch--success.is-checked .x-switch__core {
  background-color: var(--switch-active-color, var(--color-success));
}

.x-switch--warning.is-checked .x-switch__core {
  background-color: var(--switch-active-color, var(--color-warning));
}

.x-switch--danger.is-checked .x-switch__core {
  background-color: var(--switch-active-color, var(--color-danger));
}

.x-switch--info.is-checked .x-switch__core {
  background-color: var(--switch-active-color, var(--color-info));
}

.x-switch--free.is-checked .x-switch__core {
  background-color: var(--switch-active-color);
}

/* 加载状态动画 */
.x-switch__loading {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  animation: x-switch-spin 1s linear infinite;
}

.x-switch--small .x-switch__loading {
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  border-width: 1.5px;
}

.x-switch--large .x-switch__loading {
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-width: 2.5px;
}

@keyframes x-switch-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 完全重写的加载状态样式 */
.x-switch.is-loading {
  position: relative;
}

.x-switch.is-loading .x-switch__core {
  position: relative;
  overflow: hidden;
  background-color: var(--switch-inactive-color, var(--color-disabled-text));
}

.x-switch.is-loading .x-switch__core::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.6) 60%,
    transparent
  );
  animation: x-switch-shimmer 1s infinite;
}

@keyframes x-switch-shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
/* 修复转圈位置的加载状态样式 */
.x-switch.is-loading .x-switch__button {
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.x-switch.is-loading .x-switch__button::before {
  content: "";
  /* width: 12px;
  height: 12px;
  border: 2px solid transparent;
  border-top: 3px solid currentColor;
  border-radius: 50%;
  animation: x-switch-spin 1s linear infinite;
  flex-shrink: 0; */
}

.x-switch--small.is-loading .x-switch__button::before {
  width: 8px;
  height: 8px;
  border-width: 1.5px;
}

.x-switch--large.is-loading .x-switch__button::before {
  width: 14px;
  height: 14px;
  border-width: 2px;
}

@keyframes x-switch-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.x-switch.is-loading.is-checked .x-switch__core {
  background-color: var(--switch-active-color, var(--color-default));
}

.x-switch.is-loading.is-checked .x-switch__button {
  transform: translateX(22px);
}

.x-switch--small.is-loading.is-checked .x-switch__button {
  transform: translateX(18px);
}

.x-switch--large.is-loading.is-checked .x-switch__button {
  transform: translateX(26px);
}
/* 清理旧的loading样式 */
.x-switch__loading {
  display: none;
}

.x-switch--small .x-switch__loading,
.x-switch--large .x-switch__loading {
  display: none;
}
</style>
