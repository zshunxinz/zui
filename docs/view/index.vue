<script setup lang="ts">
import { ref } from 'vue';

import Card1 from '../demo/Card/CardDemo1.vue';
import Card2 from '../demo/Card/CardDemo2.vue';
import Card3 from '../demo/Card/CardDemo3.vue';
import Card4 from '../demo/Card/CardDemo4.vue';
</script>

<template>
  <Row>
    <Col :span="8">
      <Card1></Card1>
    </Col>
    <Col :span="8">
      <Card2></Card2>
    </Col>
    <Col :span="8">
      <Card3></Card3>
    </Col>
    <Col :span="8">
      <Card4></Card4>
    </Col>
  </Row>
</template>
