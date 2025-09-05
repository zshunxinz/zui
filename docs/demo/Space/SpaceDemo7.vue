<template>
  <Space size="[16, 8]" wrap>
    <Button v-for="i in 6" :key="i">按钮 {{ i }}</Button>
  </Space>
</template>
