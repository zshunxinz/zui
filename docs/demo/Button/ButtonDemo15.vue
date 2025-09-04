<template>
  <div class="button-group">
    <div class="group">
      <Button>确定</Button>
      <Button bg>取消</Button>
    </div>
    <div class="group">
      <Button>提交</Button>
      <Button border>保存</Button>
      <Button text>取消</Button>
    </div>
    <div class="group">
      <Button bg>是</Button>
      <Button bg>否</Button>
      <Button text>跳过</Button>
    </div>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}
</style>