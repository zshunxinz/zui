<template>
  <div class="button-group">
    <Button :borderRadius="1">默认按钮</Button>
    <Button type="primary" :borderRadius="2">主要按钮</Button>
    <Button type="success" :borderRadius="4">成功按钮</Button>
    <Button type="warning" :borderRadius="8">警告按钮</Button>
    <Button type="danger" :borderRadius="12">危险按钮</Button>
    <Button type="info" :borderRadius="16">信息按钮</Button>
  </div>
</template>
