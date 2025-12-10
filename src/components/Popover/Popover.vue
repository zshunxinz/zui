<template>
  <div class="x-popover" :class="popoverClass" ref="popoverRef">
    <div
      class="x-popover__trigger"
      @click="togglePopover"
      @keydown.esc="closePopover"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      :id="`${id}-trigger`"
      tabindex="0"
    >
      <slot></slot>
    </div>

    <Teleport to="body" v-if="isOpen && teleport">
      <div
        class="x-popover__overlay"
        v-if="overlay"
        :class="overlayClass"
        @click="closePopover"
        @blur="handleBlur"
      />
      <div
        v-show="isOpen"
        class="x-popover__content"
        :class="contentClass"
        :style="contentStyle"
        @blur="handleBlur"
        ref="contentRef"
        @click.stop
        @keydown.esc="closePopover"
        :id="`${id}-content`"
        role="tooltip"
        :aria-labelledby="`${id}-trigger`"
      >
        <div v-if="arrow" class="x-popover__arrow" :class="arrowClass"></div>
        <slot name="content"></slot>
      </div>
    </Teleport>

    <div v-else-if="isOpen">
      <div
        class="x-popover__overlay"
        v-if="overlay"
        :class="overlayClass"
        @click="closePopover"
        @blur="handleBlur"
      />
      <div
        v-show="isOpen"
        class="x-popover__content"
        :class="contentClass"
        :style="contentStyle"
        ref="contentRef"
        @click.stop
        @keydown.esc="closePopover"
        @blur="handleBlur"
        :id="`${id}-content`"
        role="tooltip"
        :aria-labelledby="`${id}-trigger`"
      >
        <div v-if="arrow" class="x-popover__arrow" :class="arrowClass"></div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import type { Placement } from './types';

interface Props {
  id?: string;
  placement?: Placement;
  open?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  overlay?: boolean;
  teleport?: boolean;
  transitionDuration?: number;
  arrow?: boolean;
  flip?: boolean;
  shift?: boolean;
  offset?: number;
  width?: string | number;
  height?: string | number;
  /**
   * 内容内边距
   * @default var(--x-popover-padding)
   */
  padding?: string;
}

interface Emits {
  (e: 'open', value: boolean): void;
  (e: 'close', value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  placement: 'bottom',
  open: undefined,
  defaultOpen: false,
  disabled: false,
  overlay: true,
  teleport: true,
  transitionDuration: 200,
  arrow: true,
  flip: true,
  shift: true,
  offset: 10,
  width: undefined,
  height: undefined,
  padding: undefined,
});

const emit = defineEmits<Emits>();

const popoverRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();
const isOpen = ref(props.open ?? props.defaultOpen);

// 生成唯一ID
const id = computed(
  () => props.id || `x-popover-${Math.random().toString(36).slice(2, 9)}`
);

const popoverClass = computed(() => {
  return [`x-popover--${props.placement}`];
});

const contentClass = computed(() => {
  return [
    `x-popover__content--${props.placement}`,
    {
      'x-popover__content--no-arrow': !props.arrow,
    },
  ];
});

const overlayClass = computed(() => {
  return ['x-popover__overlay'];
});

const arrowClass = computed(() => {
  return [`x-popover__arrow--${props.placement}`];
});

