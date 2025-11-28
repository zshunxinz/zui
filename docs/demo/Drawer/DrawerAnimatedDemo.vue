<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <div class="button-group">
        <Button @click="showAnimatedDrawer">带动画的抽屉</Button>
        <Button @click="showNonAnimatedDrawer">无动画的抽屉</Button>
      </div>

      <div class="info-box">
        <h3>动画控制说明</h3>
        <p>
          通过 <code>animated</code> 属性可以控制抽屉是否启用弹出动画。
        </p>
        <p>
          默认情况下，<code>animated</code> 属性为 <code>true</code>，启用动画效果。
          设置为 <code>false</code> 时，抽屉将直接显示和隐藏，没有过渡动画。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 从全局 window 对象获取 showDrawer 函数
const showDrawer = window.showDrawer;

// 带动画的抽屉
const showAnimatedDrawer = () => {
  showDrawer({
    title: '带动画的抽屉',
    content: '这个抽屉使用了默认的动画效果',
    animated: true,
    position: 'right'
  });
};

// 无动画的抽屉
const showNonAnimatedDrawer = () => {
  showDrawer({
    title: '无动画的抽屉',
    content: '这个抽屉禁用了动画效果，直接显示和隐藏',
    animated: false,
    position: 'right'
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
