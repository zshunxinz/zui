<template>
  <Teleport to="body">
    <!-- 抽屉容器 -->
    <div
      class="x-drawer__container"
      :class="{
        'x-drawer__container--open': isOpen,
        'x-drawer__container--animated': props.animated,
        'x-drawer__container--no-mask': !props.mask,
      }"
    >
      <!-- 遮罩层 - 根据mask参数控制显示 -->
      <div
        v-if="props.mask"
        class="x-drawer__overlay"
        :class="overlayClass"
        @click="handleOverlayClick"
        :style="overlayStyle"
      />
      <!-- 抽屉内容 -->
      <div
        class="x-drawer"
        :class="drawerClass"
        :style="drawerStyle"
        @click.stop
        role="dialog"
        :aria-modal="true"
        :aria-labelledby="titleId"
      >
        <!-- 抽屉头部 -->
        <div class="x-drawer__header" v-if="showHeader">
          <slot name="header">
            <h3 class="x-drawer__title" v-if="title" :id="titleId">
              {{ title }}
            </h3>
          </slot>
          <button
            v-if="props.closable !== false && props.closable !== 'false'"
            class="x-drawer__close-btn"
            @click="handleClose"
            aria-label="关闭"
            type="button"
          >
            <span class="x-drawer__close-icon">×</span>
          </button>
        </div>

        <!-- 抽屉内容 -->
        <div class="x-drawer__body" v-if="hasDefaultSlot || content">
          <slot v-if="hasDefaultSlot"></slot>
          <template v-else-if="content">
            <div v-if="typeof content === 'string'">
              {{ content }}
            </div>
            <!-- 对于HTMLElement使用ref和生命周期钩子 -->
            <div
              v-else-if="
                typeof content === 'function' ||
                (typeof content === 'object' &&
                  content !== null &&
                  content.nodeType === 1)
              "
              ref="contentContainer"
            ></div>
          </template>
        </div>

        <!-- 抽屉底部 -->
        <div class="x-drawer__footer" v-if="showFooter">
          <slot name="footer">
            <div class="x-drawer__footer-buttons" v-if="!customFooter">
              <button
                class="btn btn--default"
                @click="handleCancel"
                type="button"
              >
                取消
              </button>
              <button class="btn btn--primary" @click="handleOk" type="button">
                确定
              </button>
            </div>
            <template v-else-if="footer">
              <!-- 对于HTMLElement使用ref和生命周期钩子 -->
              <div
                v-if="
                  typeof footer === 'function' ||
                  (typeof footer === 'object' &&
                    footer !== null &&
                    footer.nodeType === 1)
                "
                ref="footerContainer"
              ></div>
            </template>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  watch,
  nextTick,
  useSlots,
} from 'vue';
import type { DrawerSize, DrawerPosition } from './types';
import '../Button/index.css';

