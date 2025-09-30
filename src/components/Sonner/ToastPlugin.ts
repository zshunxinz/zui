import { App, getCurrentInstance, inject } from 'vue';
import Sonner from './Sonner.vue';
import type { ToastPluginInstance, Toast } from './types';

/**
 * Toast 插件
 * 提供全局访问 Toast 功能的方法
 */
const ToastPlugin = {
  install(app: App) {
    // 注册 Sonner 组件
    app.component('Sonner', Sonner);
    
    // 创建全局 Toast 方法
    const toast: ToastPluginInstance = {
      // 添加自定义 Toast
      addToast(options: Omit<Toast, 'id'>): number {
        // 1. 优先使用Vue的inject机制获取toast实例
        const injectedToast = inject<ToastPluginInstance>('toast');
        if (injectedToast) {
          return injectedToast.addToast(options);
        }
        
        // 2. 尝试直接获取Sonner实例
        const sonnerInstance = getSonnerInstance();
        if (sonnerInstance) {
          return sonnerInstance.addToast(options);
        }
        
        // 3. 作为最终后备方案，直接创建并显示toast
        const toastId = Math.floor(Math.random() * 10000);
        createFallbackToast(toastId, options);
        return toastId;
      },
      
      // 关闭指定 Toast
      dismissToast(id: number): void {
        const sonnerInstance = getSonnerInstance();
        if (sonnerInstance) {
          sonnerInstance.dismissToast(id);
        } else {
          // 尝试关闭后备方案创建的toast
          removeFallbackToast(id);
        }
      },
      
      // 关闭所有 Toast
      dismissAll(): void {
        const sonnerInstance = getSonnerInstance();
        if (sonnerInstance) {
          sonnerInstance.dismissAll();
        } else {
          // 关闭所有后备方案创建的toast
          removeAllFallbackToasts();
        }
      },
      
      // 更新指定 Toast
      updateToast(id: number, updates: Partial<Toast>): void {
        const sonnerInstance = getSonnerInstance();
        if (sonnerInstance) {
          sonnerInstance.updateToast(id, updates);
        }
      },
      
      // 成功提示
      success(message: string, title?: string): number {
        return this.addToast({
          type: 'success',
          title,
          description: message,
          icon: 'check-check',
          duration: 3000,
        });
      },
      
      // 错误提示
      error(message: string, title?: string): number {
        return this.addToast({
          type: 'error',
          title,
          description: message,
          icon: 'circle-alert',
          duration: 5000,
        });
      },
      
      // 警告提示
      warning(message: string, title?: string): number {
        return this.addToast({
          type: 'warning',
          title,
          description: message,
          icon: 'triangle-alert',
          duration: 4000,
        });
      },
      
      // 信息提示
      info(message: string, title?: string): number {
        return this.addToast({
          type: 'info',
          title,
          description: message,
          icon: 'bell',
          duration: 3000,
        });
      },
    };
    
    // 全局属性
    app.config.globalProperties.$toast = toast;
    
    // Provide/inject
    app.provide('toast', toast);
  },
};

/**
 * 获取 Sonner 实例
 * 尝试通过多种方式获取Sonner实例
 */
function getSonnerInstance() {
  // 1. 尝试从当前组件实例中获取
  const instance = getCurrentInstance();
  if (instance) {
    // 2. 尝试从应用实例中获取
    if (instance.appContext.config.globalProperties.$sonner) {
      return instance.appContext.config.globalProperties.$sonner;
    }
    
    // 3. 尝试从父组件链中查找Sonner实例
    let current = instance.parent;
    while (current) {
      if (current.type.name === 'Sonner') {
        return current.exposed;
      }
      current = current.parent;
    }
  }
  
  // 4. 作为最后后备方案，从window对象中获取
  if (typeof window !== 'undefined') {
    // 为了兼容旧版代码，保留window对象的支持
    const win = window as any;
    return win.__sonner__ || win.$sonner || (win.$app && win.$app.$sonner);
  }
  
  return null;
}

/**
 * 后备方案：直接创建DOM元素显示toast
 * 仅在无法获取Sonner实例时使用
 */
const fallbackToasts = new Map<number, HTMLElement>();

function createFallbackToast(id: number, options: Omit<Toast, 'id'>) {
  if (typeof window === 'undefined') return;
  
  // 创建toast容器
  const toastElement = document.createElement('div');
  toastElement.id = `fallback-toast-${id}`;
  toastElement.className = `x-sonner-toast x-sonner-toast--${options.type || 'default'} x-sonner-toast-fallback`;
  toastElement.style.cssText = `
    position: fixed;
    top: 16px;
    right: 16px;
    background-color: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    min-width: 320px;
    max-width: 400px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(-20px);
  `;
  
  // 设置toast内容
  let content = '';
  if (options.icon) {
    content += `<div style="float: left; margin-right: 12px;">${getIconHTML(options.icon)}</div>`;
  }
  content += '<div>';
  if (options.title) {
    content += `<div style="font-weight: 600; margin-bottom: 4px;">${options.title}</div>`;
  }
  if (options.description) {
    content += `<div style="font-size: 14px; color: #4b5563;">${options.description}</div>`;
  }
  content += '</div>';
  
  // 添加关闭按钮
  if (options.dismissible !== false) {
    content += `
      <button 
        style="
          background: none;
          border: none;
          color: #9ca3af;
          padding: 4px;
          border-radius: 50%;
          cursor: pointer;
          float: right;
        "
        onclick="document.getElementById('fallback-toast-${id}')?.remove();"
        aria-label="关闭"
      >
        ×
      </button>
    `;
  }
  
  toastElement.innerHTML = content;
  
  // 添加到DOM
  document.body.appendChild(toastElement);
  
  // 显示动画
  setTimeout(() => {
    toastElement.style.opacity = '1';
    toastElement.style.transform = 'translateY(0)';
  }, 10);
  
  // 设置自动关闭
  if (options.duration !== Infinity) {
    const duration = options.duration || 5000;
    setTimeout(() => {
      removeFallbackToast(id);
    }, duration);
  }
  
  // 存储引用
  fallbackToasts.set(id, toastElement);
}

function removeFallbackToast(id: number) {
  const toastElement = fallbackToasts.get(id);
  if (toastElement && toastElement.parentNode) {
    // 隐藏动画
    toastElement.style.opacity = '0';
    toastElement.style.transform = 'translateY(-20px)';
    
    // 移除元素
    setTimeout(() => {
      if (toastElement.parentNode) {
        toastElement.parentNode.removeChild(toastElement);
      }
      fallbackToasts.delete(id);
    }, 300);
  }
}

function removeAllFallbackToasts() {
  fallbackToasts.forEach((_, id) => {
    removeFallbackToast(id);
  });
}

function getIconHTML(iconName: string): string {
  // 简单的图标映射，实际项目中可能需要更复杂的图标处理
  const iconMap: Record<string, string> = {
    'check-check': '✓',
    'circle-alert': '!',
    'triangle-alert': '⚠',
    'bell': '🔔',
    'x': '×'
  };
  
  return iconMap[iconName] || 'ℹ';
}

export default ToastPlugin;

export { ToastPlugin };

export * from './types';

export type { ToastPluginInstance };