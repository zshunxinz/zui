<template>
  <Row
    align="top"
    style="
      height: 100px;
      background: var(--color-bg-hover-1);
      margin-bottom: 10px;
    "
  >
    <Col :span="8" style="height: 30px">
      <div class="demo-box">align: top</div>
    </Col>
    <Col :span="8">
      <div class="demo-box" style="height: 60px">垂直顶部对齐</div>
    </Col>
    <Col :span="8">
      <div class="demo-box" style="height: 80px">垂直顶部对齐</div>
    </Col>
  </Row>
  <Row
    align="middle"
    style="
      height: 100px;
      background: var(--color-bg-hover-1);
      margin-bottom: 10px;
    "
  >
    <Col :span="8">
      <div class="demo-box">align: middle</div>
    </Col>
    <Col :span="8">
      <div class="demo-box" style="height: 60px">垂直居中对齐</div>
    </Col>
    <Col :span="8">
      <div class="demo-box" style="height: 80px">垂直居中对齐</div>
    </Col>
  </Row>
  <Row
    align="bottom"
    style="
      height: 100px;
      background: var(--color-bg-hover-1);
      margin-bottom: 10px;
    "
  >
    <Col :span="8">
      <div class="demo-box">align: bottom</div>
    </Col>
    <Col :span="8">
      <div class="demo-box" style="height: 60px">垂直底部对齐</div>
    </Col>
    <Col :span="8">
      <div class="demo-box" style="height: 80px">垂直底部对齐</div>
    </Col>
  </Row>
</template>

<script setup></script>
