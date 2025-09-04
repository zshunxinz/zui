<template>
  <div class="card-group">
    <Card title="自定义宽度卡片" :width="300" headerBorder>
      <div>宽度为300px的卡片</div>
    </Card>
    <Card title="自定义高度卡片" :height="200">
      <div>高度为200px的卡片</div>
    </Card>
    <Card title="自定义宽高卡片" width="100%" height="150px" headerBorder>
      <div>宽度为100%，高度为150px的卡片</div>
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