import Modal from './Modal.vue';
import type { ModalOptions, ModalSize, ModalPosition } from './types';
import { createApp, h } from 'vue';

// 用于管理弹窗z-index的计数器
let zIndexCounter = 1000;

// 函数式调用API
export function showModal(options: ModalOptions): { close: () => void } {
  const container = document.createElement('div');
  let isClosed = false;
  // 为当前弹窗生成唯一的z-index值
  const currentZIndex = zIndexCounter++;
  // 确保zIndexCounter不会无限增长
  if (zIndexCounter > 9999) {
    zIndexCounter = 1000;
  }

  // 先定义modal对象，确保footer函数中可以访问到
  const modal = {
    close: () => {
      if (!isClosed) {
        isClosed = true;
        options.onClose?.();
        // 移除DOM元素
        setTimeout(() => {
          if (container.parentNode) {
            container.parentNode.removeChild(container);
          }
        }, 300);
        // 重置计数器（可选，根据需求调整）
        // zIndexCounter = 1000;
      }
    },
  };

  // 配置Modal组件的props
  const modalProps = {
    open: true,
    title: options.title,
    content: options.content,
    size: options.size,
    position: options.position,
    closable: options.closable,
    maskClosable: options.maskClosable,
    escClosable: options.escClosable,
    mask: options.mask ?? true,
    maskStyle: options.maskStyle ?? {},
    // 延迟调用footer函数，确保modal对象已创建
    footer:
      typeof options.footer === 'function'
        ? () => options.footer()
        : options.footer,
    zIndex: currentZIndex,
    contentStyle: options.contentStyle,
    onOk: () => {
      options.onOk?.();
      modal.close();
    },
    onCancel: () => {
      options.onCancel?.();
      modal.close();
    },
    onClose: modal.close,
  };

  // 使用更简洁的方式创建和挂载组件
  const modalApp = createApp({
    render() {
      return h(Modal, modalProps);
    },
  });

  modalApp.mount(container);
  document.body.appendChild(container);

  return modal;
}

export { Modal, type ModalOptions, type ModalSize, type ModalPosition };
export default Modal;
