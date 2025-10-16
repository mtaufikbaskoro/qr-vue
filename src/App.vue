<script setup>
import Hero from './components/section/Hero.vue'
import Button from './components/shared/Button.vue'
import HomeLayout from './layouts/HomeLayout.vue'
</script>

<template>
  <HomeLayout>
    <Hero />
    <h1>Quantum Rekatama</h1>
    <p>Ini akan menjadi awal project vue saya</p>
    <Button label="Tekan Saya" color="primary" />
  </HomeLayout>
</template>

<style scoped></style>
