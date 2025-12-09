<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <Row>
        <Col :span="4">
          <Button @click="customFooterDrawerVisible = true">自定义按钮</Button>
        </Col>
        <Col :span="4">
          <Button @click="noFooterDrawerVisible = true">无默认按钮</Button>
        </Col>
      </Row>

      <!-- 自定义底部按钮抽屉 -->
      <Drawer v-model:open="customFooterDrawerVisible" title="自定义按钮">
        <div class="drawer-content">
          <p>这个抽屉使用了自定义的底部按钮</p>
          <p>通过 slot="footer" 来自定义底部内容</p>
        </div>

        <!-- 自定义底部 -->
        <template #footer>
          <div class="custom-footer">
            <Button type="default" @click="customFooterDrawerVisible = false"
              >取消</Button
            >
            <Button type="danger" @click="handleDelete">删除</Button>
          </div>
        </template>
      </Drawer>

      <!-- 无底部按钮抽屉 -->
      <Drawer
        v-model:open="noFooterDrawerVisible"
        :footer="false"
        closable="false"
      >
        <div class="drawer-content">
          <p>没有默认的头部和底部按钮</p>
          <p>使用 footer="false" 和 closable="false" 属性控制</p>
          <p>点击遮罩层可以关闭抽屉</p>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 控制抽屉显示状态
const customFooterDrawerVisible = ref(false);
const noFooterDrawerVisible = ref(false);

// 处理删除操作
const handleDelete = () => {
  alert('删除操作执行');
  customFooterDrawerVisible.value = false;
};
</script>

<style scoped>
.drawer-demo {
  padding: 20px;
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.custom-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.drawer-content {
  padding: 20px 0;
}
</style>
