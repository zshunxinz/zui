<template>
  <div class="textarea-group">
    <Textarea v-model="autosizeValue" autosize placeholder="输入内容会自动调整高度" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const autosizeValue = ref('')
</script>