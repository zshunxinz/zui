<template>
  <div class="card-group">
    <Card title="默认卡片"></Card>
    <Card title="主要卡片" type="primary"></Card>
    <Card title="成功卡片" type="success"></Card>
    <Card title="警告卡片" type="warning"></Card>
    <Card title="危险卡片" type="danger"></Card>
  </div>
  
  <div class="card-group">
    <Card title="小型卡片" size="small"></Card>
    <Card title="默认卡片"></Card>
    <Card title="大型卡片" size="large"></Card>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}
</style>