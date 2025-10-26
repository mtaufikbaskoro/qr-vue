<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import { ref } from 'vue'
import Card from '../shared/Card.vue'
import Carousel from '@/components/shared/Carousel.vue'
import { Slide } from 'vue3-carousel'

import ridwanImg from '@/assets/img/ridwan.jpeg'
import agungImg from '@/assets/img/agung.jpeg'
import teguhImg from '@/assets/img/teguh.jpeg'
import ovyImg from '@/assets/img/ovy.jpeg'
import cendekiaImg from '@/assets/img/cendekia.jpeg'

const data = ref([
  { img: ridwanImg, title: 'Ridwan Adam', description: 'CEO Quantum Rekatama' },
  { img: teguhImg, title: 'Teguh', description: 'Engineer' },
  { img: ovyImg, title: 'Ovy Taif' },
  { img: cendekiaImg, title: 'M. Cendekia Amf', description: 'Marketing' },
  { img: agungImg, title: 'Agung Adhi Laksana', description: 'Marketing' },
])
</script>

<template>
  <SectionLayout class-names="flex-col">
    <h1 class="w-full text-4xl font-bold capitalize text-center">Team Kami</h1>
    <Carousel>
      <Slide v-for="(item, index) in data" :key="index">
        <Card :img="item.img" :title="item.title" :description="item.description" />
      </Slide>
    </Carousel>
    <!-- <div v-for="(item, index) in data" :key="index" class="col-span-1">
        <Card :img="item.img" :title="item.title" :description="item.description" />
      </div> -->
  </SectionLayout>
</template>