const contentStyle = computed(() => {
  const style: Record<string, string | undefined> = {};
  if (props.width !== undefined) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  if (props.height !== undefined) {
    style.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  if (props.padding !== undefined) {
    style.padding = props.padding;
  }
  return style;
});

// 处理弹窗位置
const handlePosition = async () => {
  await nextTick();
  if (!popoverRef.value || !contentRef.value) return;

  const triggerRect = popoverRef.value.getBoundingClientRect();
  const contentRect = contentRef.value.getBoundingClientRect();
  const arrowElement = contentRef.value.querySelector(
    '.x-popover__arrow'
  ) as HTMLElement;

  let positionX = 0;
  let positionY = 0;

  // 基础位置计算
  switch (props.placement) {
    case 'top':
      positionX =
        triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
      positionY = triggerRect.top - contentRect.height - props.offset;
      break;
    case 'bottom':
      positionX =
        triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
      positionY = triggerRect.bottom + props.offset;
      break;
    case 'left':
      positionX = triggerRect.left - contentRect.width - props.offset;
      positionY =
        triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
      break;
    case 'right':
      positionX = triggerRect.right + props.offset;
      positionY =
        triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
      break;
    case 'top-start':
      positionX = triggerRect.left;
      positionY = triggerRect.top - contentRect.height - props.offset;
      break;
    case 'top-end':
      positionX = triggerRect.right - contentRect.width;
      positionY = triggerRect.top - contentRect.height - props.offset;
      break;
    case 'bottom-start':
      positionX = triggerRect.left;
      positionY = triggerRect.bottom + props.offset;
      break;
    case 'bottom-end':
      positionX = triggerRect.right - contentRect.width;
      positionY = triggerRect.bottom + props.offset;
      break;
    case 'left-start':
      positionX = triggerRect.left - contentRect.width - props.offset;
      positionY = triggerRect.top;
      break;
    case 'left-end':
      positionX = triggerRect.left - contentRect.width - props.offset;
      positionY = triggerRect.bottom - contentRect.height;
      break;
    case 'right-start':
      positionX = triggerRect.right + props.offset;
      positionY = triggerRect.top;
      break;
    case 'right-end':
      positionX = triggerRect.right + props.offset;
      positionY = triggerRect.bottom - contentRect.height;
      break;
  }

  // 处理边界情况 - 翻转
  if (props.flip) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 左右翻转
    if (
      (positionX < 0 && props.placement.includes('left')) ||
      (positionX + contentRect.width > windowWidth &&
        props.placement.includes('right'))
    ) {
      const flippedPlacement = props.placement
        .replace('left', 'right')
        .replace('right', 'left');
      // 重新计算位置
      switch (flippedPlacement) {
        case 'left':
        case 'left-start':
        case 'left-end':
          positionX = triggerRect.left - contentRect.width - props.offset;
          break;
        case 'right':
        case 'right-start':
        case 'right-end':
          positionX = triggerRect.right + props.offset;
          break;
      }
    }

    // 上下翻转
    if (
      (positionY < 0 && props.placement.includes('top')) ||
      (positionY + contentRect.height > windowHeight &&
        props.placement.includes('bottom'))
    ) {
      const flippedPlacement = props.placement
        .replace('top', 'bottom')
        .replace('bottom', 'top');
      // 重新计算位置
      switch (flippedPlacement) {
        case 'top':
        case 'top-start':
        case 'top-end':
          positionY = triggerRect.top - contentRect.height - props.offset;
          break;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          positionY = triggerRect.bottom + props.offset;
          break;
      }
    }
  }

  // 处理偏移
  if (props.shift) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (positionX < 0) {
      positionX = 16;
    }
    if (positionX + contentRect.width > windowWidth) {
      positionX = windowWidth - contentRect.width - 16;
    }
    if (positionY < 0) {
      positionY = 16;
    }
    if (positionY + contentRect.height > windowHeight) {
      positionY = windowHeight - contentRect.height - 16;
    }
  }

  if (contentRef.value) {
    contentRef.value.style.position = 'fixed';
    contentRef.value.style.left = `${positionX}px`;
    contentRef.value.style.top = `${positionY}px`;
  }
};

// 切换弹窗显示状态
const togglePopover = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    emit('open', true);
    setTimeout(() => {
      handlePosition();
    }, 0);
    // 添加点击外部关闭的监听器，只在overlay=true时添加
    if (props.overlay) {
      document.addEventListener('click', handleDocumentClick);
    }
  } else {
    emit('close', false);
    document.removeEventListener('click', handleDocumentClick);
  }
};

// 关闭弹窗
const closePopover = () => {
  if (isOpen.value) {
    isOpen.value = false;
    emit('close', false);
    document.removeEventListener('click', handleDocumentClick);
  }
};

// 处理文档点击，点击外部关闭弹窗
const handleDocumentClick = (event: MouseEvent) => {
  if (
    popoverRef.value &&
    !popoverRef.value.contains(event.target as Node) &&
    contentRef.value &&
    !contentRef.value.contains(event.target as Node)
  ) {
    closePopover();
  }
};

// 处理失焦事件
const handleBlur = (event: FocusEvent) => {
  console.log('失焦事件触发');
  closePopover();
};

// 监听props.open变化
const openWatcher = computed(() => props.open);

