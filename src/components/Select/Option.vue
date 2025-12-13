<template>
  <div
    class="x-select-option"
    :class="[
      selectContext.type && isSelected
        ? `is-selected--${selectContext.type.value}`
        : '',
      {
        'is-disabled': effectiveDisabled,
        'is-hover': isHover,
        [`x-select-option--${effectiveIconPosition}`]: effectiveIconPosition,
      },
    ]"
    :style="optionStyle"
    @click="handleClick"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- 左侧图标 -->
    <div
      v-if="effectiveIconPosition === 'left' && isSelected"
      class="x-select-option__icon"
    >
      <slot name="icon" v-bind="{ isSelected, disabled: effectiveDisabled }">
        <svg
          class="x-select-option__check-icon"
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="currentColor"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </slot>
    </div>

    <slot name="default">{{ label || value }}</slot>

    <!-- 右侧图标 -->
    <div
      v-if="effectiveIconPosition === 'right' && isSelected"
      class="x-select-option__icon"
    >
      <slot name="icon" v-bind="{ isSelected, disabled: effectiveDisabled }">
        <svg
          class="x-select-option__check-icon"
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="currentColor"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { inject, computed, ref, useSlots } from 'vue';
import { useSelectStyles } from './composables/useSelectStyles';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: undefined,
    validator: val => ['left', 'right'].includes(val),
  },
});

const selectContext = inject('selectContext', {});
const optionGroupContext = inject('optionGroup', null);
const isHover = ref(false);
const slots = useSlots();

// 使用 composable 获取样式计算函数
const { getOptionStyle } = useSelectStyles();

// 计算有效的禁用状态（考虑分组禁用）
const effectiveDisabled = computed(() => {
  return props.disabled || optionGroupContext?.disabled?.value || false;
});

const effectiveIconPosition = computed(() => {
  return props.iconPosition || selectContext.iconPosition?.value || 'left';
});

// 计算选项的缩进样式（优化后）
const optionStyle = computed(() => {
  // 从 OptionGroup 上下文中获取层级信息
  if (optionGroupContext && optionGroupContext.level) {
    const level = optionGroupContext.level.value || 0;
    if (level > 0) {
      const styles = getOptionStyle(level);
      return {
        paddingLeft: `${styles.paddingLeft} !important`, // 使用 !important 确保优先级
      };
    }
  }

  return {};
});

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
  if (effectiveDisabled.value) return;

  let slotLabel = '';
  if (slots.default) {
    // 优化后的 slot 内容提取
    const slotContent = slots.default();
    if (slotContent && slotContent.length > 0) {
      const content = slotContent[0].children;
      if (typeof content === 'string') {
        slotLabel = content;
      }
    }
  }

  const label = props.label || slotLabel || props.value;

  if (selectContext.selectOption) {
    selectContext.selectOption({
      value: props.value,
      label: label,
      disabled: effectiveDisabled.value,
    });
  }
};
</script>

<style scoped>
.z-select-option {
  padding: var(--padding-2);
  /* min-width: var(--width-0); */
  max-width: 100%;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--color-text-2);
  font-size: var(--font-size-1);
  border-radius: var(--border-radius-0);
  display: flex;
  align-items: center;
  gap: 8px;
}

.z-select-option:hover {
  background-color: var(--color-bg-hover);
}

.z-select-option.is-hover {
  background-color: var(--color-bg-hover-1);
}

.z-select-option__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.z-select-option__check-icon {
  color: currentColor;
}

.z-select-option--right {
  justify-content: space-between;
}

.z-select-option--right .z-select-option__icon {
  margin-left: auto;
}

.is-selected--default {
  color: var(--color-default);
  background-color: var(--color-bg-hover-1);
}

.is-selected--primary {
  color: var(--color-primary);
  background-color: var(--color-bg-hover-1);
}

.is-selected--success {
  color: var(--color-success);
  background-color: var(--color-bg-hover-1);
}

.is-selected--info {
  color: var(--color-info);
  background-color: var(--color-bg-hover-1);
}

.is-selected--warning {
  color: var(--color-warning);
  background-color: var(--color-bg-hover-1);
}

.is-selected--danger {
  color: var(--color-danger);
  background-color: var(--color-bg-hover-1);
}

.z-select-option.is-disabled {
  color: var(--color-disabled-text-1);
  cursor: not-allowed;
  background-color: transparent;
}

.z-select-option.is-disabled:hover {
  background-color: transparent;
}
</style>
