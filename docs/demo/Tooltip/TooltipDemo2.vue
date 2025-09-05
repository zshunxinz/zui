<template>
  <Tooltip>
    <Button>带图标的提示</Button>
    <template #content>
      <div style="display: flex; align-items: center; gap: 8px">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14C5.24 14 3 11.76 3 9s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-9c-1.1 0-2 .9-2 2h1v1H8v-1h2c0-1.1-.9-2-2-2z"
          />
        </svg>
        <span>这是一个带图标的提示</span>
      </div>
    </template>
  </Tooltip>
</template>

<script setup></script>
