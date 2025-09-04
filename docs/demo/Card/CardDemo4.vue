<template>
  <div class="card-group">
    <Card title="默认内边距" type="info">
      <div>这是默认内边距的卡片</div>
    </Card>
    <Card title="小内边距" padding="8px" type="info">
      <div>这是内边距为8px的卡片</div>
    </Card>
    <Card title="大内边距" :padding="24" type="info">
      <div>这是内边距为24px的卡片</div>
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