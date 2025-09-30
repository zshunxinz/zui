<template>
  <div class="sonner-demo">
    <h2 class="demo-title">Sonner 消息提示 - 不同类型</h2>
    
    <p class="demo-intro">
      Sonner 提供多种消息类型和丰富的自定义选项，满足不同场景下的需求。点击下方按钮查看效果。
    </p>
    
    <div class="demo-section">
      <h3 class="section-title">基本消息类型</h3>
      <div class="demo-content">
        <Button type="success" @click="showSuccessToasts">显示成功消息</Button>
        <Button type="danger" @click="showErrorToasts">显示错误消息</Button>
        <Button type="warning" @click="showWarningToasts">显示警告消息</Button>
        <Button type="info" @click="showInfoToasts">显示信息消息</Button>
        <Button @click="showDefaultToast">显示默认消息</Button>
      </div>
      <div class="demo-notes">
        <p>每种类型的消息都有对应的图标和默认样式，可以根据场景选择合适的类型。</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">自定义样式</h3>
      <div class="demo-content">
        <Button @click="showCustomStyledToasts">显示自定义样式消息</Button>
        <Button @click="showSizeVariations">显示不同尺寸消息</Button>
        <Button @click="showColorVariations">显示不同颜色消息</Button>
      </div>
      <div class="demo-notes">
        <p>通过自定义选项可以控制消息的外观，包括大小、颜色等属性。</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">交互式消息</h3>
      <div class="demo-content">
        <Button @click="showInteractiveToast">显示交互式消息</Button>
        <Button @click="showToastWithAction">带操作按钮的消息</Button>
        <Button @click="showToastWithLink">带链接的消息</Button>
      </div>
      <div class="demo-notes">
        <p>交互式消息可以包含操作按钮、链接等元素，提供更丰富的用户体验。</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">高级应用场景</h3>
      <div class="demo-content">
        <Button @click="showConfirmToast">确认对话框</Button>
        <Button @click="showProgressToast">进度提示</Button>
        <Button @click="showNotificationGroup">通知组</Button>
      </div>
      <div class="demo-notes">
        <p>结合不同功能，可以实现更复杂的交互场景。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { Button } from '../../../src/components/Button';

// 通过 getCurrentInstance 获取全局注册的 $toast 方法
const { proxy } = getCurrentInstance() as any;
const toast = proxy.$toast;

// 显示成功消息示例 - 用于操作成功的场景
const showSuccessToasts = () => {
  // 基本成功消息
  toast.success('数据已成功保存', '保存成功');
  
  // 延迟显示另一条成功消息
  setTimeout(() => {
    toast.success('文件上传完成', '上传成功');
  }, 1000);
};

// 显示错误消息示例 - 用于操作失败的场景
const showErrorToasts = () => {
  // 网络错误示例
  toast.error('网络连接失败，请检查网络设置', '连接错误');
  
  // 延迟显示另一条错误消息
  setTimeout(() => {
    toast.error('文件格式不支持，请选择正确的文件格式', '格式错误');
  }, 1000);
};

// 显示警告消息示例 - 用于需要注意的情况
const showWarningToasts = () => {
  // 会话过期警告
  toast.warning('您的会话将在 5 分钟后过期', '会话提醒');
  
  // 延迟显示另一条警告消息
  setTimeout(() => {
    toast.warning('此操作将覆盖现有数据，请谨慎操作', '操作警告');
  }, 1000);
};

// 显示信息消息示例 - 用于一般信息的展示
const showInfoToasts = () => {
  // 系统维护通知
  toast.info('系统将在今晚 10 点进行维护', '系统通知');
  
  // 延迟显示另一条信息消息
  setTimeout(() => {
    toast.info('您有 3 条新消息', '消息提醒');
  }, 1000);
};

// 显示默认消息示例 - 通用消息类型
const showDefaultToast = () => {
  toast.addToast({
    title: '通用通知',
    description: '这是一条默认类型的消息提示',
  });
};

// 显示自定义样式消息示例
const showCustomStyledToasts = () => {
  // 圆角消息
  toast.addToast({
    title: '圆角消息',
    description: '这是一条带有圆角样式的消息提示',
    type: 'warning',
    className: 'rounded-lg',
  });
  
  // 延迟显示阴影消息
  setTimeout(() => {
    toast.addToast({
      title: '阴影消息',
      description: '这是一条带有增强阴影的消息提示',
      type: 'error',
      className: 'shadow-lg',
    });
  }, 500);
  
  // 延迟显示自定义背景色消息
  setTimeout(() => {
    toast.addToast({
      title: '彩色消息',
      description: '这是一条带有自定义背景色的消息提示',
      type: 'info',
      className: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
    });
  }, 1000);
};

