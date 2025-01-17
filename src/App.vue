<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex items-center justify-center container w-full h-screen py-8 relative">
    <HelloWorld />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
.container {
  font-family: 'Fira Code', monospace;
  letter-spacing: -0.05em;
  max-width: 95%;
}
</style>