<template>
  <div class="card-group">
    <Card title="默认阴影卡片" shadow>
      <div>这是一张带有默认阴影的卡片</div>
    </Card>
    <Card title="无阴影卡片" :shadow="false">
      <div>这是一张没有阴影的卡片</div>
    </Card>
    <Card title="悬浮卡片" hoverable>
      <div>鼠标悬浮时会有阴影效果</div>
    </Card>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>