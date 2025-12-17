<template>
  <label
    class="z-checkbox"
    :class="[checkboxSize, borderStyle, disabledClass, colorClass]"
  >
    <input
      type="checkbox"
      class="z-checkbox__input"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="handleChange"
    />
    <span class="z-checkbox__inner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="z-checkbox__icon"
        :class="{
          'z-checkbox__icon--checked': modelValue,
          'z-checkbox__icon--indeterminate': indeterminate,
        }"
      >
        <path d="M20 6 9 17l-5-5" v-if="!indeterminate" />
        <path d="M6 12 L18 12" v-if="indeterminate" />
      </svg>
    </span>
    <span class="z-checkbox__label" v-if="$slots.default">
      <slot></slot>
    </span>
    <span class="z-checkbox__label" v-else>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch, inject, onMounted, onUnmounted } from 'vue';
import { useModelWrapper } from './useModelWrapper';

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  trueLabel: {
    type: [String, Number],
    default: true,
  },
  falseLabel: {
    type: [String, Number],
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['large', 'medium', 'small'].includes(value),
  },
  name: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'default',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | string | number): void;
  (e: 'change', value: boolean | string | number): void;
}>();

interface CheckboxGroupContext {
  registerCheckbox: (checkbox: any) => void;
  unregisterCheckbox: (checkbox: any) => void;
  props: any;
  handleChange: (value: any) => void;
}
const checkboxGroup = inject<CheckboxGroupContext | null>(
  'CheckboxGroup',
  null
);

onMounted(() => {
  if (checkboxGroup) {
    checkboxGroup.registerCheckbox(props);
  }
});

onUnmounted(() => {
  if (checkboxGroup) {
    checkboxGroup.unregisterCheckbox(props);
  }
});

const { modelValue, handleChange: emitChange } = useModelWrapper(
  props,
  emit,
  'modelValue',
  'change'
);

const effectiveSize = computed(() => checkboxGroup?.props.size ?? props.size);
const checkboxSize = computed(() =>
  effectiveSize.value ? `z-checkbox--${effectiveSize.value}` : ''
);
const borderStyle = computed(() => (props.border ? 'z-checkbox--border' : ''));
const colorClass = computed(() => `z-checkbox--${props.color || 'default'}`);
const isDisabled = computed(
  () => checkboxGroup?.props.disabled ?? props.disabled
);
const disabledClass = computed(() => (isDisabled.value ? 'is-disabled' : ''));

const handleChange = (e: Event) => {
  const checked = (e.target as HTMLInputElement).checked;
  const value = checked ? props.trueLabel ?? true : props.falseLabel ?? false;
  if (checkboxGroup) {
    checkboxGroup.handleChange(value);
  } else {
    emitChange(value);
  }
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
  font-size: var(--font-size);
}

.z-checkbox.is-disabled {
  cursor: not-allowed;
  background-color: transparent !important;

  .z-checkbox__label {
    color: var(--color-text-muted);
  }

  .z-checkbox--default.is-disabled .z-checkbox__inner {
    background-color: var(--color-default-disabled);
    border-color: var(--color-default-disabled);
  }

  .z-checkbox--primary.is-disabled .z-checkbox__inner {
    background-color: var(--color-primary-disabled);
    border-color: var(--color-primary-disabled);
  }

  .z-checkbox--success.is-disabled .z-checkbox__inner {
    background-color: var(--color-success-disabled);
    border-color: var(--color-success-disabled);
  }

  .z-checkbox--warning.is-disabled .z-checkbox__inner {
    background-color: var(--color-warning-disabled);
    border-color: var(--color-warning-disabled);
  }

  .z-checkbox--danger.is-disabled .z-checkbox__inner {
    background-color: var(--color-danger-disabled);
    border-color: var(--color-danger-disabled);
  }

  .z-checkbox--info.is-disabled .z-checkbox__inner {
    background-color: var(--color-info-disabled);
    border-color: var(--color-info-disabled);
  }
}

.z-checkbox__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}

.z-checkbox__inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-default);
  border-radius: var(--border-radius-0);
  transition: all 0.2s ease;
  background-color: transparent;
}

