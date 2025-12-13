<template>
  <Row>
    <Col :span="24"><div class="demo-box">col-24</div></Col>
  </Row>
  <Row>
    <Col :span="12"><div class="demo-box">col-12</div></Col>
    <Col :span="12"><div class="demo-box">col-12</div></Col>
  </Row>
  <Row>
    <Col :span="8"><div class="demo-box">col-8</div></Col>
    <Col :span="8"><div class="demo-box">col-8</div></Col>
    <Col :span="8"><div class="demo-box">col-8</div></Col>
  </Row>
  <Row>
    <Col :span="6"><div class="demo-box">col-6</div></Col>
    <Col :span="6"><div class="demo-box">col-6</div></Col>
    <Col :span="6"><div class="demo-box">col-6</div></Col>
    <Col :span="6"><div class="demo-box">col-6</div></Col>
  </Row>
  <Row>
    <Col :span="4"><div class="demo-box">col-4</div></Col>
    <Col :span="4"><div class="demo-box">col-4</div></Col>
    <Col :span="4"><div class="demo-box">col-4</div></Col>
    <Col :span="4"><div class="demo-box">col-4</div></Col>
    <Col :span="4"><div class="demo-box">col-4</div></Col>
    <Col :span="4"><div class="demo-box">col-4</div></Col>
  </Row>
  <Row>
    <Col :span="3"><div class="demo-box">col-3</div></Col>
    <Col :span="3"><div class="demo-box">col-3</div></Col>
    <Col :span="3"><div class="demo-box">col-3</div></Col>
    <Col :span="3"><div class="demo-box">col-3</div></Col>
    <Col :span="3"><div class="demo-box">col-3</div></Col>
    <Col :span="3"><div class="demo-box">col-3</div></Col>
    <Col :span="3"><div class="demo-box">col-3</div></Col>
    <Col :span="3"><div class="demo-box">col-3</div></Col>
  </Row>
  <Row>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
    <Col :span="2"><div class="demo-box">col-2</div></Col>
  </Row>
</template>

<script setup></script>
<style scoped>
:root {
  --bg-color-1: rgba(100, 100, 100, 0.05);
  --border-1: 1px solid rgba(231, 231, 231, 0.125);
}

.z-col {
  background: rgb(148, 148, 255);
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-1);
  background: hsl(217.2 91.2% 59.8%);
  border: 1px solid hsla(200.6, 94.4%, 86.1%, 0.5);
  background: var(--color-bg);
  border: 1px solid var(--color-default);
  color: var(--color-default);
  padding: 10px;
  margin: 1px 1px;
}
</style>
