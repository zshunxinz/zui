<template>
  <div
    :class="[
      'x-slider',
      size ? `x-slider--${size}` : '',
      disabled ? 'is-disabled' : '',
      ...($attrs.class || []),
    ]"
    :style="{ ...($attrs.style as object), width, height }"
  >
    <div v-if="label" class="x-slider__label">{{ label }}</div>
    <div class="x-slider__wrapper">
      <div
        class="x-slider__track"
        :style="{
          backgroundColor: disabled
            ? 'var(--color-disabled)'
            : 'var(--color-border-1)',
          width: `100%`,
        }"
      ></div>
      <div
        class="x-slider__progress"
        :style="{
          backgroundColor: disabled
            ? 'var(--color-disabled)'
            : 'var(--color-default)',
          width: `${percentage}%`,
        }"
      ></div>
      <button
        ref="handleRef"
        :style="{
          left: `${percentage}%`,
        }"
        class="x-slider__handle"
        :class="{ 'is-active': isActive }"
        @mousedown="startDrag"
        @touchstart="startDrag"
        :disabled="disabled"
      ></button>
      <div v-if="showValue" class="x-slider__value">{{ value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';

// 定义组件类型
export interface SliderProps {
  modelValue?: number | string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  label?: string;
  disabled?: boolean;
  showValue?: boolean;
  size?: 'small' | 'medium' | 'large';
  width?: string;
  height?: string;
  'validate-event'?: boolean;
}

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  min: {
    type: [Number, String],
    default: 0,
  },
  max: {
    type: [Number, String],
    default: 100,
  },
  step: {
    type: [Number, String],
    default: 1,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showValue: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
    validator: value => ['small', 'medium', 'large'].includes(value as string),
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: 'auto',
  },
  'validate-event': {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits([
  'update:modelValue',
  'input',
  'change',
  'drag-start',
  'drag-end',
  'validate-event',
]);

const value = ref(Number(props.modelValue));
const percentage = computed(() => {
  const min = Number(props.min);
  const max = Number(props.max);
  return ((value.value - min) / (max - min)) * 100;
});
const isActive = ref(false);
const handleRef = ref<HTMLButtonElement>();
let startX = 0;
let trackRect: DOMRect | null = null;

const updateValue = (newValue: number) => {
  const min = Number(props.min);
  const max = Number(props.max);
  const step = Number(props.step);

  // 限制值在范围内
  let val = Math.max(min, Math.min(max, newValue));

  // 按步长调整值
  val = Math.round(val / step) * step;

  // 避免浮点精度问题
  val = Number(val.toFixed(10));

  if (val !== value.value) {
    value.value = val;
    emit('update:modelValue', val);
    emit('input', val);
    emit('change', val);

    if (props['validate-event']) {
      emit('validate-event', val);
    }
  }
};

const getValueByPosition = (clientX: number) => {
  if (!trackRect) return value.value;

  const min = Number(props.min);
  const max = Number(props.max);
  const rect = trackRect;

  let ratio = (clientX - rect.left) / rect.width;
  ratio = Math.max(0, Math.min(1, ratio));

  return min + (max - min) * ratio;
};

const startDrag = (e: MouseEvent | TouchEvent) => {
  if (props.disabled) return;

  e.preventDefault();
  isActive.value = true;
  emit('drag-start', value.value);

  // 获取滑块轨道的位置信息
  const wrapperEl = handleRef.value?.parentElement;
  if (wrapperEl) {
    trackRect = wrapperEl.getBoundingClientRect();
  }

  // 添加事件监听器
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchmove', handleMouseMove);
  document.addEventListener('touchend', handleMouseUp);
};

const handleMouseMove = (e: MouseEvent | TouchEvent) => {
  if (!isActive.value) return;

  const clientX = e.type.startsWith('mouse') ? e.clientX : e.touches[0].clientX;
  updateValue(getValueByPosition(clientX));
};

const handleMouseUp = () => {
  if (!isActive.value) return;

  isActive.value = false;
  emit('drag-end', value.value);

  // 移除事件监听器
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
  document.removeEventListener('touchmove', handleMouseMove);
  document.removeEventListener('touchend', handleMouseUp);
};

// 监听外部值的变化
watch(
  () => props.modelValue,
  newVal => {
    value.value = Number(newVal);
  },
  { immediate: true }
);

// 组件挂载后添加点击轨道改变值的功能
onMounted(() => {
  nextTick(() => {
    const wrapperEl = handleRef.value?.parentElement;
    if (wrapperEl) {
      wrapperEl.addEventListener('click', (e: MouseEvent) => {
        if (props.disabled || isActive.value || e.target === handleRef.value)
          return;

        trackRect = wrapperEl.getBoundingClientRect();
        updateValue(getValueByPosition(e.clientX));
      });
    }
  });
});

// 组件卸载时清理事件监听器
onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
  document.removeEventListener('touchmove', handleMouseMove);
  document.removeEventListener('touchend', handleMouseUp);
});
</script>

<style scoped>
.x-slider {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: var(--width-1);
}

.x-slider__label {
  margin-bottom: var(--space-2);
  font-size: var(--font-size);
  color: var(--color-text);
}

.x-slider__wrapper {
  position: relative;
  width: 100%;
  height: 6px;
  cursor: pointer;
}

.x-slider--small .x-slider__wrapper {
  height: 4px;
}

.x-slider--large .x-slider__wrapper {
  height: 8px;
}

.x-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  border-radius: 3px;
}

.x-slider__progress {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 100%;
  border-radius: 3px;
}

.x-slider__handle {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: var(--color-background);
  border: 2px solid var(--color-default);
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  /* transition: all 0.2s ease; */
  margin-top: -2px;
}

.x-slider--small .x-slider__handle {
  width: 16px;
  height: 16px;
}

.x-slider--large .x-slider__handle {
  width: 24px;
  height: 24px;
}

.x-slider__handle:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.x-slider__handle.is-active {
  transform: translate(-50%, -50%) scale(1.2);
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
}

.x-slider.is-disabled .x-slider__wrapper {
  cursor: not-allowed;
}

.x-slider.is-disabled .x-slider__handle {
  cursor: not-allowed;
  border-color: var(--color-disabled);
}

.x-slider__value {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  background-color: var(--color-text);
  color: var(--color-background);
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
}

/* 暗色模式适配 */
:root.dark .x-slider__handle {
  background-color: var(--color-background);
  border-color: var(--color-default);
}

:root.dark .x-slider__handle.is-active {
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
}

:root.dark .x-slider__value {
  background-color: var(--color-text);
  color: var(--color-background);
}
</style>
