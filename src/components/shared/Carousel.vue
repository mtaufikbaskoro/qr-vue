<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Pagination, Navigation } from 'vue3-carousel'

const config = {
  height: 360,
  itemsToShow: 1,
  gap: 5,
  snapAlign: 'center',

  // 'breakpointMode' determines how the carousel breakpoints are calculated
  // Acceptable values: 'viewport' (default) | 'carousel'
  // 'viewport' - breakpoints are based on the viewport width
  // 'carousel' - breakpoints are based on the carousel width
  breakpointMode: 'carousel',

  // Breakpoints are mobile-first
  // Any settings not specified will fall back to the carousel's default settings
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // 400px and up
    400: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
    // 500px and up
    1000: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  },
}
</script>

<template>
  <Carousel class="w-full" v-bind="config">
    <slot />
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}
</style>
