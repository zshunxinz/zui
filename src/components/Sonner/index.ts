import Sonner from './Sonner.vue';
import ToastPlugin from './ToastPlugin';
import { getCurrentInstance, inject } from 'vue';
import type { ToastPluginInstance, Toast } from './types';

// 导出组件和插件
export { Sonner, ToastPlugin };

export default Sonner;

export * from './types';
export * from './ToastPlugin';

// 创建全局toast实例，用于直接调用
const createToastInstance = (): ToastPluginInstance => {
  // 优先从Vue应用中获取，或者使用ToastPlugin的逻辑
  const toast: ToastPluginInstance = {
    addToast(options: Omit<Toast, 'id'>) {
      // 尝试通过inject获取
      const injectedToast = inject<ToastPluginInstance>('toast');
      if (injectedToast) {
        return injectedToast.addToast(options);
      }
      
      // 尝试获取Sonner实例
      const instance = getCurrentInstance();
      if (instance && instance.appContext.config.globalProperties.$toast) {
        return instance.appContext.config.globalProperties.$toast.addToast(options);
      }
      
      // 如果都获取不到，提供一个简单的console提示
      console.warn('Sonner toast not initialized. Please make sure to use <Sonner> component or install ToastPlugin.');
      return Math.floor(Math.random() * 10000);
    },
    
    dismissToast(id: number) {
      const instance = getCurrentInstance();
      if (instance && instance.appContext.config.globalProperties.$toast) {
        instance.appContext.config.globalProperties.$toast.dismissToast(id);
      }
    },
    
    dismissAll() {
      const instance = getCurrentInstance();
      if (instance && instance.appContext.config.globalProperties.$toast) {
        instance.appContext.config.globalProperties.$toast.dismissAll();
      }
    },
    
    updateToast(id: number, updates: Partial<Toast>) {
      const instance = getCurrentInstance();
      if (instance && instance.appContext.config.globalProperties.$toast) {
        instance.appContext.config.globalProperties.$toast.updateToast(id, updates);
      }
    },
    
    success(message: string, title?: string) {
      return this.addToast({
        type: 'success',
        title,
        description: message,
        icon: 'check-check',
        duration: 3000,
      });
    },
    
    error(message: string, title?: string) {
      return this.addToast({
        type: 'error',
        title,
        description: message,
        icon: 'circle-alert',
        duration: 5000,
      });
    },
    
    warning(message: string, title?: string) {
      return this.addToast({
        type: 'warning',
        title,
        description: message,
        icon: 'triangle-alert',
        duration: 4000,
      });
    },
    
    info(message: string, title?: string) {
      return this.addToast({
        type: 'info',
        title,
        description: message,
        icon: 'bell',
        duration: 3000,
      });
    },
  };
  
  return toast;
};

// 导出全局toast对象，可直接调用
export const toast = createToastInstance();

// 导出组合式API，更符合Vue 3的使用习惯
export function useToast(): ToastPluginInstance {
  // 优先从inject获取
  const injectedToast = inject<ToastPluginInstance>('toast');
  if (injectedToast) {
    return injectedToast;
  }
  
  // 回退到全局toast对象
  return toast;
}