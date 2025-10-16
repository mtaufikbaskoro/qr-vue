<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-full min-w-full flex flex-col justify-between gap-24">
    <div class="min-w-full flex justify-center items-center my-2">
      <Navbar></Navbar>
    </div>
    <main><slot /></main>
    <div
      class="fixed bottom-0 min-w-full flex justify-center items-center bg-primary text-primary-foreground"
    >
      <Footer></Footer>
    </div>
  </div>
</template>
