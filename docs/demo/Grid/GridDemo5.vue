<template>
  <Row :gutter="16">
    <Col :span="12" :push="12">
      <div class="demo-box">span: 12, push: 12（向右移动12列）</div>
    </Col>
    <Col :span="12" :pull="12">
      <div class="demo-box">span: 12, pull: 12（向左移动12列）</div>
    </Col>
  </Row>
</template>

<script setup></script>
