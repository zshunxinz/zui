<template>
  <Popover :arrow="false">
    <Button>无箭头</Button>
    <template #content>
      <div>
        <p>这是一个没有箭头的弹出层</p>
      </div>
    </template>
  </Popover>
</template>

<script setup></script>
