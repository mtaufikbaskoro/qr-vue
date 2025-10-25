<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-full min-w-full flex flex-col justify-between space-y-28">
    <div class="min-w-full flex justify-center items-center my-2">
      <Navbar></Navbar>
    </div>
    <main class="space-y-60 min-w-full"><slot /></main>
    <div class="min-w-full flex justify-center items-center bg-primary text-primary-foreground">
      <Footer></Footer>
    </div>
  </div>
</template>
