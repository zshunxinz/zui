<template>
  <div class="x-option-group" :class="`x-option-group--level-${currentLevel}`">
    <div
      class="x-option-group__label"
      v-if="label"
      :class="{
        'is-collapsible': collapsible,
        'is-collapsed': isCollapsed,
        [`icon-position--${iconPosition}`]: collapsible,
      }"
      :style="labelStyle"
      @click="toggleCollapse"
    >
      <!-- 左侧图标 -->
      <span
        class="x-option-group__icon"
        v-if="collapsible && iconPosition === 'left'"
        :class="{ 'is-expanded': !isCollapsed }"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </span>

      <span class="x-option-group__text">{{ label }}</span>

      <!-- 文字后图标 -->
      <span
        class="x-option-group__icon"
        v-if="collapsible && iconPosition === 'after-text'"
        :class="{ 'is-expanded': !isCollapsed }"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </span>

      <!-- 右侧图标 -->
      <span
        class="x-option-group__icon"
        v-if="collapsible && iconPosition === 'right'"
        :class="{ 'is-expanded': !isCollapsed }"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </span>
    </div>
    <div
      class="x-option-group__options"
      v-show="!isCollapsed"
      :class="{
        'is-collapsible': collapsible,
      }"
      :style="optionsStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import {
  provide,
  inject,
  computed,
  ref,
  getCurrentInstance,
  onMounted,
} from 'vue';
import { useSelectStyles, useGroupLevel } from './composables/useSelectStyles';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  collapsible: {
    type: Boolean,
    default: false,
  },
  defaultCollapsed: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: val => ['left', 'after-text', 'right'].includes(val),
  },
  level: {
    type: Number,
    default: undefined,
  },
});

// 注入父级 OptionGroup 的 context
const parentOptionGroup = inject('optionGroup', null);
const instance = getCurrentInstance();

// 使用 composable 获取样式计算和层级计算函数
const { getGroupLabelStyle, getOptionsAreaStyle } = useSelectStyles();
const { calculateLevelFromInstance } = useGroupLevel();

// 计算当前层级（优化后的算法）
const currentLevel = computed(() => {
  // 如果明确设置了level属性，使用该值
  if (props.level !== undefined && props.level !== null) {
    return props.level;
  }

  // 优先使用inject/provide机制
  if (parentOptionGroup && parentOptionGroup.level?.value !== undefined) {
    return parentOptionGroup.level.value + 1;
  }

  // 使用 composable 计算层级
  return calculateLevelFromInstance(instance);
});

// 计算动态样式（使用 composable）
const labelStyle = computed(() => {
  const styles = getGroupLabelStyle(currentLevel.value);
  return Object.entries(styles).reduce((acc, [key, value]) => {
    // 转换为 CSS 属性格式
    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    acc[cssKey] = `${value} !important`;
    return acc;
  }, {});
});

const optionsStyle = computed(() => {
  const styles = getOptionsAreaStyle(currentLevel.value);
  return Object.entries(styles).reduce((acc, [key, value]) => {
    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    acc[cssKey] = `${value} !important`;
    return acc;
  }, {});
});

const emit = defineEmits(['collapse-change']);

// 折叠状态
const isCollapsed = ref(props.defaultCollapsed);

// 切换折叠状态
const toggleCollapse = () => {
  if (!props.collapsible) return;

  isCollapsed.value = !isCollapsed.value;
  emit('collapse-change', {
    collapsed: isCollapsed.value,
    label: props.label,
  });
};

// 注入 Select 的 context
const selectContext = inject('selectContext', {});

// 提供 OptionGroup 的 context
provide('optionGroup', {
  disabled: computed(() => props.disabled),
  label: computed(() => props.label),
  collapsible: computed(() => props.collapsible),
  isCollapsed: computed(() => isCollapsed.value),
  iconPosition: computed(() => props.iconPosition),
  level: computed(() => currentLevel.value),
  toggleCollapse,
});

// 同时传递 Select 的 context 给子组件
if (selectContext) {
  provide('selectContext', selectContext);
}

// 添加调试日志（只在开发环境下）
if (process.env.NODE_ENV === 'development') {
  onMounted(() => {
    // console.log(`🔍 OptionGroup "${props.label}" - 初始化:`, {
    //   propsLevel: props.level,
    //   calculatedLevel: currentLevel.value,
    //   hasParent: !!parentOptionGroup,
    //   parentLevel: parentOptionGroup?.level?.value,
    //   labelStyle: labelStyle.value,
    //   optionsStyle: optionsStyle.value,
    // });
  });
}
</script>

<style>
.x-option-group {
  margin: 4px 0;
}

.x-option-group__label {
  /* padding: 8px 12px; -- 由 JavaScript 动态计算 */
  /* font-size: 12px; -- 由 JavaScript 动态计算 */
  color: var(--color-text-secondary);
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--color-bg-hover);
  border-radius: var(--border-radius-0);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s;
}

.x-option-group__label.is-collapsible {
  cursor: pointer;
  user-select: none;
}

.x-option-group__label.is-collapsible:hover {
  background-color: var(--color-bg-hover-1);
}

/* 图标位置布局 */
.x-option-group__label.icon-position--left {
  flex-direction: row;
}

.x-option-group__label.icon-position--after-text {
  flex-direction: row;
  gap: 4px; /* 减小间距，让图标紧贴文字 */
}

.x-option-group__label.icon-position--right {
  flex-direction: row;
  justify-content: space-between;
}

.x-option-group__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  color: var(--color-text-secondary);
  transform-origin: center;
  flex-shrink: 0;
}

/* 展开状态的图标旋转 */
.x-option-group__icon.is-expanded {
  transform: rotate(90deg);
}

.x-option-group__text {
  flex: 1;
  min-width: 0;
}

/* after-text 位置时，文字不占满整个空间 */
.x-option-group__label.icon-position--after-text .x-option-group__text {
  flex: 0 1 auto;
}

/* 右侧图标时文字不需要 flex: 1 */
.x-option-group__label.icon-position--right .x-option-group__text {
  flex: 0 1 auto;
}

.x-option-group__options {
  padding: 0;
  transition: all 0.2s ease;
  overflow: hidden;
}

.x-option-group__options.is-collapsible {
  /* 可折叠的选项区域 */
  overflow: hidden;
}

/* 使用 :deep() 选择器来影响子组件 */
/* 注释掉此样式，改由 Select 组件的 getOptionStyle 统一处理缩进 */
/* .x-option-group__options :deep(.x-select-option) {
  margin-left: 12px;
} */
</style>
