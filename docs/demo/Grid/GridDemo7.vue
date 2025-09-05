<template>
  <Row
    justify="start"
    style="background: var(--color-bg-hover-1); margin-bottom: 10px"
  >
    <Col :span="8" class="demo-box">justify: start</Col>
    <Col :span="8" class="demo-box">左对齐</Col>
  </Row>
  <Row
    justify="center"
    style="background: var(--color-bg-hover-1); margin-bottom: 10px"
  >
    <Col :span="8" class="demo-box">justify: center</Col>
    <Col :span="8" class="demo-box">居中对齐</Col>
  </Row>
  <Row
    justify="end"
    style="background: var(--color-bg-hover-1); margin-bottom: 10px"
  >
    <Col :span="8" class="demo-box">justify: end</Col>
    <Col :span="8" class="demo-box">右对齐</Col>
  </Row>
  <Row
    justify="space-around"
    style="background: var(--color-bg-hover-1); margin-bottom: 10px"
  >
    <Col :span="8" class="demo-box">justify: space-around</Col>
    <Col :span="8" class="demo-box">等距环绕</Col>
  </Row>
  <Row
    justify="space-between"
    style="background: var(--color-bg-hover-1); margin-bottom: 10px"
  >
    <Col :span="8" class="demo-box">justify: space-between</Col>
    <Col :span="8" class="demo-box">两端对齐</Col>
  </Row>
</template>

<script setup></script>
