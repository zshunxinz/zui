<template>
  <div class="modal-demo">
    <div class="demo-content">
      <div class="button-group">
        <Button @click="showBasicModal">基础弹窗</Button>
        <Button @click="showCustomizedModal">自定义按钮</Button>
        <Button @click="showAsyncModal">异步关闭</Button>
        <Button @click="showMultipleModal">多弹窗嵌套</Button>
        <Button @click="showNoMaskModal">无遮罩弹窗</Button>
        <Button @click="showCustomMaskModal">自定义遮罩</Button>
      </div>

      <div class="info-box">
        <h3>函数式 API 说明</h3>
        <p>
          通过
          <code>showModal(options)</code>
          函数可以方便地在任何地方打开弹窗，无需在模板中预先声明组件。
        </p>
        <p>
          该函数返回一个包含 <code>close()</code> 方法的对象，用于手动关闭弹窗。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 基础弹窗示例
const showBasicModal = () => {
  showModal({
    title: '基础函数式弹窗',
    content: '这是一个通过函数式 API 打开的基础弹窗示例。',
    size: 'md',
    onOk: () => {
      console.log('点击了确定按钮');
      // 可以在这里执行确认操作
    },
    onCancel: () => {
      console.log('点击了取消按钮');
    },
  });
};

// 自定义按钮示例
const showCustomizedModal = () => {
  const modal = showModal({
    title: '自定义按钮',
    content: '这个弹窗使用了自定义的底部按钮。',
    size: 'sm',
    footer: () => {
      // 创建自定义底部
      const footer = document.createElement('div');
      footer.className = 'custom-footer';
      footer.style.display = 'flex';
      footer.style.justifyContent = 'flex-end';
      footer.style.gap = '8px';
      footer.style.width = '100px';

      // 创建删除按钮
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '删除';
      deleteBtn.className = 'Button Button--default';
      deleteBtn.style.backgroundColor = 'var(--color-danger)';
      deleteBtn.style.color = 'white';
      deleteBtn.style.padding = '4px 8px';
      deleteBtn.style.borderRadius = '4px';
      deleteBtn.onclick = () => {
        alert('删除操作执行');
        modal.close();
      };

      // 创建取消按钮
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = '取消';
      cancelBtn.className = 'Button Button--default';
      cancelBtn.onclick = () => {
        modal.close();
      };

      footer.appendChild(cancelBtn);
      footer.appendChild(deleteBtn);
      return footer;
    },
    onClose: () => {
      console.log('弹窗已关闭');
    },
  });
};

// 异步关闭示例
const showAsyncModal = () => {
  let modal;

  modal = showModal({
    title: '异步关闭',
    content: '点击确定后将模拟异步操作，操作完成后自动关闭弹窗。',
    size: 'md',
    onOk: () => {
      // 禁用确定按钮，防止重复点击
      modal.options.confirmLoading = true;

      // 模拟异步操作
      setTimeout(() => {
        console.log('异步操作完成');
        modal.close();
      }, 2000);

      // 返回 false 阻止自动关闭
      return false;
    },
    onCancel: () => {
      // 如果有正在进行的异步操作，可以在这里处理
      console.log('取消操作');
    },
  });
};

// 多弹窗嵌套示例
const showMultipleModal = () => {
  const outerModal = showModal({
    title: '外层弹窗',
    content: '这是一个外层弹窗，点击按钮可以打开内层弹窗。',
    size: 'lg',
    footer: () => {
      const footer = document.createElement('div');
      footer.className = 'custom-footer';
      footer.style.display = 'flex';
      footer.style.justifyContent = 'flex-end';
      footer.style.gap = '8px';

      // 创建打开内层弹窗按钮
      const openInnerBtn = document.createElement('button');
      openInnerBtn.textContent = '打开内层弹窗';
      openInnerBtn.className = 'x-button x-button--primary';
      openInnerBtn.onclick = () => {
        console.log('点击了打开内层弹窗按钮');
        // 打开内层弹窗
        const innerModal = showModal({
          title: '内层弹窗',
          content: '这是一个嵌套在内层的弹窗。',
          size: 'md',
          onOk: () => {
            console.log('内层弹窗确定');
          },
          onCancel: () => {
            console.log('内层弹窗取消');
          },
        });
        console.log('内层弹窗已创建:', innerModal);
      };

      // 创建关闭按钮
      const closeBtn = document.createElement('button');
      closeBtn.textContent = '关闭';
      closeBtn.className = 'x-button x-button--default';
      closeBtn.onclick = () => {
        outerModal.close();
      };

      footer.appendChild(closeBtn);
      footer.appendChild(openInnerBtn);
      return footer;
    },
    onClose: () => {
      console.log('外层弹窗已关闭');
    },
  });
};

// 无遮罩弹窗示例
const showNoMaskModal = () => {
  showModal({
    title: '无遮罩弹窗',
    content: '这是一个没有遮罩层的弹窗，点击页面其他区域不会关闭。',
    size: 'md',
    mask: false,
    onOk: () => {
      console.log('点击了确定按钮');
    },
  });
};

// 自定义遮罩弹窗示例
const showCustomMaskModal = () => {
  showModal({
    title: '自定义遮罩弹窗',
    content: '这个弹窗使用了自定义的遮罩样式，背景为半透明绿色并带有模糊效果。',
    size: 'md',
    mask: true,
    maskStyle: {
      backgroundColor: 'rgba(0, 255, 0, 0.3)',
      backdropFilter: 'blur(5px)',
    },
    onOk: () => {
      console.log('点击了确定按钮');
    },
  });
};
</script>

<style scoped>
.modal-demo {
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
