<template>
  <div class="sonner-demo-container">
    <h1>Sonner Toast 演示</h1>
    <p>点击下方按钮测试各种Toast功能</p>
    
    <div class="demo-buttons">
      <!-- 基本类型测试 -->
      <div class="demo-section">
        <h2>基本类型</h2>
        <button @click="showSuccessToast">成功提示</button>
        <button @click="showErrorToast">错误提示</button>
        <button @click="showWarningToast">警告提示</button>
        <button @click="showInfoToast">信息提示</button>
      </div>
      
      <!-- 自定义选项测试 -->
      <div class="demo-section">
        <h2>自定义选项</h2>
        <button @click="showCustomToast">自定义Toast</button>
        <button @click="showLongToast">长时间显示</button>
        <button @click="showUndismissableToast">不可关闭</button>
        <button @click="showDifferentSizes">不同尺寸</button>
      </div>
      
      <!-- 编程控制测试 -->
      <div class="demo-section">
        <h2>编程控制</h2>
        <button @click="showControlledToast">可控Toast</button>
        <button @click="dismissFirstToast">关闭第一个</button>
        <button @click="dismissAllToasts">关闭全部</button>
        <button @click="updateToast">更新Toast</button>
      </div>
      
      <!-- 不同位置测试 -->
      <div class="demo-section">
        <h2>不同位置</h2>
        <button @click="showTopRight">右上</button>
        <button @click="showTopLeft">左上</button>
        <button @click="showTopCenter">上中</button>
        <button @click="showBottomRight">右下</button>
        <button @click="showBottomLeft">左下</button>
        <button @click="showBottomCenter">下中</button>
      </div>
    </div>
    
    <!-- 特殊测试 -->
    <div class="demo-special">
      <h2>特殊测试</h2>
      <button @click="showMultipleToasts">同时显示多个</button>
      <button @click="showToastWithTitle">带标题Toast</button>
      <button @click="showToastWithIcon">自定义图标</button>
    </div>
    
    <!-- 问题排查 -->
    <div class="demo-troubleshoot">
      <h2>问题排查</h2>
      <p>当前可见Toast数量: {{ visibleToastCount }}</p>
      <button @click="checkInstance">检查实例</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';
import type { ToastPluginInstance } from '../components/Sonner/types';

// 获取toast实例的多种方式
let toastInstance: ToastPluginInstance | null = null;
let currentToastId = 0;

// 统计可见toast数量
const visibleToastCount = ref(0);
let intervalId: number | null = null;

// 1. 尝试通过inject获取
const injectedToast = inject<ToastPluginInstance>('toast');

// 2. 尝试通过全局属性获取
// 注意：在script setup中不能直接访问this，所以需要用其他方式

// 3. 尝试通过window对象获取
const getToastInstance = (): ToastPluginInstance | null => {
  // 优先使用inject获取的实例
  if (injectedToast) {
    return injectedToast;
  }
  
  // 尝试从window对象获取
  if (typeof window !== 'undefined') {
    const win = window as any;
    return win.$toast || win.__sonner__ || (win.$app && win.$app.$toast);
  }
  
  return null;
};

// 组件挂载后初始化
onMounted(() => {
  toastInstance = getToastInstance();
  
  // 启动计数器
  intervalId = window.setInterval(() => {
    // 简单估算toast数量（实际项目中可能需要更精确的方法）
    if (typeof document !== 'undefined') {
      const toasts = document.querySelectorAll('[id^="sonner-toast-"]');
      visibleToastCount.value = toasts.length;
    }
  }, 100);
});

// 组件卸载时清理
onUnmounted(() => {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
});

// 基本类型测试
const showSuccessToast = () => {
  if (toastInstance) {
    toastInstance.success('操作成功！', '成功');
  } else {
    console.error('Toast实例未找到');
  }
};

const showErrorToast = () => {
  if (toastInstance) {
    toastInstance.error('操作失败，请重试', '错误');
  } else {
    console.error('Toast实例未找到');
  }
};

const showWarningToast = () => {
  if (toastInstance) {
    toastInstance.warning('请确认操作', '警告');
  } else {
    console.error('Toast实例未找到');
  }
};

const showInfoToast = () => {
  if (toastInstance) {
    toastInstance.info('这是一条提示信息', '提示');
  } else {
    console.error('Toast实例未找到');
  }
};

