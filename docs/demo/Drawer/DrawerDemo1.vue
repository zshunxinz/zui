<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <div class="button-group">
        <Button @click="drawerVisible = true">打开非函数式抽屉</Button>
        <Button @click="showBasicDrawer">右侧抽屉</Button>
        <Button @click="showLeftDrawer">左侧抽屉</Button>
        <Button @click="showTopDrawer">顶部抽屉</Button>
        <Button @click="showBottomDrawer">底部抽屉</Button>
        <Button @click="showCustomizedDrawer">自定义按钮</Button>
        <Button @click="showAsyncDrawer">异步关闭</Button>
        <Button @click="showNoMaskDrawer">无边框遮罩</Button>
      </div>

      <!-- 非函数式抽屉示例 -->
      <Drawer v-model:open="drawerVisible" title="非函数式抽屉示例">
        <template #header>
          <div class="custom-header">
            <h3>自定义头部</h3>
            <p>这是使用非函数式调用的抽屉</p>
          </div>
        </template>

        <div class="drawer-content">
          <p>这是抽屉的主要内容区域</p>
          <p>您可以在这里放置任何您需要的内容，包括表单、列表、图片等</p>
          <p>使用非函数式调用方式可以更好地与Vue的组件体系集成</p>
        </div>

        <template #footer>
          <div class="custom-footer">
            <Button @click="drawerVisible = false">取消</Button>
            <Button type="primary" @click="handleNonFuncOk">确定</Button>
          </div>
        </template>
      </Drawer>

      <div class="demo-section">
        <h3>动画类型演示</h3>
        <p>
          Drawer组件支持三种不同的动画类型：slide（默认）、scale（缩放）和zoom（缩放+透明度）
        </p>
        <div class="button-group">
          <Button @click="showSlideAnimationDrawer">滑动动画 (slide)</Button>
          <Button @click="showScaleAnimationDrawer">缩放动画 (scale)</Button>
          <Button @click="showZoomAnimationDrawer"
            >缩放+透明度动画 (zoom)</Button
          >
        </div>
      </div>

      <div class="info-box">
        <h3>函数式 API 说明</h3>
        <p>
          通过
          <code>showDrawer(options)</code>
          函数可以方便地在任何地方打开抽屉，无需在模板中预先声明组件。
        </p>
        <p>
          该函数返回一个包含 <code>close()</code> 方法的对象，用于手动关闭抽屉。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 从全局 window 对象获取 showDrawer 函数
import { ref } from 'vue';
const showDrawer = window.showDrawer;

// 非函数式抽屉示例
const drawerVisible = ref(false);

// 非函数式抽屉确定按钮处理函数
const handleNonFuncOk = () => {
  console.log('非函数式抽屉点击了确定按钮');
  drawerVisible.value = false;
};

// 右侧抽屉示例
const showBasicDrawer = () => {
  showDrawer({
    title: '右侧抽屉',
    content: '这是一个通过函数式 API 打开的右侧抽屉示例。',
    size: 'md',
    position: 'right',
    width: 900,
    height: 500,
    animated: true,
    onOk: () => {
      console.log('点击了确定按钮');
    },
    onCancel: () => {
      console.log('点击了取消按钮');
    },
  });
};

// 左侧抽屉示例
const showLeftDrawer = () => {
  showDrawer({
    title: '左侧抽屉',
    content: '这是一个通过函数式 API 打开的左侧抽屉示例。',
    size: 'sm',
    position: 'left',
    onOk: () => {
      console.log('点击了确定按钮');
    },
    onCancel: () => {
      console.log('点击了取消按钮');
    },
  });
};

// 顶部抽屉示例
const showTopDrawer = () => {
  showDrawer({
    title: '顶部抽屉',
    content: '这是一个通过函数式 API 打开的顶部抽屉示例。',
    size: 'md',
    position: 'top',
    onOk: () => {
      console.log('点击了确定按钮');
    },
    onCancel: () => {
      console.log('点击了取消按钮');
    },
  });
};

