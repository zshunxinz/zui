<template>
  <div
    :id="`sonner-container-${id}`"
    class="sonner-toaster"
    :class="`sonner-toaster-${position}`"
    :style="containerStyle"
    aria-live="polite"
    aria-atomic="true"
  >
    <TransitionGroup
      name="sonner-toast"
      tag="div"
      class="sonner-toast-container"
      :style="{ '--offset': `${offset}px` }"
      @after-leave="updateOffsets"
    >
      <div
        v-for="toast in visibleToasts"
        :key="toast.id"
        :id="`sonner-toast-${toast.id}`"
        class="sonner-toast"
        :class="[
          `sonner-toast-${toast.type}`,
          `sonner-toast-${toast.size}`,
          $attrs.class || '',
          {
            'sonner-toast-has-title': toast.title,
            'sonner-toast-has-description': toast.description,
            'sonner-toast-has-icon': toast.icon,
            'sonner-toast-dismissible': toast.dismissible !== false,
          },
        ]"
        :style="{
          '--offset': `${getOffset(toast)}px`,
          ...toast.style,
        }"
        @click.stop="dismissToast(toast.id)"
        @mouseenter="toggleTimer(toast.id, false)"
        @mouseleave="toggleTimer(toast.id, true)"
      >
        <!-- 图标 -->
        <div v-if="toast.icon" class="sonner-toast-icon">
          <Icon :name="toast.icon" />
        </div>

        <!-- 内容 -->
        <div class="sonner-toast-content">
          <h4 v-if="toast.title" class="sonner-toast-title">
            {{ toast.title }}
          </h4>
          <p v-if="toast.description" class="sonner-toast-description">
            {{ toast.description }}
          </p>
        </div>

        <!-- 关闭按钮 -->
        <button
          v-if="toast.dismissible !== false"
          class="sonner-toast-close"
          @click.stop="dismissToast(toast.id)"
          aria-label="关闭"
        >
          <Icon name="x" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, provide } from 'vue';
import { Icon } from '../Icon';
import type {
  Toast,
  ToastPosition,
  ToastSize,
  ToastType,
  ToastPluginInstance,
} from './types';

// 组件默认配置
const DEFAULT_POSITION: ToastPosition = 'top-right';
const TOAST_HEIGHT = 88;

// 组件Props定义
interface Props {
  position?: ToastPosition;
  offset?: number;
  limit?: number;
  richColors?: boolean;
  closeButton?: boolean;
  expand?: boolean;
  pauseOnHover?: boolean;
  toastOptions?: Partial<Toast>;
}

// Props默认值
const props = withDefaults(defineProps<Props>(), {
  position: DEFAULT_POSITION,
  offset: 16,
  limit: 3,
  richColors: false,
  closeButton: true,
  expand: false,
  pauseOnHover: true,
  toastOptions: () => ({}),
});

// 组件唯一标识，用于DOM ID和调试
const id = Math.floor(Math.random() * 10000);

// Toast状态管理
const toasts = ref<Toast[]>([]);
const toastId = ref(0);
const pausedToasts = new Set<number>();
const timers = new Map<number, number>();

// 计算可见的toast（根据limit限制数量）
const visibleToasts = computed(() => toasts.value.slice(0, props.limit));

// 计算容器位置样式
const containerStyle = computed(() => {
  const baseStyle: Record<string, string> = {};
  const offset = `${props.offset}px`;

  // 根据位置设置样式
  switch (props.position) {
    case 'top-right':
      baseStyle.top = offset;
      baseStyle.right = offset;
      break;
    case 'top-left':
      baseStyle.top = offset;
      baseStyle.left = offset;
      break;
    case 'top-center':
      baseStyle.top = offset;
      baseStyle.left = '50%';
      baseStyle.transform = 'translateX(-50%)';
      break;
    case 'bottom-right':
      baseStyle.bottom = offset;
      baseStyle.right = offset;
      break;
    case 'bottom-left':
      baseStyle.bottom = offset;
      baseStyle.left = offset;
      break;
    case 'bottom-center':
      baseStyle.bottom = offset;
      baseStyle.left = '50%';
      baseStyle.transform = 'translateX(-50%)';
      break;
  }

  return baseStyle;
});

// 计算单个toast的偏移量
const getOffset = (toast: Toast): number => {
  const index = toasts.value.indexOf(toast);
  return index === -1 ? 0 : index * TOAST_HEIGHT;
};

// 过渡动画结束后更新偏移量（保留用于未来扩展）
const updateOffsets = () => {};

// 添加新的toast消息
const addToast = (options: Omit<Toast, 'id'>): number => {
  // 创建新toast对象，合并默认值和传入选项
  const newToast: Toast = {
    ...props.toastOptions,
    ...options,
    id: ++toastId.value,
    createdAt: Date.now(),
    duration: options.duration ?? 5000,
    dismissible: options.dismissible ?? true,
    type: options.type ?? 'default',
    size: options.size ?? 'normal',
  };

  // 添加到列表开头（新消息优先显示）
  toasts.value.unshift(newToast);

  // 如果有持续时间，则设置自动关闭定时器
  if (newToast.duration !== Infinity) {
    startTimer(newToast.id, newToast.duration);
  }

  return newToast.id;
};

// 设置定时器用于自动关闭toast
const startTimer = (id: number, duration: number) => {
  // 清理可能存在的旧定时器，避免重复
  if (timers.has(id)) {
    window.clearTimeout(timers.get(id)!);
  }

  // 创建新定时器
  const timer = window.setTimeout(() => {
    // 只有当toast未被暂停时才自动关闭
    if (!pausedToasts.has(id)) {
      dismissToast(id);
    }
  }, duration);

  timers.set(id, timer);
};