// 自定义选项测试
const showCustomToast = () => {
  if (toastInstance) {
    currentToastId = toastInstance.addToast({
      type: 'default',
      title: '自定义Toast',
      description: '这是一个带有自定义选项的Toast',
      duration: 4000,
      icon: 'bell',
      dismissible: true,
    });
  } else {
    console.error('Toast实例未找到');
  }
};

const showLongToast = () => {
  if (toastInstance) {
    toastInstance.addToast({
      type: 'info',
      title: '长时间显示',
      description: '这个Toast会显示10秒后自动关闭',
      duration: 10000,
    });
  }
};

const showUndismissableToast = () => {
  if (toastInstance) {
    toastInstance.addToast({
      type: 'warning',
      title: '重要提示',
      description: '这个Toast不可关闭，只能等它自动消失',
      duration: 5000,
      dismissible: false,
    });
  }
};

const showDifferentSizes = () => {
  if (toastInstance) {
    toastInstance.addToast({
      type: 'info',
      title: '小型Toast',
      description: '这是一个小型Toast',
      size: 'small',
    });
    
    setTimeout(() => {
      toastInstance?.addToast({
        type: 'success',
        title: '大型Toast',
        description: '这是一个大型Toast，包含更多的内容空间',
        size: 'large',
      });
    }, 500);
  }
};

// 编程控制测试
const showControlledToast = () => {
  if (toastInstance) {
    currentToastId = toastInstance.addToast({
      type: 'info',
      title: '可控Toast',
      description: '这个Toast可以通过代码控制',
      duration: Infinity,
    });
  }
};

const dismissFirstToast = () => {
  if (toastInstance && currentToastId > 0) {
    toastInstance.dismissToast(currentToastId);
  }
};

const dismissAllToasts = () => {
  if (toastInstance) {
    toastInstance.dismissAll();
  }
};

const updateToast = () => {
  if (toastInstance && currentToastId > 0) {
    toastInstance.updateToast(currentToastId, {
      title: '已更新',
      description: '这个Toast的内容已经被更新',
      type: 'success',
    });
  }
};

// 不同位置测试
const showTopRight = () => {
  // 注意：位置是在Sonner组件上设置的，这里只是演示
  showInfoToast();
};

const showTopLeft = () => {
  // 在实际使用中，你需要在不同位置放置Sonner组件
  showWarningToast();
};

const showTopCenter = () => {
  showSuccessToast();
};

const showBottomRight = () => {
  showErrorToast();
};

const showBottomLeft = () => {
  showInfoToast();
};

const showBottomCenter = () => {
  showSuccessToast();
};

// 特殊测试
const showMultipleToasts = () => {
  if (toastInstance) {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        toastInstance?.info(`Toast ${i + 1}`, '多个Toast');
      }, i * 300);
    }
  }
};

const showToastWithTitle = () => {
  if (toastInstance) {
    toastInstance.addToast({
      type: 'success',
      title: '完整标题',
      description: '这是带有完整标题和描述的Toast',
    });
  }
};

const showToastWithIcon = () => {
  if (toastInstance) {
    toastInstance.addToast({
      type: 'info',
      title: '自定义图标',
      description: '这个Toast使用了自定义图标',
      icon: 'bell',
    });
  }
};

// 问题排查
const checkInstance = () => {
  const instance = getToastInstance();
  console.log('Toast实例状态:', instance ? '已找到' : '未找到');
  console.log('Instance详情:', instance);
  
  // 尝试直接通过DOM显示一个测试Toast
  if (!instance && typeof document !== 'undefined') {
    console.log('尝试直接通过DOM显示Toast...');
    const testToast = document.createElement('div');
    testToast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #333;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 9999;
    `;
    testToast.textContent = '直接DOM测试Toast (5秒后消失)';
    document.body.appendChild(testToast);
    
    setTimeout(() => {
      testToast.remove();
    }, 5000);
  }
};
</script>

<style scoped>
.sonner-demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

h2 {
  font-size: 1.5rem;
  margin: 20px 0 15px;
  color: #444;
}

p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
}

.demo-buttons {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eaeaea;
}

.demo-section > div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

.demo-special {
  margin-top: 40px;
  padding: 20px;
  background-color: #f0f7ff;
  border-radius: 8px;
  border: 1px solid #d0e3ff;
}

.demo-troubleshoot {
  margin-top: 40px;
  padding: 20px;
  background-color: #fff8f0;
  border-radius: 8px;
  border: 1px solid #ffe0cc;
}

.demo-troubleshoot p {
  font-weight: 500;
  color: #e67e22;
}
</style>