interface Props {
  id?: string;
  open?: boolean;
  defaultOpen?: boolean;
  title?: string;
  zIndex?: number;
  content?: string | HTMLElement | (() => HTMLElement);
  size?: DrawerSize;
  position?: DrawerPosition;
  closable?: boolean;
  /**
   * 是否显示头部
   * @default true
   */
  header?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  escClosable?: boolean;
  footer?: boolean | HTMLElement | (() => HTMLElement);
  width?: string | number;
  height?: string | number;
  /**
   * 是否启用动画
   * @default true
   */
  animated?: boolean;
  /**
   * 动画类型
   * @default 'slide'
   */
  animationType?: 'slide' | 'scale' | 'zoom';
  /**
   * 抽屉动画时长
   * @default 300
   */
  transitionDuration?: number;
  /**
   * 遮罩动画时长
   * @default 200
   */
  maskTransitionDuration?: number;
  /**
   * 自定义遮罩样式
   * @default {}
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
  position: 'right',
  closable: true,
  header: true, // 新增header属性，控制是否显示头部
  mask: true,
  maskClosable: true,
  escClosable: true,
  footer: true,
  width: undefined,
  height: undefined,
  animated: true,
  animationType: 'slide',
  transitionDuration: 300,
  maskTransitionDuration: 200,
  maskStyle: () => ({}),
});

const emit = defineEmits<Emits>();
const slots = useSlots();

// 控制抽屉显示状态
const isOpen = ref(props.open ?? props.defaultOpen);

// 内容容器引用
const contentContainer = ref<HTMLElement>();
const footerContainer = ref<HTMLElement>();

// 渲染HTML内容的函数
const renderContentElement = () => {
  if (!contentContainer.value) return;

  // 清空容器
  contentContainer.value.innerHTML = '';

  let element: HTMLElement | null = null;

  if (props.content instanceof HTMLElement) {
    element = props.content;
  } else if (typeof props.content === 'function') {
    const result = props.content();
    if (result instanceof HTMLElement) {
      element = result;
    }
  }

  // 如果存在有效的HTML元素，则克隆并添加到容器中
  if (element) {
    const clonedElement = element.cloneNode(true) as HTMLElement;
    contentContainer.value.appendChild(clonedElement);
  }
};

// 渲染HTML底部内容的函数
const renderFooterElement = () => {
  if (!footerContainer.value) return;

  // 清空容器
  footerContainer.value.innerHTML = '';

  let element: HTMLElement | null = null;

  if (props.footer instanceof HTMLElement) {
    element = props.footer;
  } else if (typeof props.footer === 'function') {
    const result = props.footer();
    if (result instanceof HTMLElement) {
      element = result;
    }
  }

  // 如果存在有效的HTML元素，则克隆并添加到容器中
  if (element) {
    const clonedElement = element.cloneNode(true) as HTMLElement;
    footerContainer.value.appendChild(clonedElement);
  }
};

const titleId = computed(
  () => props.id || `x-drawer-${Math.random().toString(36).slice(2, 9)}-title`
);

// 计算是否有默认插槽
const hasDefaultSlot = computed(() => {
  return slots.default !== undefined;
});

// 计算是否显示头部
const showHeader = computed(() => {
  // 只有当明确需要标题、关闭按钮或头部插槽时才显示头部
  // 如果closable为true但用户明确不想要头部，应该可以隐藏
  // 处理字符串形式的布尔值，确保"false"被正确识别为false
  const isClosable = props.closable !== false && props.closable !== 'false';
  return (props.title || slots.header || isClosable) && props.header !== false;
});

// 计算是否显示底部
const showFooter = computed(() => {
  // 处理字符串形式的布尔值，确保"false"被正确识别为false
  if (props.footer === false || props.footer === 'false') return false;
  return slots.footer || props.footer !== false;
});

// 计算是否为自定义底部
const customFooter = computed(
  () =>
    props.footer !== true && props.footer !== false && props.footer !== 'false'
);

// 计算抽屉类名
const drawerClass = computed(() => {
  return [
    `x-drawer--${props.size}`,
    `x-drawer--${props.position}`,
    `x-drawer--animation-${props.animationType}`,
    {
      'x-drawer--no-header': !showHeader.value,
      'x-drawer--no-footer': !showFooter.value,
      'x-drawer--open': isOpen.value,
    },
  ];
});

// 计算遮罩类名
const overlayClass = computed(() => {
  return ['x-drawer__overlay'];
});

// 计算抽屉样式
const drawerStyle = computed(() => {
  const style: Record<string, string | number | undefined> = {};
  if (props.zIndex) {
    style.zIndex = props.zIndex;
  }

  // 设置宽度或高度，根据位置而定
  if (props.width !== undefined) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width;
  }

  if (props.height !== undefined) {
    style.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height;
  }

  // 设置动画时长 CSS 变量
  style['--transition-duration'] = `${props.transitionDuration}ms`;

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
    isOpen.value = false;
    emit('close', false);
    emit('cancel');
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
      if (newVal === true) {
        // 打开抽屉时添加延迟，确保动画能够正常显示
        setTimeout(() => {
          isOpen.value = true;
        }, 10);
      } else {
        // 关闭抽屉时直接设置，保持现有行为
        isOpen.value = false;
      }
    }
  },
  { immediate: false }
);

// 监听content变化，重新渲染内容
watch(
  () => props.content,
  () => {
    nextTick(() => {
      renderContentElement();
    });
  },
  { deep: true }
);

// 监听footer变化，重新渲染底部内容
watch(
  () => props.footer,
  () => {
    nextTick(() => {
      renderFooterElement();
    });
  },
  { deep: true }
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
  // 初始化时如果需要打开抽屉，延迟触发动画
  if (props.open ?? props.defaultOpen) {
    setTimeout(() => {
      isOpen.value = true;
    }, 10);
  }
  document.addEventListener('keydown', handleEsc);

  // 组件挂载时渲染内容
  renderContentElement();
  renderFooterElement();
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc);
});
</script>

<style scoped>
/* 抽屉容器 */
.x-drawer__container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  pointer-events: none;
}

