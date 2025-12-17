<template>
  <div
    class="z-divider"
    :class="[
      `z-divider--${direction}`,
      hasText && !isCustomPosition ? `z-divider--${orientation}` : '',
      `z-divider--${ctype}`,
      {
        'z-divider--with-text': hasText,
        'z-divider--custom-position': hasText && isCustomPosition,
      },
    ]"
    :style="dividerStyle"
  >
    <template v-if="hasText && isCustomPosition">
      <!-- 自定义位置时使用单一线条，文字绝对定位 -->
      <div
        class="z-divider__line"
        :style="{ borderTopWidth: size + 'px', borderColor: color }"
      ></div>
      <div class="z-divider__text" :style="{ color: textColor }">
        {{ text }}
      </div>
    </template>
    <template v-else-if="hasText">
      <!-- 标准位置时使用左右两条线 -->
      <div
        class="z-divider__line z-divider__line--left"
        :style="{ borderTopWidth: size + 'px', borderColor: color }"
      ></div>
      <div class="z-divider__text" :style="{ color: textColor }">
        {{ text }}
      </div>
      <div
        class="z-divider__line z-divider__line--right"
        :style="{ borderTopWidth: size + 'px', borderColor: color }"
      ></div>
    </template>
    <template v-else>
      <!-- 无边框时 -->
      <div
        class="z-divider__line"
        :style="{ borderTopWidth: size + 'px', borderColor: color }"
      ></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  /** 分割线方向 */
  direction?: 'horizontal' | 'vertical';
  /** 分割线文字位置，可选值：'left'、'center'、'right' 或百分比值（如 '20%'） */
  orientation?: 'left' | 'center' | 'right' | string;
  /** 分割线样式类型 */
  ctype?: 'solid' | 'dashed' | 'dotted' | 'double';
  /** 分割线宽度/高度 */
  size?: number;
  /** 分割线上下 margin (垂直方向时为左右 margin) */
  margin?: number | string;
  /** 分割线文字内容 */
  text?: string;
  /** 文字颜色 */
  textColor?: string;
  /** 分割线颜色 */
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
  orientation: 'center',
  ctype: 'solid',
  size: 1,
  margin: 16,
  text: '',
  textColor: '',
  color: '',
});

const hasText = computed(() => !!props.text);
const isCustomPosition = computed(() => {
  return (
    typeof props.orientation === 'string' &&
    props.orientation !== 'left' &&
    props.orientation !== 'center' &&
    props.orientation !== 'right'
  );
});

const dividerStyle = computed(() => {
  const style: Record<string, string | number> = {};

  // 处理边距
  if (props.margin) {
    if (props.direction === 'horizontal') {
      style.margin = `${
        typeof props.margin === 'number' ? `${props.margin}px` : props.margin
      } 0`;
    } else {
      style.margin = `0 ${
        typeof props.margin === 'number' ? `${props.margin}px` : props.margin
      }`;
    }
  }

  // 处理自定义位置
  if (hasText.value && isCustomPosition.value) {
    style['--custom-position'] = props.orientation;
  }

  return style;
});
</script>

<style scoped>
.z-divider {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: var(--color-text-muted);
  font-size: var(--font-size-0);
}

/* 方向变体 */
.z-divider--horizontal {
  width: 100%;
  flex-direction: row;
}

.z-divider--vertical {
  height: 1em;
  flex-direction: column;
}

/* 文字位置变体 */
.z-divider--left {
  justify-content: flex-start;
}

.z-divider--center {
  justify-content: center;
}

.z-divider--right {
  justify-content: flex-end;
}

/* 线条样式 */
.z-divider__line {
  border-color: var(--color-border-1);
  border-style: solid;
  border-width: 0;
  flex: 1;
}

.z-divider--horizontal .z-divider__line {
  border-top-width: 1px;
}

.z-divider--vertical .z-divider__line {
  border-left-width: 1px;
  height: 100%;
}

/* 样式类型变体 */
.z-divider--solid .z-divider__line {
  border-style: solid;
}

.z-divider--dashed .z-divider__line {
  border-style: dashed;
}

.z-divider--dotted .z-divider__line {
  border-style: dotted;
}

.z-divider--double .z-divider__line {
  border-style: double;
}

/* 带文字样式 */
.z-divider--with-text:not(.z-divider--custom-position) .z-divider__line--left {
  margin-right: var(--space-2);
}

.z-divider--with-text:not(.z-divider--custom-position) .z-divider__line--right {
  margin-left: var(--space-2);
}

.z-divider--left.z-divider--with-text .z-divider__line--left {
  display: none;
}

.z-divider--right.z-divider--with-text .z-divider__line--right {
  display: none;
}

.z-divider__text {
  padding: 0 var(--space-2);
  white-space: nowrap;
  color: var(--color-text);
}

/* 自定义位置样式 - 重新实现方案 */
.z-divider--custom-position {
  position: relative;
  justify-content: center;
  align-items: center;
}

/* 自定义位置时只显示一条完整的线 */
.z-divider--custom-position .z-divider__line {
  width: 100%;
  position: relative;
  z-index: 0;
}

/* 文字绝对定位在分割线上方 */
.z-divider--custom-position .z-divider__text {
  position: absolute;
  background-color: var(--color-background);
  padding: 0 var(--space-2);
  z-index: 1;
}

/* 水平方向自定义位置 */
.z-divider--horizontal.z-divider--custom-position {
  height: auto;
}

.z-divider--horizontal.z-divider--custom-position .z-divider__text {
  left: var(--custom-position, 50%);
  transform: translateX(-50%);
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
