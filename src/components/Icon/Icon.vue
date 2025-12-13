<template>
  <i class="z-icon" :class="iconClass" :style="iconStyle">
    <!-- 渲染SVG图标 -->
    <svg
      v-if="svgContent"
      class="x-icon__svg"
      v-bind="svgProps"
      v-html="svgContent"
    ></svg>

    <!-- 渲染自定义SVG内容 -->
    <svg
      v-else-if="isCustomSvg"
      class="x-icon__svg"
      v-bind="customSvgProps"
      v-html="name"
    ></svg>

    <!-- 渲染预定义图标 -->
    <svg v-else class="x-icon__svg" v-bind="svgProps">
      <use :xlink:href="`#icon-${name}`" />
    </svg>
  </i>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue';
import './index.css';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: '1em',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
  strokeWidth: {
    type: [String, Number],
    default: 2,
  },
  fill: {
    type: String,
    default: 'none',
  },
  rotate: {
    type: [String, Number],
    default: 0,
  },
});

// SVG内容
const svgContent = ref('');

// 判断是否为自定义SVG内容（包含<path>等SVG标签）
const isCustomSvg = computed(() => {
  return (
    props.name.includes('<path') ||
    props.name.includes('<circle') ||
    props.name.includes('<rect') ||
    props.name.includes('<line') ||
    props.name.includes('<polyline') ||
    props.name.includes('<polygon')
  );
});

// 图标类名
const iconClass = computed(() => {
  return ['z-icon'];
});

// 图标样式
const iconStyle = computed(() => {
  return {
    fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
    color: props.color,
    width: typeof props.size === 'number' ? `${props.size}px` : props.size,
    height: typeof props.size === 'number' ? `${props.size}px` : props.size,
    transform: `rotate(${props.rotate}deg)`,
  };
});

// SVG属性
const svgProps = computed(() => {
  // 对于内置图标和预定义图标，我们不设置固定的width和height，
  // 而是让它们继承容器的大小
  return {
    fill: props.fill !== 'none' ? props.fill : undefined,
    stroke: props.color,
    viewBox: `0 0 24 24`,
    'stroke-width': props.strokeWidth,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  };
});

// 自定义SVG属性
const customSvgProps = computed(() => {
  // 对于自定义SVG，我们也不设置固定的width和height，
  // 而是让它们继承容器的大小
  return {
    fill: props.fill !== 'none' ? props.fill : undefined,
    stroke: props.color,
    viewBox: '0 0 24 24',
    'stroke-width': props.strokeWidth,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  };
});

// 加载SVG文件内容
const loadSvg = async iconName => {
  try {
    // 尝试导入对应的SVG文件
    const svgModule = await import(`./icons/${iconName}.svg?raw`);
    // 提取SVG内容（移除外层的svg标签）
    const svgText = svgModule.default;
    const innerSvg = svgText.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
    if (innerSvg && innerSvg[1]) {
      svgContent.value = innerSvg[1];
    }
  } catch (error) {
    // 如果找不到对应的SVG文件，则清空内容
    svgContent.value = '';
  }
};

// 监听name属性变化
onMounted(() => {
  // 如果不是自定义SVG且不是预定义图标，则尝试加载SVG文件
  if (!isCustomSvg.value && !props.name.includes('#icon-')) {
    loadSvg(props.name);
  }
});

// 监听name属性变化
watch(
  () => props.name,
  newName => {
    if (!isCustomSvg.value && !newName.includes('#icon-')) {
      loadSvg(newName);
    } else {
      svgContent.value = '';
    }
  },
  { immediate: true }
);
</script>
