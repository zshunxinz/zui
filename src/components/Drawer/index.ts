import Drawer from './Drawer.vue';
import type { DrawerOptions, DrawerSize, DrawerPosition } from './types';
import { createApp, h } from 'vue';

// 用于管理抽屉z-index的计数器
let zIndexCounter = 1000;

// 函数式调用API
export function showDrawer(options: DrawerOptions): { close: () => void } {
  const container = document.createElement('div');
  let isClosed = false;
  // 为当前抽屉生成唯一的z-index值
  const currentZIndex = zIndexCounter++;

  // 先定义drawer对象，确保footer函数中可以访问到
  const drawer = {
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
      }
    }
  };

  // 配置Drawer组件的props
  const drawerProps = {
    open: true,
    title: options.title,
    content: options.content,
    size: options.size,
    position: options.position,
    closable: options.closable,
    mask: options.mask,
    maskStyle: options.maskStyle,
    maskClosable: options.maskClosable,
    escClosable: options.escClosable,
    animated: options.animated,
    animationType: options.animationType,
    width: options.width,
    height: options.height,
    // 延迟调用footer函数，确保drawer对象已创建
    footer: typeof options.footer === 'function' ? () => options.footer() : options.footer,
    zIndex: currentZIndex,
    onOk: () => {
      options.onOk?.();
      drawer.close();
    },
    onCancel: () => {
      options.onCancel?.();
      drawer.close();
    },
    onClose: drawer.close,
  };

  // 使用更简洁的方式创建和挂载组件
  const drawerApp = createApp({
    render() {
      return h(Drawer, drawerProps);
    },
  });

  drawerApp.mount(container);
  document.body.appendChild(container);

  return drawer;
}

export { Drawer, type DrawerOptions, type DrawerSize, type DrawerPosition };
export default Drawer;
