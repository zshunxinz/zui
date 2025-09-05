<template>
  <div class="x-space" :class="spaceClasses" :style="spaceStyles">
    <template v-for="(item, index) in items" :key="index">
      <div v-if="index > 0" class="x-space__split">
        <slot name="split" />
      </div>
      <div v-if="item" class="x-space__item">
        <slot :item="item" :index="index" />
      </div>
    </template>
    <!-- 直接渲染插槽内容 -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";

// 定义间距大小类型
interface SpaceSize {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

type SizeType =
  | number
  | "mini"
  | "small"
  | "medium"
  | "large"
  | [SizeType, SizeType];

interface Props {
  // 对齐方式
  align?: "start" | "end" | "center" | "baseline";
  // 间距方向
  direction?: "vertical" | "horizontal";
  // 间距大小
  size?: SizeType;
  // 环绕类型的间距
  wrap?: boolean;
  // 充满整行
  fill?: boolean;
  // 子项数据（可选）
  items?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  direction: "horizontal",
  size: "small",
  wrap: false,
  fill: false,
  items: () => [],
  align: "start",
});

// 计算间距类名
const spaceClasses = computed(() => ({
  [`x-space--${props.direction}`]: true,
  [`x-space--align-${props.align}`]: true,
  "x-space--wrap": props.wrap,
  "x-space--fill": props.fill,
}));

// 计算间距样式
const spaceStyles = computed(() => {
  const styles: Record<string, string> = {};
  const size = getSizeValue(props.size);

  if (props.direction === "horizontal") {
    styles["gap"] = `${size}px`;
  } else {
    styles["gap"] = `${size}px`;
  }

  return styles;
});

// 获取间距大小的具体值
function getSizeValue(size: SizeType): number {
  // 定义预设间距大小
  const sizeMap: Record<string, number> = {
    mini: 4,
    small: 8,
    medium: 12,
    large: 16,
  };

  // 如果是数组类型，根据方向选择对应的大小
  if (Array.isArray(size)) {
    const [horizontal, vertical = horizontal] = size;
    return props.direction === "horizontal"
      ? getSizeValue(horizontal)
      : getSizeValue(vertical);
  }

  // 如果是字符串类型，从预设中获取
  if (typeof size === "string") {
    return sizeMap[size] || sizeMap["small"];
  }

  // 如果是数字类型，直接返回
  return typeof size === "number" ? size : sizeMap["small"];
}
</script>

<style scoped>
.x-space {
  display: flex;
  box-sizing: border-box;
}

/* 水平方向 */
.x-space--horizontal {
  flex-direction: row;
}

/* 垂直方向 */
.x-space--vertical {
  flex-direction: column;
}

/* 对齐方式 */
.x-space--align-start {
  align-items: flex-start;
}

.x-space--align-end {
  align-items: flex-end;
}

.x-space--align-center {
  align-items: center;
}

.x-space--align-baseline {
  align-items: baseline;
}

/* 换行 */
.x-space--wrap {
  flex-wrap: wrap;
}

/* 充满整行 */
.x-space--fill > .x-space__item {
  flex: 1;
  min-width: 0;
}

/* 分隔符 */
.x-space__split {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 子项 */
.x-space__item {
  box-sizing: border-box;
}
</style>
