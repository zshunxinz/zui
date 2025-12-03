<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <Row >
        <Col :span="4">
          <Button @click="showCustomFooterDrawer">自定义按钮</Button>
        </Col>
        <Col :span="4">
          <Button @click="showCustomNoFooterDrawer">无默认按钮</Button>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script setup>
// 从全局 window 对象获取 showDrawer 函数
const showDrawer = window.showDrawer;

const showCustomFooterDrawer = () => {
  let drawer;
  drawer = showDrawer({
    title: '自定义按钮',
    content: '这个抽屉使用了自定义的底部按钮',
    footer: () => {
      const footer = document.createElement('div');
      footer.className = 'custom-footer';
      footer.style.display = 'flex';
      footer.style.justifyContent = 'flex-end';
      footer.style.gap = '8px';

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '删除';
      deleteBtn.className = 'btn btn--danger';
      deleteBtn.style.padding = '4px 8px';
      deleteBtn.style.borderRadius = '4px';
      deleteBtn.onclick = () => {
        alert('删除操作执行');
        drawer.close();
      };

      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = '取消';
      cancelBtn.className = 'btn btn--default';
      cancelBtn.onclick = () => {
        drawer.close();
      };

      footer.appendChild(cancelBtn);
      footer.appendChild(deleteBtn);
      return footer;
    }
  });
};

const showCustomNoFooterDrawer = () => {
  let drawer;
  drawer = showDrawer({
    closable: true,
    footer: false,
    content: '没有默认的头部和底部按钮',
  });
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
</style>
