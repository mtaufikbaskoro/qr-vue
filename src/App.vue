<script setup>
import AboutUs from '@/components/section/AboutUs.vue'
import Hero from '@/components/section/Hero.vue'
import Team from '@/components/section/Team.vue'
import HomeLayout from './layouts/HomeLayout.vue'
</script>

<template>
  <HomeLayout>
    <Hero />
    <div class="bg-muted text-muted-foreground w-full">
      <AboutUs />
    </div>
    <Team />
  </HomeLayout>
</template>

<style scoped></style>
