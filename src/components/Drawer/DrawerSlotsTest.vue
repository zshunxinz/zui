<template>
  <div class="drawer-slots-test">
    <h2>Drawer 组件插槽测试</h2>

    <div class="button-group">
      <button @click="showDefaultDrawer = true" class="btn btn--primary">
        默认抽屉（带标题）
      </button>
      <button @click="showCustomHeaderDrawer = true" class="btn btn--primary">
        自定义头部抽屉
      </button>
      <button @click="showCustomFooterDrawer = true" class="btn btn--primary">
        自定义底部抽屉
      </button>
      <button @click="showFullCustomDrawer = true" class="btn btn--primary">
        完全自定义抽屉
      </button>
    </div>

    <!-- 默认抽屉（带标题） -->
    <Drawer v-model:open="showDefaultDrawer" title="默认抽屉标题">
      <div>这是一个默认的非函数式抽屉，使用了内置的标题和底部按钮。</div>
    </Drawer>

    <!-- 自定义头部抽屉 -->
    <Drawer v-model:open="showCustomHeaderDrawer" closable>
      <template #header>
        <div class="custom-header">
          <span class="header-icon">📝</span>
          <h3 class="header-title">自定义头部</h3>
          <span class="header-tag">New</span>
        </div>
      </template>
      <div>
        这个抽屉使用了自定义的头部插槽，没有设置title属性。
        头部包含了图标、标题和标签。
      </div>
    </Drawer>

    <!-- 自定义底部抽屉 -->
    <Drawer v-model:open="showCustomFooterDrawer" title="自定义底部抽屉">
      <div>这个抽屉使用了自定义的底部插槽，替换了默认的确定/取消按钮。</div>
      <template #footer>
        <div class="custom-footer">
          <button
            @click="showCustomFooterDrawer = false"
            class="btn btn--default"
          >
            返回
          </button>
          <button @click="handleCustomAction" class="btn btn--success">
            执行操作
          </button>
        </div>
      </template>
    </Drawer>

    <!-- 完全自定义抽屉 -->
    <Drawer v-model:open="showFullCustomDrawer" position="right" width="500px">
      <template #header>
        <div class="full-custom-header">
          <h3>完全自定义抽屉</h3>
          <div class="header-actions">
            <button @click="toggleFullscreen" class="btn btn--icon">⛶</button>
            <button @click="showFullCustomDrawer = false" class="btn btn--icon">
              ✕
            </button>
          </div>
        </div>
      </template>
      <div class="full-custom-content">
        <p>这个抽屉完全使用了自定义插槽：</p>
        <ul>
          <li>自定义头部，包含标题和操作按钮</li>
          <li>自定义内容区域，格式更丰富</li>
          <li>自定义底部，包含多个操作按钮</li>
        </ul>
        <div class="demo-box">
          <h4>自定义样式演示</h4>
          <p>这是一个带有自定义样式的内容块。</p>
        </div>
      </div>
      <template #footer>
        <div class="full-custom-footer">
          <button
            @click="showFullCustomDrawer = false"
            class="btn btn--default"
          >
            取消
          </button>
          <button @click="handleSaveDraft" class="btn btn--secondary">
            保存草稿
          </button>
          <button @click="handleSubmit" class="btn btn--primary">提交</button>
        </div>
      </template>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Drawer from './Drawer.vue';

const showDefaultDrawer = ref(false);
const showCustomHeaderDrawer = ref(false);
const showCustomFooterDrawer = ref(false);
const showFullCustomDrawer = ref(false);

const handleCustomAction = () => {
  console.log('执行自定义操作');
  showCustomFooterDrawer.value = false;
};

const toggleFullscreen = () => {
  console.log('切换全屏');
};

const handleSaveDraft = () => {
  console.log('保存草稿');
  showFullCustomDrawer.value = false;
};

const handleSubmit = () => {
  console.log('提交');
  showFullCustomDrawer.value = false;
};
</script>

<style scoped>
.drawer-slots-test {
  padding: 20px;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.custom-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-icon {
  font-size: 20px;
}

.header-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.header-tag {
  background-color: #3b82f6;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.custom-footer {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.full-custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.full-custom-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.btn--icon {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.btn--icon:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.full-custom-content {
  padding: 20px 0;
}

.full-custom-content ul {
  margin: 15px 0;
  padding-left: 25px;
}

.demo-box {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.demo-box h4 {
  margin-top: 0;
  margin-bottom: 10px;
}

.full-custom-footer {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
</style>