/* 容器打开状态 */
.x-drawer__container--open {
  pointer-events: auto;
}

/* 无遮罩时的容器样式 - 不拦截外部点击 */
.x-drawer__container--open.x-drawer__container--no-mask {
  pointer-events: none;
}

/* 无遮罩时的抽屉样式 - 仅抽屉内容区域接收点击 */
.x-drawer__container--open.x-drawer__container--no-mask .x-drawer {
  pointer-events: auto;
}

/* 遮罩层 */
.x-drawer__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity var(--transition-duration, 200ms)
    cubic-bezier(0.4, 0, 0.2, 1);
}

/* 容器打开时的遮罩层状态 */
.x-drawer__container--open .x-drawer__overlay {
  opacity: 1;
}

/* 禁用动画时的遮罩层 */
.x-drawer__container--animated .x-drawer__overlay {
  transition: opacity var(--transition-duration, 200ms)
    cubic-bezier(0.4, 0, 0.2, 1);
}

.x-drawer__container:not(.x-drawer__container--animated) .x-drawer__overlay {
  transition: none;
}

/* 抽屉内容 */
.x-drawer {
  background-color: #ffffff;
  border: 1px solid var(--color-border-1);
  box-shadow: var(--box-shadow-1);
  z-index: 1000;
  position: absolute;
  display: flex;
  flex-direction: column;
  /* 确保内容不会溢出 */
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
  opacity: 0;
  transition: all var(--transition-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);
}

/* 容器打开时的抽屉状态 */
.x-drawer__container--open .x-drawer {
  opacity: 1;
}

/* 打开状态下，重置所有位置的transform - 提高优先级 */
.x-drawer__container--open .x-drawer--left,
.x-drawer__container--open .x-drawer--right,
.x-drawer__container--open .x-drawer--top,
.x-drawer__container--open .x-drawer--bottom,
.x-drawer__container--open .x-drawer.x-drawer--left,
.x-drawer__container--open .x-drawer.x-drawer--right,
.x-drawer__container--open .x-drawer.x-drawer--top,
.x-drawer__container--open .x-drawer.x-drawer--bottom {
  transform: translate(0, 0) !important;
}

/* 打开状态下，重置所有动画类型的transform - 提高优先级 */
.x-drawer__container--open .x-drawer--animation-scale,
.x-drawer__container--open .x-drawer--animation-zoom,
.x-drawer__container--open .x-drawer.x-drawer--animation-scale,
.x-drawer__container--open .x-drawer.x-drawer--animation-zoom {
  transform: scale(1) !important;
}

/* 打开状态下，重置所有动画类型+位置组合的transform - 提高优先级 */
.x-drawer__container--open .x-drawer--animation-scale.x-drawer--left,
.x-drawer__container--open .x-drawer--animation-scale.x-drawer--right,
.x-drawer__container--open .x-drawer--animation-scale.x-drawer--top,
.x-drawer__container--open .x-drawer--animation-scale.x-drawer--bottom,
.x-drawer__container--open .x-drawer--animation-zoom.x-drawer--left,
.x-drawer__container--open .x-drawer--animation-zoom.x-drawer--right,
.x-drawer__container--open .x-drawer--animation-zoom.x-drawer--top,
.x-drawer__container--open .x-drawer--animation-zoom.x-drawer--bottom,
.x-drawer__container--open .x-drawer.x-drawer--animation-scale.x-drawer--left,
.x-drawer__container--open .x-drawer.x-drawer--animation-scale.x-drawer--right,
.x-drawer__container--open .x-drawer.x-drawer--animation-scale.x-drawer--top,
.x-drawer__container--open .x-drawer.x-drawer--animation-scale.x-drawer--bottom,
.x-drawer__container--open .x-drawer.x-drawer--animation-zoom.x-drawer--left,
.x-drawer__container--open .x-drawer.x-drawer--animation-zoom.x-drawer--right,
.x-drawer__container--open .x-drawer.x-drawer--animation-zoom.x-drawer--top,
.x-drawer__container--open .x-drawer.x-drawer--animation-zoom.x-drawer--bottom {
  transform: translate(0, 0) scale(1) !important;
}

/* 禁用动画时的抽屉 */
.x-drawer__container--animated .x-drawer {
  transition: all var(--transition-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);
}

.x-drawer__container:not(.x-drawer__container--animated) .x-drawer {
  transition: none;
}

/* 头部样式 */
.x-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-2);
  border-bottom: 1px solid var(--color-border-1);
  min-height: 60px;
  box-sizing: border-box;
}

