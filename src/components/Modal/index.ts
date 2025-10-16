import Modal from './Modal.vue';
import type { ModalOptions, ModalSize, ModalPosition } from './types';
import { createApp, h } from 'vue';

// 函数式调用API
export function showModal(options: ModalOptions): { close: () => void } {
  const container = document.createElement('div');
  let isClosed = false;
  
  const close = () => {
    if (!isClosed) {
      isClosed = true;
      options.onClose?.();
      // 移除DOM元素
      setTimeout(() => {
        if (container.parentNode) {
          container.parentNode.removeChild(container);
        }
      }, 300);
    }
  };
  
  const modalApp = createApp({
    render() {
      return h(Modal, {
        open: true,
        title: options.title,
        content: options.content,
        size: options.size,
        position: options.position,
        closable: options.closable,
        maskClosable: options.maskClosable,
        escClosable: options.escClosable,
        footer: options.footer,
        onOk: () => {
          options.onOk?.();
          close();
        },
        onCancel: () => {
          options.onCancel?.();
          close();
        },
        onClose: close,
      });
    },
  });
  
  modalApp.mount(container);
  document.body.appendChild(container);
  
  return { close };
}

export { Modal, type ModalOptions, type ModalSize, type ModalPosition };
export default Modal;