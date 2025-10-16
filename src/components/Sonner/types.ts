// Sonner 组件的类型定义

export type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info';
export type ToastSize = 'small' | 'default' | 'large';
export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center';

export interface Toast {
  id: number;
  type?: ToastType;
  title?: string;
  description?: string;
  duration?: number;
  dismissible?: boolean;
  icon?: string;
  style?: Record<string, string>;
  size?: ToastSize;
  rounded?: boolean;
  shadow?: boolean;
  slot?: string;
  createdAt: number;
}

export interface ToastMethods {
  addToast: (toast: Omit<Toast, 'id'>) => number;
  dismissToast: (id: number) => void;
  dismissAll: () => void;
  updateToast: (id: number, updates: Partial<Toast>) => void;
  toggleTimer?: (id: number, pause: boolean) => void;
}

export interface ToastPluginInstance {
  addToast: (toast: Omit<Toast, 'id'>) => number;
  dismissToast: (id: number) => void;
  dismissAll: () => void;
  updateToast: (id: number, updates: Partial<Toast>) => void;
  success: (message: string, title?: string) => number;
  error: (message: string, title?: string) => number;
  warning: (message: string, title?: string) => number;
  info: (message: string, title?: string) => number;
}
