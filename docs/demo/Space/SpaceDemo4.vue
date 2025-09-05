<template>
  <Space wrap>
    <Button v-for="i in 10" :key="i">按钮 {{ i }}</Button>
  </Space>
</template>
