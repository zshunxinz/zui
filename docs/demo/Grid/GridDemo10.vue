<template>
  <div class="page-layout">
    <Row>
      <Col :span="24">
        <header class="header">Header</header>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
        <aside class="sidebar">Sidebar</aside>
      </Col>
      <Col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
        <main class="main-content">Main Content</main>
      </Col>
      <Col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
        <aside class="right-sidebar">Right Sidebar</aside>
      </Col>
    </Row>
    <Row>
      <Col :span="24">
        <footer class="footer">Footer</footer>
      </Col>
    </Row>
  </div>
</template>

<script setup></script>