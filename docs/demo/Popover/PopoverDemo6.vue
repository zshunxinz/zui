<template>
  <Popover placement="bottom" width="300" height="200">
    <Button>自定义尺寸</Button>
    <template #content>
      <div style="height: 100%; display: flex; flex-direction: column">
        <h4>自定义尺寸的弹出层</h4>
        <p>宽度：300px，高度：200px</p>
        <div style="flex: 1"></div>
      </div>
    </template>
  </Popover>
</template>

<script setup></script>