// 底部抽屉示例
const showBottomDrawer = () => {
  showDrawer({
    title: '底部抽屉',
    content: '这是一个通过函数式 API 打开的底部抽屉示例。',
    size: 'md',
    position: 'bottom',
    onOk: () => {
      console.log('点击了确定按钮');
    },
    onCancel: () => {
      console.log('点击了取消按钮');
    },
  });
};

// 自定义按钮示例
const showCustomizedDrawer = () => {
  const drawer = showDrawer({
    title: '自定义按钮',
    content: '这个抽屉使用了自定义的底部按钮。',
    size: 'md',
    position: 'right',
    footer: () => {
      // 创建自定义底部
      const footer = document.createElement('div');
      footer.className = 'custom-footer';
      footer.style.display = 'flex';
      footer.style.justifyContent = 'flex-end';
      footer.style.gap = '8px';

      // 创建删除按钮
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '删除';
      deleteBtn.className = 'btn btn--danger';
      deleteBtn.style.padding = '4px 8px';
      deleteBtn.style.borderRadius = '4px';
      deleteBtn.onclick = () => {
        alert('删除操作执行');
        drawer.close();
      };

      // 创建取消按钮
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = '取消';
      cancelBtn.className = 'btn btn--default';
      cancelBtn.onclick = () => {
        drawer.close();
      };

      footer.appendChild(cancelBtn);
      footer.appendChild(deleteBtn);
      return footer;
    },
    onClose: () => {
      console.log('抽屉已关闭');
    },
  });
};

// 异步关闭示例
const showAsyncDrawer = () => {
  let drawer;

  drawer = showDrawer({
    title: '异步关闭',
    content: '点击确定后将模拟异步操作，操作完成后自动关闭抽屉。',
    size: 'lg',
    position: 'right',
    onOk: () => {
      // 模拟异步操作
      setTimeout(() => {
        console.log('异步操作完成');
        drawer.close();
      }, 2000);
    },
    onCancel: () => {
      // 如果有正在进行的异步操作，可以在这里处理
      console.log('取消操作');
    },
  });
};

// 无边框遮罩示例
const showNoMaskDrawer = () => {
  showDrawer({
    title: '无边框遮罩',
    content: '这个抽屉没有显示遮罩层',
    position: 'right',
    mask: false,
  });
};

// 滑动动画示例 (默认动画)
const showSlideAnimationDrawer = () => {
  showDrawer({
    title: '滑动动画 (slide)',
    content: '这是使用默认滑动动画效果的抽屉示例。抽屉会从指定方向平滑滑入。',
    size: 'md',
    position: 'right',
    animated: true,
    animationType: 'slide',
    onOk: () => {
      console.log('点击了确定按钮');
    },
    onCancel: () => {
      console.log('点击了取消按钮');
    },
  });
};

// 缩放动画示例
const showScaleAnimationDrawer = () => {
  showDrawer({
    title: '缩放动画 (scale)',
    content: '这是使用缩放动画效果的抽屉示例。抽屉会从指定方向缩放进入。',
    size: 'md',
    position: 'right',
    animated: true,
    animationType: 'scale',
    onOk: () => {
      console.log('点击了确定按钮');
    },
    onCancel: () => {
      console.log('点击了取消按钮');
    },
  });
};

// 缩放+透明度动画示例
const showZoomAnimationDrawer = () => {
  showDrawer({
    title: '缩放+透明度动画 (zoom)',
    content:
      '这是使用缩放+透明度动画效果的抽屉示例。抽屉会从指定方向缩放并淡入。',
    size: 'md',
    position: 'right',
    animated: true,
    animationType: 'zoom',
    onOk: () => {
      console.log('点击了确定按钮');
    },
    onCancel: () => {
      console.log('点击了取消按钮');
    },
  });
};
</script>

<style scoped>
.drawer-demo {
  padding: 20px;
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
}

.demo-header {
  margin-bottom: 24px;
}

.demo-header h2 {
  margin: 0 0 8px 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.demo-header p {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.info-box {
  padding: 16px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary);
}

.info-box h3 {
  margin: 0 0 12px 0;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.info-box p {
  margin: 8px 0;
  line-height: 1.6;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.info-box code {
  background-color: var(--bg-muted);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--text-primary);
}
</style>
