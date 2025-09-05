<template>
  <Popover placement="right" :offset="20">
    <Button>带偏移的弹出层</Button>
    <template #content>
      <div>
        <p>这是一个带有20px偏移的弹出层</p>
      </div>
    </template>
  </Popover>
</template>

<script setup></script>
