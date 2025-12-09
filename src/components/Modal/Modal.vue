<template>
  <Teleport to="body" v-if="isOpen || isClosing">
    <!-- 遮罩层 -->
    <div
      v-if="props.mask"
      class="x-modal__overlay"
      :class="[
        overlayClass,
        {
          'x-modal__overlay--entering': isOpen && !isClosing,
          'x-modal__overlay--leaving': !isOpen && isClosing,
        },
      ]"
      @click="handleOverlayClick"
      :style="overlayStyle"
    />

    <!-- 弹窗容器 -->
    <div
      class="x-modal"
      :class="[
        modalClass,
        {
          'x-modal--entering': isOpen && !isClosing,
          'x-modal--leaving': !isOpen && isClosing,
        },
      ]"
      :style="modalStyle"
      @click.stop
      role="dialog"
      :aria-modal="true"
      :aria-labelledby="titleId"
    >
      <!-- 弹窗头部 -->
      <div class="x-modal__header" v-if="showHeader">
        <slot name="header">
          <h3 class="x-modal__title" v-if="title" :id="titleId">{{ title }}</h3>
        </slot>
        <Button
          v-if="closable"
          class="x-modal__close-btn"
          @click="handleClose"
          aria-label="关闭"
          type="text"
        >
          <span class="x-modal__close-icon">×</span>
        </Button>
      </div>

      <!-- 弹窗内容 -->
      <div class="x-modal__body" v-if="hasDefaultSlot || content">
        <slot v-if="hasDefaultSlot"></slot>
        <template v-else-if="content">
          <div v-if="typeof content === 'string'">{{ content }}</div>
          <div
            v-else-if="
              typeof content === 'object' &&
              content !== null &&
              'outerHTML' in content
            "
            v-html="content.outerHTML"
          ></div>
          <div
            v-else-if="typeof content === 'function'"
            v-html="
              (() => {
                const result = content();
                return result &&
                  typeof result === 'object' &&
                  'outerHTML' in result
                  ? result.outerHTML
                  : '';
              })()
            "
          ></div>
        </template>
      </div>

      <!-- 弹窗底部 -->
      <div class="x-modal__footer" v-if="showFooter">
        <slot name="footer">
          <div class="x-modal__footer-buttons" v-if="!customFooter">
            <Button
              class="btn btn--default"
              @click="handleCancel"
              type="button"
            >
              取消
            </Button>
            <Button class="btn btn--primary" @click="handleOk" type="button">
              确定
            </Button>
          </div>
          <template v-else-if="footer">
            <div
              v-if="
                typeof footer === 'object' &&
                footer !== null &&
                'outerHTML' in footer
              "
              v-html="footer.outerHTML"
            ></div>
            <div
              v-else-if="typeof footer === 'function'"
              v-html="
                (() => {
                  const result = footer();
                  return result &&
                    typeof result === 'object' &&
                    'outerHTML' in result
                    ? result.outerHTML
                    : '';
                })()
              "
            ></div>
          </template>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, useSlots } from 'vue';
import type { ModalSize, ModalPosition, ModalAnimation } from './types';
import '../Button/index.css';

interface Props {
  id?: string;
  open?: boolean;
  defaultOpen?: boolean;
  title?: string;
  zIndex?: number;
  content?: string | HTMLElement | (() => HTMLElement);
  size?: ModalSize;
  position?: ModalPosition;
  closable?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  escClosable?: boolean;
  footer?: boolean | HTMLElement | (() => HTMLElement);
  /**
   * 是否显示头部
   * @default true
   */
  header?: boolean;
  width?: string | number;
  height?: string | number;
  /**
   * 弹窗动画类型
   */
  animation?: ModalAnimation;
  /**
   * 自定义顶部定位 (支持百分比或像素值)
   */
  top?: string | number;
  /**
   * 自定义右侧定位 (支持百分比或像素值)
   */
  right?: string | number;
  /**
   * 自定义底部定位 (支持百分比或像素值)
   */
  bottom?: string | number;
  /**
   * 自定义左侧定位 (支持百分比或像素值)
   */
  left?: string | number;
  /**
   * 弹窗动画时长
   * @default 300
   */
  transitionDuration?: number;
  /**
   * 遮罩动画时长
   * @default 200
   */
  maskTransitionDuration?: number;
  /**
   * 自定义弹窗样式
   */
  contentStyle?: Record<string, string | number>;
  /**
   * 自定义遮罩样式
   */
  maskStyle?: Record<string, string | number>;
}

