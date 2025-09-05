<template>
  <Row :gutter="12">
    <Col :span="12">
      <Col :span="24" class="demo-box">嵌套列 1</Col>
      <Col :span="24" class="demo-box">嵌套列 2</Col>
    </Col>
    <Col :span="12">
      <Col :span="24" class="demo-box">嵌套列 3</Col>
      <Col :span="24" class="demo-box">嵌套列 4</Col>
      <Row>
        <Col :span="12" class="demo-box">嵌套列 3</Col>
        <Col :span="12" class="demo-box">嵌套列 4</Col>
      </Row>
    </Col>
  </Row>
</template>

<script setup></script>