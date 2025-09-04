<template>
  <div class="button-group">
    <Button bg border :borderRadius="2">默认按钮</Button>
    <Button type="primary" bg border :borderRadius="4">主要按钮</Button>
    <Button type="success" bg border :borderRadius="6">成功按钮</Button>
    <Button type="warning" bg border :borderRadius="8">警告按钮</Button>
    <Button type="danger" bg border :borderRadius="10">危险按钮</Button>
    <Button type="info" bg border :borderRadius="12">信息按钮</Button>
  </div>
  <div class="button-group">
    <Button bg :borderRadius="2" outline>默认按钮</Button>
    <Button type="primary" bg :borderRadius="4" outline>主要按钮</Button>
    <Button type="success" bg :borderRadius="6" outline>成功按钮</Button>
    <Button type="warning" bg :borderRadius="8" outline>警告按钮</Button>
    <Button type="danger" bg :borderRadius="10" outline>危险按钮</Button>
    <Button type="info" bg :borderRadius="12" outline>信息按钮</Button>
  </div>
</template>
