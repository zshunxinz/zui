<template>
  <Row justify="center" :gutter="12">
    <Col span="6">
      <Input placeholder="请输入用户名" size="small" />
    </Col>
    <Col span="16">
      <Tooltip content="用户名长度为6-20个字符，支持字母、数字和下划线">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </Tooltip>
    </Col>
  </Row>
</template>

<script setup></script>
