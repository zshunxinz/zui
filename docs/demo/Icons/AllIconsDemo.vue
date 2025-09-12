<template>
  <div class="all-icons-demo">
    <Space style="align-items: end; justify-content: end">
      <Radio
        shape="tab-button"
        name="type"
        v-model="sizeValue"
        :options="sizeOptions"
      >
      </Radio>
      <Input
        placeholder="搜索图标，可以点击复制图标组件"
        width="300px"
        name="search"
        v-model="searchValue"
        @keyup.enter="handleSearch"
      ></Input>
      <Button @click="handleSearch" outline>
        <Icon name="search"></Icon>
      </Button>
    </Space>
    <div class="icons-grid" ref="iconsGrid">
      <div v-for="icon in iconsD" :key="icon">
        <Tooltip :content="icon" placement="bottom" :arrow="false">
          <div
            class="icon-item"
            :data-icon="icon"
            @click="copyIconComponent(icon)"
            style="cursor: pointer"
          >
            <div
              v-if="visibleIcons.includes(icon)"
              style="
                width: 100%;
                height: 49px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <Icon :name="icon" :size="sizeValue" />
            </div>
            <div v-else class="icon-placeholder"></div>
            <span class="icon-name">{{ icon }}</span>
            <!-- 复制成功提示 -->
            <div v-if="copiedIcon === icon" class="copy-success-tooltip">
              <Icon
                name="circle-check-big"
                :size="18"
                style="margin-right: 8px"
              />
              复制成功!
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
const sizeValue = ref(36);
const sizeOptions = ref([
  {
    label: '小',
    value: 24,
  },
  {
    label: '中',
    value: 36,
  },
  {
    label: '大',
    value: 49,
  },
]);
// 使用 import.meta.glob 动态导入所有 SVG 文件
// const iconModules = import.meta.glob('../components/Icon/icons/*.svg');
const iconModules = import.meta.glob(
  '../../../src/components/Icon/icons/*.svg'
);

// 从文件路径中提取图标名称
const icons = Object.keys(iconModules).map(path => {
  // 提取文件名并去掉 .svg 扩展名
  const fileName = path.split('/').pop();
  return fileName.replace('.svg', '');
});

// 总图标数量
const totalIcons = icons.length;

// 可见的图标列表
const visibleIcons = ref([]);
const iconsD = ref(icons);
// 已经观察的元素（避免重复观察）
const observedElements = new Set();
// 当前复制成功的图标，用于显示提示
const copiedIcon = ref(null);

// 图标网格容器引用
const iconsGrid = ref(null);

// IntersectionObserver 实例
let observer = null;

// 批量添加可见图标
let pendingIcons = [];
let updateScheduled = false;

// 批量处理可见图标
function batchUpdateVisibleIcons() {
  if (pendingIcons.length > 0) {
    // 使用requestAnimationFrame确保在下一帧渲染前更新
    requestAnimationFrame(() => {
      // 过滤掉已存在的图标
      const newIcons = pendingIcons.filter(
        icon => !visibleIcons.value.includes(icon)
      );
      if (newIcons.length > 0) {
        // 一次性添加多个图标，减少响应式更新次数
        visibleIcons.value.push(...newIcons);
      }
      // 清空待处理队列
      pendingIcons = [];
      updateScheduled = false;
    });
  }
}

// 添加图标到批量更新队列
function addIconToBatch(iconName) {
  if (
    !visibleIcons.value.includes(iconName) &&
    !pendingIcons.includes(iconName)
  ) {
    pendingIcons.push(iconName);
    // 如果还没有计划更新，则安排一个
    if (!updateScheduled) {
      updateScheduled = true;
      // 使用setTimeout批量处理，减少频繁更新
      setTimeout(batchUpdateVisibleIcons, 0);
    }
  }
}

