export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';

export type ModalPosition =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'absolute';

export type ModalAnimation = 'zoom' | 'slide' | 'fade' | 'bounce';

export interface ModalOptions {
  title?: string;
  content?: string | HTMLElement | (() => HTMLElement);
  size?: ModalSize;
  position?: ModalPosition;
  animation?: ModalAnimation;
  closable?: boolean;
  maskClosable?: boolean;
  escClosable?: boolean;
  footer?: boolean | HTMLElement | (() => HTMLElement);
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}
