<template>
  <Card title="自定义插槽卡片">
    <template #topRight>
      <Button size="small">更多</Button>
    </template>
    <div>这是卡片内容</div>
    <template #footer>
      <div>这是底部内容</div>
    </template>
    <template #bottomLeft>
      <span>左下角内容</span>
    </template>
    <template #bottomRight>
      <Button size="small">操作</Button>
    </template>
  </Card>
</template>

<script setup>
</script>