<template>
  <div class="card-group">
    <Card title="默认布局" layout="default"></Card>
    <Card title="灵活布局" layout="flexible"></Card>
    <Card title="紧凑布局" layout="tight"></Card>
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