// 显示不同尺寸消息示例
const showSizeVariations = () => {
  // 小型消息
  toast.addToast({
    title: '小型消息',
    description: '适合简短的状态提示',
    type: 'info',
    size: 'small',
  });
  
  // 延迟显示中型消息（默认尺寸）
  setTimeout(() => {
    toast.addToast({
      title: '中型消息',
      description: '默认尺寸，适合大多数场景',
      type: 'success',
    });
  }, 500);
  
  // 延迟显示大型消息
  setTimeout(() => {
    toast.addToast({
      title: '大型消息',
      description: '适合包含更多信息的详细通知，提供更丰富的上下文内容和描述',
      type: 'warning',
      size: 'large',
    });
  }, 1000);
};

// 显示不同颜色消息示例
const showColorVariations = () => {
  // 主要颜色
  toast.addToast({
    title: '主要颜色',
    description: '使用品牌主色的消息',
    type: 'success',
  });
  
  // 辅助颜色
  setTimeout(() => {
    toast.addToast({
      title: '辅助颜色',
      description: '使用辅助色的消息',
      type: 'info',
    });
  }, 500);
  
  // 自定义颜色
  setTimeout(() => {
    toast.addToast({
      title: '自定义颜色',
      description: '使用自定义CSS类的消息',
      className: 'bg-gradient-to-r from-pink-500 to-orange-500 text-white',
    });
  }, 1000);
};

// 显示交互式消息示例
const showInteractiveToast = () => {
  // 点击消息本身触发回调
  const toastId = toast.addToast({
    title: '点击查看详情',
    description: '点击此消息查看更多信息',
    type: 'info',
    duration: Infinity,
  });
  
  // 这里可以添加实际的点击处理逻辑
  // 注意：实际的点击处理在Sonner组件内部实现
  // 可以在组件中添加自定义的点击事件逻辑
};

// 显示带操作按钮的消息示例
const showToastWithAction = () => {
  // 模拟带操作按钮的消息
  toast.addToast({
    title: '需要确认',
    description: '是否继续执行此操作？',
    type: 'warning',
    duration: Infinity,
    // 注意：实际的按钮需要在Sonner组件内部或通过其他方式实现
  });
  
  // 显示后续操作的结果消息
  setTimeout(() => {
    toast.success('操作已确认', '已完成');
  }, 3000);
};

// 显示带链接的消息示例
const showToastWithLink = () => {
  toast.addToast({
    title: '查看详情',
    description: '点击查看完整报告',
    type: 'info',
    duration: 8000,
    // 注意：实际的链接需要在Sonner组件内部或通过其他方式实现
  });
};

// 显示确认对话框示例
const showConfirmToast = () => {
  const confirmToastId = toast.addToast({
    title: '确认删除',
    description: '确定要删除此项目吗？此操作不可撤销。',
    type: 'warning',
    duration: Infinity,
  });
  
  // 模拟用户确认操作
  setTimeout(() => {
    toast.dismissToast(confirmToastId);
    toast.success('项目已成功删除', '删除完成');
  }, 2000);
};

// 显示进度提示示例
const showProgressToast = () => {
  // 模拟文件上传进度
  const progressToastId = toast.addToast({
    title: '文件上传中',
    description: '正在上传文档.pdf...',
    type: 'info',
    duration: Infinity,
  });
  
  // 模拟上传完成
  setTimeout(() => {
    toast.updateToast(progressToastId, {
      title: '上传完成',
      description: '文档.pdf 已成功上传',
      type: 'success',
      duration: 3000,
    });
  }, 2000);
};

// 显示通知组示例
const showNotificationGroup = () => {
  // 模拟收到多条相关通知
  toast.info('您有新的系统更新', '系统通知');
  setTimeout(() => toast.success('更新已下载', '准备安装'), 800);
  setTimeout(() => toast.warning('点击立即安装', '更新提示'), 1600);
  setTimeout(() => toast.success('系统更新完成', '已更新至最新版本'), 2400);
};
</script>

<style scoped>
.sonner-demo {
  padding: 20px;
  background-color: var(--color-bg-1);
  border-radius: 8px;
}

.demo-intro {
  font-size: 14px;
  color: var(--color-text-3);
  margin-bottom: 24px;
  line-height: 1.5;
}

.demo-title {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--color-text-1);
  font-weight: 600;
}

.demo-section {
  margin-bottom: 32px;
  padding: 16px;
  background-color: var(--color-bg-2);
  border-radius: 6px;
  border: 1px solid var(--color-border);
}

.section-title {
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--color-text-1);
  font-weight: 500;
}

.demo-content {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.demo-notes {
  font-size: 13px;
  color: var(--color-text-4);
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--color-border);
}

.demo-notes p {
  margin: 0;
  line-height: 1.4;
}

/* 自定义样式类 */
.rounded-lg {
  border-radius: 12px !important;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
}

/* 自定义渐变背景色 */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops)) !important;
}

.from-blue-500 {
  --tw-gradient-from: #3b82f6;
  --tw-gradient-to: transparent;
}

.to-purple-600 {
  --tw-gradient-to: #8b5cf6;
}

.from-pink-500 {
  --tw-gradient-from: #ec4899;
  --tw-gradient-to: transparent;
}

.to-orange-500 {
  --tw-gradient-to: #f97316;
}

.text-white {
  color: white !important;
}
</style>