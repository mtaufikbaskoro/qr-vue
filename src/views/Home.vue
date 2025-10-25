<script setup>
import AboutUs from '@/components/section/AboutUs.vue'
import Hero from '@/components/section/Hero.vue'
import Team from '@/components/section/Team.vue'
import Benefit from '@/components/section/Benefit.vue'
import Portfolio from '@/components/section/Portfolio.vue'
import Button from '@/components/shared/Button.vue'
</script>

<template>
  <Hero />
  <div class="bg-muted text-muted-foreground w-full">
    <AboutUs />
  </div>
  <Team />
  <Benefit />
  <div class="bg-primary text-primary-foreground space-y-8 py-12 w-full">
    <Portfolio />
    <div class="w-full flex justify-center items-center">
      <router-link to="/portfolio">
        <Button classname="font-semibold px-12 capitalize" color="accent"
          >Lihat lebih banyak</Button
        >
      </router-link>
    </div>
  </div>
</template>
