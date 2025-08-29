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
        [`x-select-option--${effectiveIconPosition}`]: effectiveIconPosition,
      },
    ]"
    @click="handleClick"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- 左侧图标 -->
    <div
      v-if="effectiveIconPosition === 'left' && isSelected"
      class="x-select-option__icon"
    >
      <slot name="icon" v-bind="{ isSelected, disabled }">
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
      <slot name="icon" v-bind="{ isSelected, disabled }">
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
import { inject, computed, ref, useSlots } from "vue";

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
  iconPosition: {
    type: String,
    default: undefined,
    validator: (val) => ["left", "right"].includes(val),
  },
});

const selectContext = inject("selectContext", {});
const isHover = ref(false);
const slots = useSlots();

const effectiveIconPosition = computed(() => {
  return props.iconPosition || selectContext.iconPosition?.value || "left";
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
  if (props.disabled) return;

  let slotLabel = "";
  if (slots.default) {
    console.log(slots.default());
    const slotContent = slots.default();
    if (slotContent && slotContent.length > 0) {
      const content = slotContent[0].children;
      if (typeof content === "string") {
        slotLabel = content;
      }
    }
  }

  const label = props.label || slotLabel || props.value;

  if (selectContext.selectOption) {
    console.log({
      value: props.value,
      label: label,
      disabled: props.disabled,
    });

    selectContext.selectOption({
      value: props.value,
      label: label,
      disabled: props.disabled,
    });
  }
};
</script>

<style scoped>
.x-select-option {
  padding: var(--padding-2);
  cursor: pointer;
  transition: all 0.2s;
  color: var(--color-text-2);
  font-size: var(--font-size-1);
  border-radius: var(--border-radius-0);
  display: flex;
  align-items: center;
  gap: 8px;
}

.x-select-option:hover {
  background-color: var(--color-bg-hover);
}

.x-select-option.is-hover {
  background-color: var(--color-bg-hover-1);
}

.x-select-option__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.x-select-option__check-icon {
  color: currentColor;
}

.x-select-option--right {
  justify-content: space-between;
}

.x-select-option--right .x-select-option__icon {
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

.x-select-option.is-disabled {
  color: var(--color-disabled-text-1);
  cursor: not-allowed;
  background-color: transparent;
}

.x-select-option.is-disabled:hover {
  background-color: transparent;
}
</style>