// 处理窗口大小变化
const handleResize = () => {
  if (isOpen.value) {
    handlePosition();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleDocumentClick);
});
</script>

<style scoped>
.x-popover {
  display: inline-block;
  position: relative;
}

.x-popover__trigger {
  /* display: inline-block; */
  cursor: pointer;
}

.x-popover__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: var(--z-index-popover-overlay);
}

.x-popover__content {
  position: absolute;
  background-color: var(--color-background);
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius-0);
  box-shadow: var(--box-shadow-1);
  z-index: var(--z-index-popover);
  transition:
    opacity var(--transition-duration),
    transform var(--transition-duration);
  max-width: 360px;
  max-height: 60vh;
  padding: var(--padding-1);
}

.x-popover__arrow {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border-1);
  transform: rotate(45deg);
  z-index: -1; /* 确保箭头在内容下方 */
}

/* 位置变体样式 */
/* 顶部位置 */
.x-popover__content--top {
  transform-origin: bottom center;
}

.x-popover__arrow--top {
  bottom: -8px;
  left: 50%;
  margin-left: -8px;
  border-left: none;
  border-top: none;
}

/* 顶部起始位置 */
.x-popover__content--top-start {
  transform-origin: bottom left;
}

.x-popover__arrow--top-start {
  bottom: -8px;
  left: 24px;
  border-left: none;
  border-top: none;
}

/* 顶部结束位置 */
.x-popover__content--top-end {
  transform-origin: bottom right;
}

.x-popover__arrow--top-end {
  bottom: -8px;
  right: 24px;
  border-left: none;
  border-top: none;
}

/* 底部位置 */
.x-popover__content--bottom {
  transform-origin: top center;
}

.x-popover__arrow--bottom {
  top: -8px;
  left: 50%;
  margin-left: -8px;
  border-bottom: none;
  border-right: none;
}

/* 底部起始位置 */
.x-popover__content--bottom-start {
  transform-origin: top left;
}

.x-popover__arrow--bottom-start {
  top: -8px;
  left: 24px;
  border-bottom: none;
  border-right: none;
}

/* 底部结束位置 */
.x-popover__content--bottom-end {
  transform-origin: top right;
}

.x-popover__arrow--bottom-end {
  top: -8px;
  right: 24px;
  border-bottom: none;
  border-right: none;
}

/* 左侧位置 */
.x-popover__content--left {
  transform-origin: right center;
}

.x-popover__arrow--left {
  right: -8px;
  top: 50%;
  margin-top: -8px;
  border-left: none;
  border-bottom: none;
}

/* 左侧起始位置 */
.x-popover__content--left-start {
  transform-origin: right top;
}

.x-popover__arrow--left-start {
  right: -8px;
  top: 24px;
  border-left: none;
  border-bottom: none;
}

/* 左侧结束位置 */
.x-popover__content--left-end {
  transform-origin: right bottom;
}

.x-popover__arrow--left-end {
  right: -8px;
  bottom: 24px;
  border-left: none;
  border-bottom: none;
}

/* 右侧位置 */
.x-popover__content--right {
  transform-origin: left center;
}

.x-popover__arrow--right {
  left: -8px;
  top: 50%;
  margin-top: -8px;
  border-top: none;
  border-right: none;
}

/* 右侧起始位置 */
.x-popover__content--right-start {
  transform-origin: left top;
}

.x-popover__arrow--right-start {
  left: -8px;
  top: 24px;
  border-top: none;
  border-right: none;
}

/* 右侧结束位置 */
.x-popover__content--right-end {
  transform-origin: left bottom;
}

.x-popover__arrow--right-end {
  left: -8px;
  bottom: 24px;
  border-top: none;
  border-right: none;
}

/* 无箭头样式 */
.x-popover__content--no-arrow {
  margin: 0 !important;
}

/* 自定义样式变量 */
:root {
  --x-popover-padding: var(--padding-2);
  --z-index-popover: 1000;
  --z-index-popover-overlay: 999;
  --transition-duration: 0.2s;
}

/* 暗色模式适配 */
:root.dark .x-popover__content {
  background-color: var(--color-background);
  border-color: var(--color-border-1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

:root.dark .x-popover__arrow {
  background-color: var(--color-background);
  border-color: var(--color-border-1);
}
</style>
