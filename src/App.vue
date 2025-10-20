<script setup>
import AboutUs from '@/components/section/AboutUs.vue'
import Hero from '@/components/section/Hero.vue'
import Team from '@/components/section/Team.vue'
import HomeLayout from './layouts/HomeLayout.vue'
import Benefit from './components/section/Benefit.vue'
</script>

<template>
  <HomeLayout>
    <Hero />
    <div class="bg-muted text-muted-foreground w-full">
      <AboutUs />
    </div>
    <Team />
    <Benefit />
  </HomeLayout>
</template>

<style scoped></style>
