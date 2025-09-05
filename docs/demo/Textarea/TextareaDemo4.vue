<template>
  <div class="textarea-group">
    <Textarea v-model="rowsAutosizeValue" :rows="3" autosize placeholder="初始3行，可自动拓展" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rowsAutosizeValue = ref('')
</script>