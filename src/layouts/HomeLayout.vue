<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="min-h-100 min-w-full space-y-48">
    <div class="min-w-full flex justify-center items-center my-2">
      <Navbar></Navbar>
    </div>
    <main><slot /></main>
    <footer>test</footer>
  </div>
</template>