.z-checkbox--large .z-checkbox__inner {
  width: var(--font-size-2);
  height: var(--font-size-2);
  font-size: var(--font-size-2);

  .z-checkbox__icon {
    width: var(--font-size-2);
    height: var(--font-size-2);
    font-size: var(--font-size-2);
    color: var(--color-background);
    opacity: 0;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
}

.z-checkbox--medium .z-checkbox__inner {
  width: var(--font-size-1);
  height: var(--font-size-1);
  font-size: var(--font-size-1);

  .z-checkbox__icon {
    width: var(--font-size-1);
    height: var(--font-size-1);
    font-size: var(--font-size-1);
    color: var(--color-background);
    opacity: 0;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
}

.z-checkbox--small .z-checkbox__inner {
  width: var(--font-size-0);
  height: var(--font-size-0);
  font-size: var(--font-size-0);
  .z-checkbox__icon {
    width: var(--font-size-0);
    height: var(--font-size-0);
    font-size: var(--font-size-0);
    color: var(--color-background);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
}

.z-checkbox--default .z-checkbox__input:checked + .z-checkbox__inner {
  background-color: var(--color-default);
  border-color: var(--color-default);
}
.z-checkbox--primary .z-checkbox__input + .z-checkbox__inner {
  border-color: var(--color-primary);
}

.z-checkbox--primary .z-checkbox__input:checked + .z-checkbox__inner {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.z-checkbox--success .z-checkbox__input + .z-checkbox__inner {
  border-color: var(--color-success);
}
.z-checkbox--success .z-checkbox__input:checked + .z-checkbox__inner {
  background-color: var(--color-success);
  border-color: var(--color-success);
}

.z-checkbox--warning .z-checkbox__input + .z-checkbox__inner {
  border-color: var(--color-warning);
}

.z-checkbox--warning .z-checkbox__input:checked + .z-checkbox__inner {
  background-color: var(--color-warning);
  border-color: var(--color-warning);
}

.z-checkbox--danger .z-checkbox__input + .z-checkbox__inner {
  border-color: var(--color-danger);
}

.z-checkbox--danger .z-checkbox__input:checked + .z-checkbox__inner {
  background-color: var(--color-danger);
  border-color: var(--color-danger);
}

.z-checkbox--info .z-checkbox__input + .z-checkbox__inner {
  border-color: var(--color-info);
}

.z-checkbox--info .z-checkbox__input:checked + .z-checkbox__inner {
  background-color: var(--color-info);
  border-color: var(--color-info);
}

.z-checkbox__icon--checked {
  opacity: 1;
}

.z-checkbox__input:checked + .z-checkbox__inner .z-checkbox__icon {
  opacity: 1;
}

.z-checkbox__input:indeterminate + .z-checkbox__inner .z-checkbox__icon {
  opacity: 1;
}

.z-checkbox__input:disabled + .z-checkbox__inner {
  border-color: var(--color-disabled);
}

.z-checkbox__input:disabled + .z-checkbox__inner .z-checkbox__icon {
  color: var(--color-disabled-text);
}

.z-checkbox__input:disabled + .z-checkbox__inner {
  color: var(--color-disabled);
  /* background-color: var(--color-disabled); */
}

.z-checkbox__label {
  margin-left: 6px;
  color: var(--color-text);
}

.z-checkbox__label.is-disabled {
  margin-left: 2px;
  color: var(--color-text-1);
}

.z-checkbox.is-disabled .z-checkbox__label:disabled {
  /* color: var(--color-disabled); */
  color: var(--color-disabled-text) !important;
}

.z-checkbox--border {
  padding: 8px 12px;
  border-radius: var(--border-radius-0);
  border: 1px solid var(--color-border);
}

.z-checkbox--small .z-checkbox__input:checked + .z-checkbox__inner::after {
  width: var(--font-size-2);
  /* height: var(--font-size-2); */
  /* font-size: var(--font-size-2); */
  border: 2px solid var(--color-text);
  /* content: "";
  position: absolute;
  top: 38%;
  left: -5%;
  width: 3px;
  height: 8px;
  border: 1px solid var(--color-text);
  border-width: 0 1px 1px 0;
  transform: rotate(45deg) translateY(-70%) translateX(10%); */
}

.z-checkbox--medium .z-checkbox__input:checked + .z-checkbox__inner::after {
  /* content: "";
  position: absolute;
  top: 40%;
  left: -15%;
  width: 4px;
  height: 9px;
  border: 2px solid var(--color-text);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) translateY(-70%) translateX(10%); */
}
</style>