// 设置 IntersectionObserver
function setupIntersectionObserver() {
  // 创建 IntersectionObserver 实例
  observer = new IntersectionObserver(
    entries => {
      // 收集所有进入视口的元素
      const visibleEntries = entries.filter(entry => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // 批量处理可见元素
        visibleEntries.forEach(entry => {
          const iconName = entry.target.dataset.icon;
          if (iconName) {
            addIconToBatch(iconName);
          }
          // 停止观察已处理的元素
          observer.unobserve(entry.target);
        });
      }
    },
    {
      rootMargin: '100px 0px', // 大幅增加提前加载的范围
      threshold: 0, // 元素1%可见就触发
      passive: true, // 启用被动监听，提升滚动性能
    }
  );
}

// 预加载指定数量的图标
function preloadIcons(iconList, count = 12) {
  // 预加载前几个图标，通常是首屏可见的
  const iconsToPreload = iconList.slice(0, count);
  iconsToPreload.forEach(iconName => {
    // 直接添加到可见列表，不经过批量处理
    if (!visibleIcons.value.includes(iconName)) {
      visibleIcons.value.push(iconName);
    }
  });
}

// 当前支持的图标属性配置
const iconAttributes = {
  // 基础属性
  name: {
    type: 'static', // static: 静态字符串，dynamic: 动态绑定
    value: iconName => iconName,
    format: 'string', // string: 字符串格式，number: 数字格式
  },
  size: {
    type: 'dynamic',
    value: () => sizeValue.value,
    format: 'number',
  },
};

// 复制图标组件代码
function copyIconComponent(iconName) {
  // 动态生成属性字符串
  let attributesStr = '';

  // 遍历所有配置的属性
  Object.entries(iconAttributes).forEach(([attrName, config]) => {
    const value = config.value(iconName);
    let attrValue = '';

    // 根据属性类型和格式处理值
    if (config.type === 'dynamic') {
      // 动态绑定属性
      attrValue = `:${attrName}="${value}"`;
    } else {
      // 静态属性
      if (config.format === 'string') {
        attrValue = `${attrName}="${value}"`;
      } else {
        attrValue = `${attrName}=${value}`;
      }
    }

    attributesStr += ` ${attrValue}`;
  });

  // 构建完整的组件代码
  const componentCode = `<Icon${attributesStr} />`;

  // 复制到剪贴板
  navigator.clipboard
    .writeText(componentCode)
    .then(() => {
      // 显示复制成功提示
      copiedIcon.value = iconName;
      setTimeout(() => {
        copiedIcon.value = null;
      }, 2000); // 2秒后隐藏提示
    })
    .catch(err => {
      console.error('复制失败:', err);
    });
}

// 搜索图标
const searchValue = ref('');
// 搜索图标
function handleSearch() {
  const searchTerm = searchValue.value.trim().toLowerCase();
  if (searchTerm) {
    // 过滤出包含搜索词的图标
    console.log(icons);

    // icons = icons.filter(icon => icon.toLowerCase().includes(searchTerm));
    iconsD.value = icons.filter(icon =>
      icon.toLowerCase().includes(searchTerm)
    );
    // 重置可见图标列表，让懒加载重新开始工作
    visibleIcons.value = [];
    // 预加载搜索结果中的前几个图标
    preloadIcons(iconsD.value, 20);
  } else {
    // 如果搜索词为空，显示所有图标
    iconsD.value = [...icons];
    // 重置可见图标列表，让懒加载重新开始工作
    visibleIcons.value = [];
    // 预加载前几个图标
    preloadIcons(icons, 20);
  }
  
  // 重新设置观察器
  nextTick(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    setupIntersectionObserver();
    
    // 重新开始观察所有图标项
    if (iconsGrid.value) {
      const items = iconsGrid.value.querySelectorAll('.icon-item');
      // 使用requestAnimationFrame分批观察，避免阻塞主线程
      let index = visibleIcons.value.length; // 跳过已预加载的图标
      const observeBatch = () => {
        // 每次观察10个元素
        const batchSize = 10;
        const endIndex = Math.min(index + batchSize, items.length);

        for (let i = index; i < endIndex; i++) {
          if (!observedElements.has(items[i])) {
            observer.observe(items[i]);
            observedElements.add(items[i]);
          }
        }

        index = endIndex;
        if (index < items.length) {
          // 继续观察下一批
          requestAnimationFrame(observeBatch);
        }
      };

      observeBatch();
    }
  });
}

