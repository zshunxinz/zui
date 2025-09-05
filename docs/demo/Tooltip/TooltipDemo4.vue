<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap">
    <Tooltip content="默认主题" theme="default">
      <Button>默认</Button>
    </Tooltip>
    <Tooltip content="主要主题" theme="primary">
      <Button type="primary">主要</Button>
    </Tooltip>
    <Tooltip content="成功主题" theme="success">
      <Button type="success">成功</Button>
    </Tooltip>
    <Tooltip content="警告主题" theme="warning">
      <Button type="warning">警告</Button>
    </Tooltip>
    <Tooltip content="危险主题" theme="danger">
      <Button type="danger">危险</Button>
    </Tooltip>
    <Tooltip content="信息主题" theme="info">
      <Button type="info">信息</Button>
    </Tooltip>
  </div>
</template>

<script setup></script>
