<template>
  <Popover :overlay="false">
    <Button>无覆盖层</Button>
    <template #content>
      <div>
        <p>点击空白处不会关闭弹出层</p>
      </div>
    </template>
  </Popover>
</template>

<script setup></script>