.x-drawer__title {
  margin: 0;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
  color: var(--color-text-1);
  line-height: 1.5;
}

.x-drawer__close-btn {
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

.x-drawer__close-btn:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-1);
}

.x-drawer__close-icon {
  font-size: 20px;
  line-height: 1;
}

/* 内容样式 */
.x-drawer__body {
  flex: 1;
  padding: var(--padding-2);
  background-color: var(--color-background);
  overflow-y: auto;
}

/* 底部样式 */
.x-drawer__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-2);
  border-top: 1px solid var(--color-border-1);
  gap: var(--space-2);
}

.x-drawer__footer-buttons {
  display: flex;
  gap: var(--space-2);
}

/* 尺寸变体 */
.x-drawer--sm {
  width: 320px;
  height: 100%;
}

.x-drawer--md {
  width: 480px;
  height: 100%;
}

.x-drawer--lg {
  width: 768px;
  height: 100%;
}

/* 顶部和底部抽屉的尺寸变体 */
.x-drawer--top.x-drawer--sm,
.x-drawer--bottom.x-drawer--sm {
  width: 100%;
  height: 256px;
}

.x-drawer--top.x-drawer--md,
.x-drawer--bottom.x-drawer--md {
  width: 100%;
  height: 384px;
}

.x-drawer--top.x-drawer--lg,
.x-drawer--bottom.x-drawer--lg {
  width: 100%;
  height: 512px;
}

.x-drawer--fullscreen {
  width: 100%;
  height: 100%;
  border-radius: 0;
}

/* 位置变体 - 基础位置设置 */
.x-drawer--left {
  top: 0;
  left: 0;
  transform: translateX(-100%);
}

.x-drawer--right {
  top: 0;
  right: 0;
  transform: translateX(100%);
}

.x-drawer--top {
  top: 0;
  left: 0;
  width: 100%;
  height: 384px; /* 默认md尺寸 */
  transform: translateY(-100%);
}

.x-drawer--bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 384px; /* 默认md尺寸 */
  transform: translateY(100%);
}

/* 动画类型 - 滑动动画 */
.x-drawer--animation-slide.x-drawer--left {
  transform: translateX(-100%);
}

.x-drawer--animation-slide.x-drawer--right {
  transform: translateX(100%);
}

.x-drawer--animation-slide.x-drawer--top {
  transform: translateY(-100%);
}

.x-drawer--animation-slide.x-drawer--bottom {
  transform: translateY(100%);
}

/* 动画类型 - 缩放动画 */
.x-drawer--animation-scale {
  transform: scale(0.8);
}

.x-drawer--animation-scale.x-drawer--left {
  transform: translateX(-100%) scale(0.8);
  transform-origin: left center;
}

.x-drawer--animation-scale.x-drawer--right {
  transform: translateX(100%) scale(0.8);
  transform-origin: right center;
}

.x-drawer--animation-scale.x-drawer--top {
  transform: translateY(-100%) scale(0.8);
  transform-origin: center top;
}

.x-drawer--animation-scale.x-drawer--bottom {
  transform: translateY(100%) scale(0.8);
  transform-origin: center bottom;
}

/* 动画类型 - 缩放+透明度动画 */
.x-drawer--animation-zoom {
  transform: scale(0.6);
  opacity: 0;
}

.x-drawer--animation-zoom.x-drawer--left {
  transform: translateX(-100%) scale(0.6);
  transform-origin: left center;
}

.x-drawer--animation-zoom.x-drawer--right {
  transform: translateX(100%) scale(0.6);
  transform-origin: right center;
}

.x-drawer--animation-zoom.x-drawer--top {
  transform: translateY(-100%) scale(0.6);
  transform-origin: center top;
}

.x-drawer--animation-zoom.x-drawer--bottom {
  transform: translateY(100%) scale(0.6);
  transform-origin: center bottom;
}

/* 特殊状态 */
.x-drawer--no-header .x-drawer__body {
  padding-top: var(--padding-2);
}

.x-drawer--no-footer .x-drawer__body {
  padding-bottom: 0;
}

/* 暗色模式适配 */
:root.dark .x-drawer {
  background-color: var(--color-background);
  border-color: var(--color-border-1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

:root.dark .x-drawer__header,
:root.dark .x-drawer__footer {
  border-color: var(--color-border-1);
}

:root.dark .x-drawer__close-btn:hover {
  background-color: var(--color-bg-hover);
}
</style>
