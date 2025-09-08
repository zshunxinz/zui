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
import { provide, inject, computed, ref, getCurrentInstance } from 'vue';

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

// 计算当前层级
const currentLevel = computed(() => {
  // 如果明确设置了level属性，使用该值
  if (props.level !== undefined && props.level !== null) {
    return props.level;
  }

  // 优先使用inject/provide机制
  if (parentOptionGroup && parentOptionGroup.level?.value !== undefined) {
    return parentOptionGroup.level.value + 1;
  }

  // 如果inject/provide失效，通过组件树手动计算层级
  let parent = instance.parent;
  let level = 0;
  while (parent) {
    // 检查父组件是否是OptionGroup
    const isOptionGroup =
      parent.type &&
      (parent.type.name === 'OptionGroup' ||
        parent.type.__name === 'OptionGroup' ||
        (parent.type.__file && parent.type.__file.includes('OptionGroup.vue')));

    if (isOptionGroup) {
      level++;
    }
    parent = parent.parent;
  }

  console.log(`🔍 OptionGroup "${props.label}" - 计算层级:`, {
    propsLevel: props.level,
    parentLevel: level,
    parentGroupLevel: parentOptionGroup?.level?.value,
    calculatedLevel: level,
    hasParent: !!parentOptionGroup,
    instanceParent: !!instance.parent,
    manualCalculation: true,
  });

  return level;
});

// 计算动态样式
const labelStyle = computed(() => {
  const baseIndent = currentLevel.value * 6; // 每层缩进6px
  const style = {
    marginLeft: `${baseIndent}px !important`,
    fontSize: `${currentLevel.value > 1 ? '11px' : '12px'} !important`,
    opacity: `${Math.max(1 - currentLevel.value * 0.1, 0.6)} !important`, // 每层递减0.1，最小0.6
    padding: `${currentLevel.value > 1 ? '6px 12px' : '8px 12px'} !important`,
  };

  console.log(`🎨 OptionGroup "${props.label}" - 样式计算:`, {
    level: currentLevel.value,
    style: style,
  });

  return style;
});

const optionsStyle = computed(() => {
  const baseIndent = currentLevel.value * 4; // 选项区域每层缩进4px
  const style = {
    marginLeft: `${baseIndent}px !important`,
  };

  console.log(`📋 OptionGroup "${props.label}" - 选项区域样式:`, {
    level: currentLevel.value,
    style: style,
  });

  return style;
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
.x-option-group__options :deep(.x-select-option) {
  margin-left: 12px;
}
</style>