interface Emits {
  (e: 'open', value: boolean): void;
  (e: 'close', value: boolean): void;
  (e: 'ok'): void;
  (e: 'cancel'): void;
  (e: 'update:open', value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  open: undefined,
  defaultOpen: false,
  title: '',
  content: undefined,
  size: 'md',
  position: 'center',
  closable: true,
  mask: true,
  maskClosable: true,
  escClosable: true,
  footer: true,
  header: true,
  width: undefined,
  height: undefined,
  animation: 'zoom',
  transitionDuration: 300,
  maskTransitionDuration: 200,
  contentStyle: () => ({}),
  maskStyle: () => ({}),
});

const emit = defineEmits<Emits>();

const isOpen = ref(props.open ?? props.defaultOpen);
const isClosing = ref(false);
const titleId = computed(
  () => props.id || `x-modal-${Math.random().toString(36).slice(2, 9)}-title`
);
const slots = useSlots();

// 计算是否显示头部
const showHeader = computed(
  () => props.header && (props.title || props.closable || slots.header)
);

// 计算是否显示底部
const showFooter = computed(() => {
  if (props.footer === false) return false;
  return slots.footer || props.footer !== false; // 有footer插槽或footer不为false
});

// 计算是否有默认内容插槽
const hasDefaultSlot = computed(() => {
  return slots.default !== undefined;
});

// 计算是否为自定义底部
const customFooter = computed(
  () => props.footer !== true && props.footer !== false
);

// 计算弹窗类名
const modalClass = computed(() => {
  return [
    `x-modal--${props.size}`,
    `x-modal--${props.position}`,
    `animation--${props.animation}`,
    {
      'x-modal--no-header': !showHeader.value,
      'x-modal--no-footer': !showFooter.value,
    },
  ];
});

// 计算遮罩类名
const overlayClass = computed(() => {
  return ['x-modal__overlay'];
});

// 计算弹窗样式
const modalStyle = computed(() => {
  const style: Record<string, string | number | undefined> = {
    ...props.contentStyle,
  };
  if (props.zIndex) {
    style.zIndex = props.zIndex;
  }

  // 设置宽度
  if (props.width !== undefined) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width;
  }

  // 设置高度
  if (props.height !== undefined) {
    style.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height;
  }

  // 处理自定义位置
  if (props.position === 'absolute') {
    // 设置自定义定位
    const positionProps = ['top', 'right', 'bottom', 'left'] as const;
    positionProps.forEach(prop => {
      const value = props[prop];
      if (value !== undefined) {
        style[prop] = typeof value === 'number' ? `${value}px` : value;
      }
    });

    // 移除默认的居中定位
    style.transform = 'translate(0, 0)';
  }

  // 设置动画时长
  style.transition = `transform ${props.transitionDuration}ms ease-out, opacity ${props.transitionDuration}ms ease-out, top ${props.transitionDuration}ms ease-out, right ${props.transitionDuration}ms ease-out, bottom ${props.transitionDuration}ms ease-out, left ${props.transitionDuration}ms ease-out`;

  // 设置动画属性（用于@keyframes动画）
  style.animationDuration = `${props.transitionDuration}ms`;

  return style;
});

// 计算遮罩样式
const overlayStyle = computed(() => {
  return {
    transition: `opacity ${props.maskTransitionDuration}ms ease-out`,
    zIndex: props.zIndex ? props.zIndex - 1 : 999,
    ...props.maskStyle,
  };
});

// 处理遮罩点击
const handleOverlayClick = () => {
  if (props.maskClosable) {
    handleClose();
  }
};

// 处理关闭
const handleClose = () => {
  if (isOpen.value) {
    isClosing.value = true;
    isOpen.value = false;
    emit('close', false);

    // 动画完成后隐藏组件
    setTimeout(
      () => {
        isClosing.value = false;
      },
      Math.max(props.transitionDuration, props.maskTransitionDuration)
    );
  }
};

// 处理确定
const handleOk = () => {
  emit('ok');
};