// 组件挂载时初始化
onMounted(() => {
  // 预加载前20个图标，提升首屏加载速度
  preloadIcons(icons, 20);

  // 等待DOM渲染完成
  nextTick(() => {
    // 创建视口检测器
    setupIntersectionObserver();

    // 立即开始观察所有图标项
    if (iconsGrid.value) {
      const items = iconsGrid.value.querySelectorAll('.icon-item');
      // 使用requestAnimationFrame分批观察，避免阻塞主线程
      let index = 20; // 跳过已预加载的图标
      const observeBatch = () => {
        // 每次观察10个元素
        const batchSize = 10;
        const endIndex = Math.min(index + batchSize, items.length);

        for (let i = index; i < endIndex; i++) {
          if (!observedElements.has(items[i])) {
            observer.observe(items[i]);
            observedElements.add(items[i]);
          }
        }

        index = endIndex;
        if (index < items.length) {
          // 继续观察下一批
          requestAnimationFrame(observeBatch);
        }
      };

      observeBatch();
    }
  });
});

// 组件卸载时清理
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  // 清空观察记录
  observedElements.clear();
  // 清空批量处理队列
  pendingIcons = [];
  updateScheduled = false;
});
</script>

<style scoped>
.all-icons-demo {
  padding: 0px;
}

.loading-info {
  margin: 10px 0 20px 0;
  color: #666;
  font-size: 14px;
}

.debug-info {
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 12px;
  max-height: 200px;
  overflow-y: auto;
}

.debug-message {
  margin: 2px 0;
  color: #333;
}

.debug-button {
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.debug-button:hover {
  background-color: #3aa876;
}

.test-section {
  margin: 20px 0;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.test-icon-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 110px;
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius-0);
  transition: all 0.2s ease;
  position: relative;
  min-height: 80px;
}

/* 图标占位符样式 */
.icon-placeholder {
  width: 36px;
  height: 36px;
  background-color: #f5f5f5;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

/* 脉冲动画 */
@keyframes pulse {
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.4;
  }
}

.icon-name-tooltip {
  display: none;
  position: relative;
  top: 110%;
  /* left: 50%; */
  width: max-content;
  z-index: 10;
  /* transform: translateX(-50%); */
  background-color: var(--color-default);
  color: var(--color-default-text-1);
  padding: var(--padding-1);
  border-radius: var(--border-radius-0);
  font-size: 12px;
  text-align: center;
}

.icon-item:hover .icon-name-tooltip {
  display: block;
}

.icon-item:hover {
  transform: translateY(-2px);
  /* background-color: var(--color-default-hover-text); */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-name {
  margin-top: 6px;
  font-size: 12px;
  color: #666;
  text-align: center;
  height: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

/* 复制成功提示样式 */
.copy-success-tooltip {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-0%);
  background-color: var(--color-default);
  border: 1px solid var(--color-border-1);
  color: var(--color-default-text-1);
  padding: 3px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 1000;
  display: flex;
  align-items: center;
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
  animation: successPop 2s ease-out;
}

/* 复制成功的动画效果 */
@keyframes successPop {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(10px) scale(0.8);
  }
  20% {
    opacity: 1;
    transform: translateX(-50%) translateY(-40px) scale(1.05);
  }
  30% {
    transform: translateX(-50%) translateY(-40px) scale(1);
  }
  80% {
    opacity: 1;
    transform: translateX(-50%) translateY(-40px);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-45px);
  }
}

/* 点击图标时的反馈动画 */
.icon-item {
  transition: all 0.2s ease;
}

.icon-item:active {
  transform: scale(0.95) translateY(-2px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
}
</style>