// 切换定时器状态（用于鼠标悬停暂停/继续）
const toggleTimer = (id: number, isRunning: boolean) => {
  // 如果未启用悬停暂停功能，则直接返回
  if (!props.pauseOnHover) return;

  if (isRunning) {
    // 继续计时：移除暂停状态并重新计算剩余时间
    pausedToasts.delete(id);
    const toast = toasts.value.find(t => t.id === id);

    if (toast && toast.duration !== Infinity) {
      const elapsed = Date.now() - toast.createdAt;
      const remaining = Math.max(0, toast.duration - elapsed);
      startTimer(id, remaining);
    }
  } else {
    // 暂停计时：添加到暂停集合并清除定时器
    pausedToasts.add(id);
    if (timers.has(id)) {
      window.clearTimeout(timers.get(id)!);
      timers.delete(id);
    }
  }
};

// 关闭单个toast消息
const dismissToast = (id: number) => {
  // 清理相关资源
  if (timers.has(id)) {
    window.clearTimeout(timers.get(id)!);
    timers.delete(id);
  }
  pausedToasts.delete(id);

  // 从列表中移除（触发过渡动画）
  toasts.value = toasts.value.filter(toast => toast.id !== id);
};

// 关闭所有toast消息
const dismissAll = () => {
  // 清理所有资源
  timers.forEach(timer => window.clearTimeout(timer));
  timers.clear();
  pausedToasts.clear();
  toasts.value = [];
};

// 更新现有toast消息
const updateToast = (id: number, updates: Partial<Toast>) => {
  const index = toasts.value.findIndex(toast => toast.id === id);
  if (index !== -1) {
    toasts.value[index] = {
      ...toasts.value[index],
      ...updates,
    };
  }
};

// 定义toast方法集合（用于提供和暴露）
const toastMethods: ToastPluginInstance = {
  addToast,
  dismissToast,
  dismissAll,
  updateToast,
  // 快捷方法：成功消息
  success: (message: string, title?: string) =>
    addToast({
      type: 'success',
      title,
      description: message,
      icon: 'check-check',
      duration: 3000,
    }),
  // 快捷方法：错误消息
  error: (message: string, title?: string) =>
    addToast({
      type: 'error',
      title,
      description: message,
      icon: 'circle-alert',
      duration: 5000,
    }),
  // 快捷方法：警告消息
  warning: (message: string, title?: string) =>
    addToast({
      type: 'warning',
      title,
      description: message,
      icon: 'triangle-alert',
      duration: 4000,
    }),
  // 快捷方法：信息消息
  info: (message: string, title?: string) =>
    addToast({
      type: 'info',
      title,
      description: message,
      icon: 'bell',
      duration: 3000,
    }),
};

// 提供toast方法给子组件
provide('toast', toastMethods);

// 暴露方法给父组件（通过模板引用访问）
defineExpose(toastMethods);

// 生命周期钩子：组件挂载时
onMounted(() => {
  // 开发环境：将方法挂载到window对象作为调试辅助
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    (window as any).__sonner__ = toastMethods;
  }
});

// 生命周期钩子：组件卸载时清理资源
onUnmounted(() => {
  // 清理所有定时器，防止内存泄漏
  timers.forEach(timer => window.clearTimeout(timer));

  // 移除开发环境的全局引用
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    delete (window as any).__sonner__;
  }
});
</script>

<style scoped>
/* 容器基础样式 */
.sonner-toaster {
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  pointer-events: none;
}

.sonner-toast-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
}

/* 单个Toast样式 */
.sonner-toast {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  min-width: 320px;
  max-width: 400px;
  pointer-events: all;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Toast内部元素 */
.sonner-toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.sonner-toast-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sonner-toast-title {
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
}

.sonner-toast-description {
  font-size: 13px;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
}

.sonner-toast-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #9ca3af;
  flex-shrink: 0;
  transition: background-color 0.2s ease;
  padding: 0;
}

.sonner-toast-close:hover {
  background-color: #f3f4f6;
}

/* Toast类型样式 */
.sonner-toast-success .sonner-toast-icon {
  color: #10b981;
}

.sonner-toast-error .sonner-toast-icon {
  color: #ef4444;
}

.sonner-toast-warning .sonner-toast-icon {
  color: #f59e0b;
}

.sonner-toast-info .sonner-toast-icon {
  color: #3b82f6;
}

/* Toast尺寸变体 */
.sonner-toast-small {
  min-width: 240px;
  padding: 12px 16px;
  font-size: 13px;
}

.sonner-toast-large {
  min-width: 480px;
  max-width: 600px;
  padding: 20px;
}

/* 过渡动画 */
.sonner-toast-enter-active,
.sonner-toast-leave-active {
  transition: all 0.3s ease;
}

.sonner-toast-enter-from,
.sonner-toast-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.sonner-toast-move {
  transition: transform 0.3s ease;
}

/* 位置变体样式 */
.sonner-toaster-top-right {
  top: var(--offset, 16px);
  right: var(--offset, 16px);
  align-items: flex-end;
}

.sonner-toaster-top-left {
  top: var(--offset, 16px);
  left: var(--offset, 16px);
  align-items: flex-start;
}

.sonner-toaster-top-center {
  top: var(--offset, 16px);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

.sonner-toaster-bottom-right {
  bottom: var(--offset, 16px);
  right: var(--offset, 16px);
  align-items: flex-end;
}

.sonner-toaster-bottom-left {
  bottom: var(--offset, 16px);
  left: var(--offset, 16px);
  align-items: flex-start;
}

.sonner-toaster-bottom-center {
  bottom: var(--offset, 16px);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .sonner-toast {
    min-width: auto;
    width: calc(100vw - 48px);
  }
}
</style>
