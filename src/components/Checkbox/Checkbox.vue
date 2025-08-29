<template>
  <label
    class="x-checkbox"
    :class="[checkboxSize, borderStyle, disabledClass, colorClass]"
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
    <span class="x-checkbox__inner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="x-checkbox__icon"
        :class="{
          'x-checkbox__icon--checked': modelValue,
          'x-checkbox__icon--indeterminate': indeterminate,
        }"
      >
        <path d="M20 6 9 17l-5-5" v-if="!indeterminate" />
        <path d="M6 12 L18 12" v-if="indeterminate" />
      </svg>
    </span>
    <span class="x-checkbox__label" v-if="$slots.default"><slot></slot></span>
    <span class="x-checkbox__label" v-else>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch, inject, onMounted, onUnmounted } from "vue";
import { useModelWrapper } from "./useModelWrapper";

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  label: {
    type: [String, Number, Boolean],
    default: "",
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
    default: "medium",
    validator: (value) => ["large", "medium", "small"].includes(value),
  },
  name: {
    type: String,
    default: "",
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
    default: "default",
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean | string | number): void;
  (e: "change", value: boolean | string | number): void;
}>();

interface CheckboxGroupContext {
  registerCheckbox: (checkbox: any) => void;
  unregisterCheckbox: (checkbox: any) => void;
  props: any;
  handleChange: (value: any) => void;
}
const checkboxGroup = inject<CheckboxGroupContext | null>(
  "CheckboxGroup",
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
  "modelValue",
  "change"
);

const effectiveSize = computed(() => checkboxGroup?.props.size ?? props.size);
const checkboxSize = computed(() =>
  effectiveSize.value ? `x-checkbox--${effectiveSize.value}` : ""
);
const borderStyle = computed(() => (props.border ? "x-checkbox--border" : ""));
const colorClass = computed(() => `x-checkbox--${props.color || "default"}`);
const isDisabled = computed(
  () => checkboxGroup?.props.disabled ?? props.disabled
);
const disabledClass = computed(() => (isDisabled.value ? "is-disabled" : ""));

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
  (val) => {
    if (val !== undefined && val !== modelValue.value) {
      modelValue.value = val;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.x-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  font-size: var(--font-size);
}

.x-checkbox.is-disabled {
  cursor: not-allowed;
  background-color: transparent !important;

  .x-checkbox__label {
    color: var(--color-text-muted);
  }
  .x-checkbox--default.is-disabled .x-checkbox__inner {
    background-color: var(--color-default-disabled);
    border-color: var(--color-default-disabled);
  }
  .x-checkbox--primary.is-disabled .x-checkbox__inner {
    background-color: var(--color-primary-disabled);
    border-color: var(--color-primary-disabled);
  }
  .x-checkbox--success.is-disabled .x-checkbox__inner {
    background-color: var(--color-success-disabled);
    border-color: var(--color-success-disabled);
  }
  .x-checkbox--warning.is-disabled .x-checkbox__inner {
    background-color: var(--color-warning-disabled);
    border-color: var(--color-warning-disabled);
  }
  .x-checkbox--danger.is-disabled .x-checkbox__inner {
    background-color: var(--color-danger-disabled);
    border-color: var(--color-danger-disabled);
  }
  .x-checkbox--info.is-disabled .x-checkbox__inner {
    background-color: var(--color-info-disabled);
    border-color: var(--color-info-disabled);
  }
}

.x-checkbox__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}

.x-checkbox__inner {
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

.x-checkbox--default .x-checkbox__input:checked + .x-checkbox__inner {
  background-color: var(--color-background);
  border-color: var(--color-default);
}
.x-checkbox--primary .x-checkbox__input:checked + .x-checkbox__inner {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
.x-checkbox--success .x-checkbox__input:checked + .x-checkbox__inner {
  background-color: var(--color-success);
  border-color: var(--color-success);
}
.x-checkbox--warning .x-checkbox__input:checked + .x-checkbox__inner {
  background-color: var(--color-warning);
  border-color: var(--color-warning);
}
.x-checkbox--danger .x-checkbox__input:checked + .x-checkbox__inner {
  background-color: var(--color-danger);
  border-color: var(--color-danger);
}
.x-checkbox--info .x-checkbox__input:checked + .x-checkbox__inner {
  background-color: var(--color-info);
  border-color: var(--color-info);
}

.x-checkbox__icon {
  width: 12px;
  height: 12px;
  color: var(--color-text);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.x-checkbox__icon--checked {
  opacity: 1;
}

.x-checkbox__input:checked + .x-checkbox__inner .x-checkbox__icon {
  opacity: 1;
}

.x-checkbox__input:indeterminate + .x-checkbox__inner .x-checkbox__icon {
  opacity: 1;
}

.x-checkbox__input:disabled + .x-checkbox__inner {
  border-color: var(--color-disabled);
}

.x-checkbox__input:disabled + .x-checkbox__inner .x-checkbox__icon {
  color: var(--color-disabled-text);
}

.x-checkbox__input:disabled + .x-checkbox__inner {
  color: var(--color-disabled);
  /* background-color: var(--color-disabled); */
}

.x-checkbox__label {
  margin-left: 6px;
  color: var(--color-text);
}

.x-checkbox__label.is-disabled {
  margin-left: 2px;
  color: var(--color-text-1);
}

.x-checkbox.is-disabled .x-checkbox__label:disabled {
  /* color: var(--color-disabled); */
  color: var(--color-disabled-text) !important;
}

.x-checkbox--border {
  padding: 8px 12px;
  border-radius: var(--border-radius-0);
  border: 1px solid var(--color-border);
}

.x-checkbox--large .x-checkbox__inner {
  width: var(--font-size-2);
  height: var(--font-size-2);
  font-size: var(--font-size-2);
}

.x-checkbox--medium .x-checkbox__inner {
  width: var(--font-size-1);
  height: var(--font-size-1);
  font-size: var(--font-size-1);
}

.x-checkbox--small .x-checkbox__inner {
  width: var(--font-size-0);
  height: var(--font-size-0);
  font-size: var(--font-size-0);
}

.x-checkbox--small .x-checkbox__input:checked + .x-checkbox__inner::after {
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

.x-checkbox--medium .x-checkbox__input:checked + .x-checkbox__inner::after {
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
