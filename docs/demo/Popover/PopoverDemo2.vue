<template>
  <Space wrap>
    <Popover placement="top">
      <Button>上</Button>
      <template #content>
        <div>
          <p>顶部弹出</p>
        </div>
      </template>
    </Popover>
    <Popover placement="bottom">
      <Button>下</Button>
      <template #content>
        <div>
          <p>底部弹出</p>
        </div>
      </template>
    </Popover>
    <Popover placement="left">
      <Button>左</Button>
      <template #content>
        <div>
          <p>左侧弹出</p>
        </div>
      </template>
    </Popover>
    <Popover placement="right">
      <Button>右</Button>
      <template #content>
        <div>
          <p>右侧弹出</p>
        </div>
      </template>
    </Popover>
  </Space>
</template>

<script setup></script>
