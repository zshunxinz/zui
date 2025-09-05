<template>
  <Space>
    <Tooltip content="无箭头提示" :arrow="false">
      <Button>无箭头</Button>
    </Tooltip>

    <Tooltip
      content="无箭头提示"
      :arrow="false"
      theme="primary"
      placement="right"
    >
      <Button type="primary">无箭头</Button>
    </Tooltip>
  </Space>
</template>

<script setup>
</script>