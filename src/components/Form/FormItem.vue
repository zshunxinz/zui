<template>
  <div
    class="x-form-item"
    :class="[
      {
        'x-form-item--error': hasError,
        'x-form-item--required': required,
        'x-form-item--disabled': disabled,
        'x-form-item--label-left': labelPosition.value === 'left',
        'x-form-item--label-right': labelPosition.value === 'right',
        'x-form-item--label-top-left': labelPosition.value === 'top-left',
        'x-form-item--label-top-right': labelPosition.value === 'top-right',
      },
    ]"
  >
    <div
      v-if="label"
      class="x-form-item__label"
      :style="{
        width: labelWidthD.value,
        textAlign: labelTextAlign.value,
        alignItems: labelAlignItems.value,
        justifyContent: labelJustifyContent.value,
      }"
    >
      {{ label }}
    </div>
    <div
      class="x-form-item__content"
      :class="{
        'x-form-item__content--label-right': labelPosition === 'right',
      }"
    >
      <slot></slot>
      <div v-if="hasError" class="x-form-item__error">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed, watch } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  prop: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  labelPosition: {
    type: String,
    default: undefined,
  },
  labelTextAlign: {
    type: String,
    default: undefined,
  },
  labelWidth: {
    type: String,
    default: "100px",
  },
  LabelAlignItems: {
    type: String,
    default: "center",
  },
  LabelJustifyContent: {
    type: String,
    default: "start",
  },
});

// 从Form上下文注入数据
const formContext = inject("formContext", {});

// 计算属性
const labelWidthD = computed(() => formContext?.labelWidth || props.labelWidth);
const disabled = computed(() => formContext?.disabled || false);
const hasError = computed(() => !!formContext?.errors[props.prop]);
const errorMessage = computed(() => formContext?.errors[props.prop] || "");

const labelPosition = computed(
  () => props.labelPosition || formContext?.labelPosition || "left"
);
const labelTextAlign = computed(
  () => props.labelTextAlign || formContext?.labelTextAlign || "left"
);
const labelAlignItems = computed(
  () => props.labelAlignItems || formContext?.labelAlignItems || "center"
);
const labelJustifyContent = computed(
  () => props.labelJustifyContent || formContext?.labelJustifyContent || "start"
);

// 监听表单字段变化，触发验证
watch(
  () => formContext?.formData[props.prop],
  () => {
    formContext?.validateField(props.prop);
  },
  { immediate: true }
);
</script>

<style scoped>
.x-form-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--space-3);
  height: 100%;
  width: 100%;
}

.x-form-item__label {
  /* overflow: hidden; */
  /* padding: 8px 12px 8px 0; */
  /* font-size: var(--font-size-1);
    color: var(--color-text-primary);
    text-align: right;
    box-sizing: border-box; */
  padding: 0px 1px;
  height: var(--height-1);
  display: flex;
  align-items: center;
  justify-content: start;
  color: var(--color-text);
  /* line-height: var(--height-1); */
}

.x-form-item__content {
  flex: 1;
  margin: 0px;
}

.x-form-item--label-top-left,
.x-form-item--label-top-right {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.x-form-item--label-right {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row-reverse;
}

.x-form-item--label-right .x-form-item__label {
  padding: 8px 0 8px 12px;
}

.x-form-item--label-top-left .x-form-item__label,
.x-form-item--label-top-right .x-form-item__label {
  padding: 8px 0;
  margin-bottom: var(--space-1);
  width: 100% !important;
}

.x-form-item--label-top-left .x-form-item__content,
.x-form-item--label-top-right .x-form-item__content {
  flex: 1;
  width: 100%;
  margin: 0px;
}
.x-form-item--label-top-right .x-form-item__label {
  text-align: right;
}

.x-form-item__content--label-right {
  margin-left: 0 !important;
  margin-right: 12px;
}

.x-form-item__error {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-danger);
}

.x-form-item--required .x-form-item__label::before {
  content: "*";
  color: var(--color-danger);
  margin-right: 4px;
}

.x-form-item--disabled .x-form-item__label {
  color: var(--color-text-disabled);
}
</style>
