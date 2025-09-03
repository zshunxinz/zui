<template>
  <div
    class="x-accordion"
    :class="{
      'x-accordion--disabled': disabled,
      'x-accordion--border': border,
    }"
    role="group"
    :aria-multiselectable="type === 'multiple'"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from "vue";

interface Props {
  /**
   * 手风琴类型：'single' 一次只能展开一个项目，'multiple' 可以展开多个项目
   */
  type?: "single" | "multiple";

  /**
   * 默认展开的值，用于单个模式
   */
  defaultValue?: string;

  /**
   * 当前展开的值，用于受控模式
   */
  modelValue?: string | string[];

  /**
   * 是否允许折叠所有项目
   */
  collapsible?: boolean;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 边框是否显示
   */
  border?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string | string[]): void;
  (e: "change", value: string | string[]): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: "single",
  defaultValue: "",
  modelValue: undefined,
  collapsible: false,
  disabled: false,
  border: true,
});

const emit = defineEmits<Emits>();

// 内部状态
const value = ref<string | string[]>(
  props.modelValue !== undefined ? props.modelValue : props.defaultValue
);

// 监听外部modelValue变化
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== undefined) {
      value.value = newValue;
    }
  }
);

// 切换项目展开状态
const toggleItem = (itemValue: string) => {
  if (props.disabled) return;

  if (props.type === "single") {
    // 单个模式
    if (typeof value.value === "string" && value.value === itemValue) {
      // 当前项目已展开，且允许折叠，则折叠
      value.value = props.collapsible ? "" : itemValue;
    } else {
      // 展开新的项目
      value.value = itemValue;
    }
  } else {
    // 多个模式
    const currentValues = Array.isArray(value.value)
      ? [...value.value]
      : value.value
      ? [value.value]
      : [];
    const index = currentValues.indexOf(itemValue);

    if (index > -1) {
      // 已展开，移除（折叠）
      currentValues.splice(index, 1);
    } else {
      // 未展开，添加（展开）
      currentValues.push(itemValue);
    }

    value.value = currentValues;
  }

  // 触发更新事件
  emit("change", value.value);
};

// 检查项目是否展开
const isItemExpanded = (itemValue: string): boolean => {
  if (typeof value.value === "string") {
    return value.value === itemValue;
  } else if (Array.isArray(value.value)) {
    return value.value.includes(itemValue);
  }
  return false;
};

// 提供给子组件的数据和方法
provide("accordion", {
  type: props.type,
  collapsible: props.collapsible,
  disabled: props.disabled,
  value,
  toggleItem,
  isItemExpanded,
});
</script>

<style scoped>
.x-accordion {
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.x-accordion--disabled {
  opacity: 0.6;
  pointer-events: none;
}

.x-accordion--border {
  border: 1px solid var(--color-border-1);
}
</style>
