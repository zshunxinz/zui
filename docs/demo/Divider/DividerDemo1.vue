<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>水平分割线</div>
    <Divider size="1"/>
    <div>垂直分割线</div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <span>左侧内容</span>
      <Divider direction="vertical" height="24px" />
      <span>右侧内容</span>
    </div>
  </div>
</template>