// 处理取消
const handleCancel = () => {
  handleClose();
};

// 处理ESC键
const handleEsc = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.escClosable && isOpen.value) {
    handleClose();
  }
};

// 监听props.open变化
watch(
  () => props.open,
  newVal => {
    if (newVal !== undefined) {
      if (newVal) {
        // 打开弹窗
        isClosing.value = false;
        isOpen.value = true;
      } else {
        // 关闭弹窗
        handleClose();
      }
    }
  }
);

// 监听内部状态变化
watch(isOpen, newVal => {
  emit('update:open', newVal);
  if (props.open === undefined) {
    if (newVal) {
      emit('open', newVal);
    } else {
      emit('close', newVal);
    }
  }
});

// 生命周期
onMounted(() => {
  document.addEventListener('keydown', handleEsc);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc);
});
</script>

<style scoped>
.x-modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* 默认值，会被内联样式覆盖 */
  display: block;
  /* 全屏模式下移除内边距 */
  padding: var(--padding-1);
  opacity: 0;
}

/* 遮罩进入动画 */
.x-modal__overlay--entering {
  opacity: 1;
}

/* 遮罩离开动画 */
.x-modal__overlay--leaving {
  opacity: 0;
}

.x-modal--fullscreen + .x-modal__overlay {
  padding: 0;
}

.x-modal {
  background-color: var(--color-background);
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-1);
  z-index: 1000; /* 默认值，会被内联样式覆盖 */
  position: fixed;
  display: flex;
  flex-direction: column;
  /* 确保弹窗在页面中绝对居中 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 确保不会超出视口范围 */
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  /* 确保内容不会溢出 */
  overflow: hidden;
  /* 动画初始状态 */
  opacity: 0;
  visibility: hidden;
}

/* 基础动画进入状态 */
.x-modal--entering {
  opacity: 1;
  visibility: visible;
}

/* 基础动画离开状态 */
.x-modal--leaving {
  opacity: 0;
  visibility: hidden;
}

/* 缩放动画 */
.x-modal--entering {
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

/* 缩放动画 */
.x-modal--entering.animation--zoom {
  animation-name: zoomIn;
}

.x-modal--leaving.animation--zoom {
  animation-name: zoomOut;
}

/* 滑动动画 - 顶部位置 */
.x-modal--top.x-modal--entering.animation--slide {
  animation-name: slideDown;
}

.x-modal--top.x-modal--leaving.animation--slide {
  animation-name: slideUp;
}

/* 滑动动画 - 底部位置 */
.x-modal--bottom.x-modal--entering.animation--slide {
  animation-name: slideUpFromBottom;
}

.x-modal--bottom.x-modal--leaving.animation--slide {
  animation-name: slideDownToBottom;
}

/* 滑动动画 - 左侧位置 */
.x-modal--left.x-modal--entering.animation--slide {
  animation-name: slideRightFromLeft;
}

.x-modal--left.x-modal--leaving.animation--slide {
  animation-name: slideLeftToLeft;
}

/* 滑动动画 - 右侧位置 */
.x-modal--right.x-modal--entering.animation--slide {
  animation-name: slideLeftFromRight;
}

.x-modal--right.x-modal--leaving.animation--slide {
  animation-name: slideRightToRight;
}

/* 滑动动画 - 中心位置 */
.x-modal--center.x-modal--entering.animation--slide {
  animation-name: slideUp;
}

.x-modal--center.x-modal--leaving.animation--slide {
  animation-name: slideDown;
}

/* 弹跳动画 */
.x-modal--entering.animation--bounce {
  animation-name: bounceIn;
}

.x-modal--leaving.animation--bounce {
  animation-name: bounceOut;
}

/* 淡入淡出动画 */
.x-modal--entering.animation--fade {
  animation-name: fadeIn;
}

.x-modal--leaving.animation--fade {
  animation-name: fadeOut;
}

/* 自定义位置动画 */
.x-modal--absolute.x-modal--entering {
  animation-name: fadeInUp;
}

.x-modal--absolute.x-modal--leaving {
  animation-name: fadeOutDown;
}

/* 动画关键帧 */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

/* 从底部滑入 */
@keyframes slideUpFromBottom {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 向底部滑出 */
@keyframes slideDownToBottom {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
}

/* 从左侧滑入 */
@keyframes slideRightFromLeft {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

/* 向左侧滑出 */
@keyframes slideLeftToLeft {
  from {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50%) translateX(-100%);
  }
}

/* 从右侧滑入 */
@keyframes slideLeftFromRight {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

/* 向右侧滑出 */
@keyframes slideRightToRight {
  from {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50%) translateX(100%);
  }
}

@keyframes bounceIn {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: translate(-50%, -50%) scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: translate(-50%, -50%) scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: translate(-50%, -50%) scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: translate(-50%, -50%) scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale3d(1, 1, 1);
  }
}

@keyframes bounceOut {
  20% {
    transform: translate(-50%, -50%) scale3d(0.9, 0.9, 0.9);
  }
  50%,
  55% {
    opacity: 1;
    transform: translate(-50%, -50%) scale3d(1.1, 1.1, 1.1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate(0, 30px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
    transform: translate(0, 0);
  }
  to {
    opacity: 0;
    transform: translate(0, 30px);
  }
}

/* 自定义位置样式 */
.x-modal--absolute {
  /* 移除默认的居中定位，由内联样式控制 */
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  transform: translate(0, 0);
}

/* 头部样式 */
.x-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-2);
  border-bottom: 1px solid var(--color-border-1);
  min-height: 60px;
  box-sizing: border-box;
}

.x-modal__title {
  margin: 0;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
  color: var(--color-text-1);
  line-height: 1.5;
}

.x-modal__close-btn {
  background: none;
  border: none;
  padding: var(--padding-1);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--border-radius);
  color: var(--color-text-3);
  transition: all 0.2s ease;
}

