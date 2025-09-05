<template>
  <div class="textarea-group">
    <Textarea v-model="value" readonly placeholder="只读状态" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>