export type DrawerSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'fullscreen';

export type DrawerPosition =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';

export interface DrawerOptions {
  title?: string;
  content?: string | HTMLElement | (() => HTMLElement);
  size?: DrawerSize;
  position?: DrawerPosition;
  closable?: boolean;
  maskClosable?: boolean;
  escClosable?: boolean;
  footer?: boolean | HTMLElement | (() => HTMLElement);
  width?: string | number;
  height?: string | number;
  animated?: boolean;
  mask?: boolean;
  /**
   * 自定义遮罩样式
   * @default {}
   */
  maskStyle?: Record<string, string | number>;
  /**
   * 动画类型
   * @default 'slide'
   */
  animationType?: 'slide' | 'scale' | 'zoom';
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}