.x-modal__close-btn:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-1);
}

.x-modal__close-icon {
  font-size: 20px;
  line-height: 1;
}

/* 内容样式 */
.x-modal__body {
  flex: 1;
  padding: var(--padding-2);
  background-color: var(--color-background);
  overflow-y: auto;
  /* 默认最大高度，在全屏模式下会被覆盖 */
  max-height: calc(100vh - 200px);
}

/* 底部样式 */
.x-modal__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-2);
  border-top: 1px solid var(--color-border-1);
  gap: var(--space-2);
}

.x-modal__footer-buttons {
  display: flex;
  gap: var(--space-2);
}

/* 尺寸变体 */
.x-modal--sm {
  width: 400px;
}

.x-modal--md {
  width: 600px;
}

.x-modal--lg {
  width: 800px;
}

.x-modal--xl {
  width: 1000px;
}

.x-modal--fullscreen {
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  border-radius: 0;
  top: 0;
  left: 0;
  transform: none;
}

/* 全屏模式下内容区域样式优化 */
.x-modal--fullscreen .x-modal__body {
  max-height: none;
  height: 100%;
  flex: 1;
}

/* 位置变体 */
.x-modal--center {
  /* 已经在.x-modal类中设置了绝对居中 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.x-modal--top {
  align-self: center;
  margin-top: var(--padding-1);
  top: 0;
  transform: translateX(-50%);
}

.x-modal--bottom {
  align-self: center;
  margin-bottom: var(--padding-1);
  top: auto;
  bottom: 0;
  transform: translateX(-50%);
}

.x-modal--left {
  align-self: flex-start;
  height: calc(100vh - var(--padding-1) * 2);
  max-height: calc(100vh - var(--padding-1) * 2);
  left: 0;
  transform: translateY(-50%);
}

.x-modal--right {
  align-self: flex-end;
  height: calc(100vh - var(--padding-1) * 2);
  max-height: calc(100vh - var(--padding-1) * 2);
  left: auto;
  right: 0;
  transform: translateY(-50%);
}

/* 特殊状态 */
.x-modal--no-header .x-modal__body {
  padding-top: var(--padding-1);
}

.x-modal--no-footer .x-modal__body {
  padding-bottom: var(--padding-1);
}

/* 暗色模式适配 */
.dark .x-modal {
  background-color: var(--color-background);
  border-color: var(--color-border-1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.dark .x-modal__header,
.dark .x-modal__footer {
  border-color: var(--color-border-1);
}

.dark .x-modal__close-btn:hover {
  background-color: var(--color-bg-hover);
}
</style>
