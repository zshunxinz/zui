<template>
  <div class="textarea-group">
    <Textarea v-model="value" disabled placeholder="禁用状态" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>