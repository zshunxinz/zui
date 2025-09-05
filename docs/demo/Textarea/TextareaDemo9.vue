<template>
  <div class="textarea-group">
    <Textarea v-model="value" size="small" placeholder="小尺寸" />
    <Textarea v-model="value" size="medium" placeholder="默认尺寸" />
    <Textarea v-model="value" size="large" placeholder="大尺寸" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>