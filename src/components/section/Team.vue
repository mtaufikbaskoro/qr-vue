<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import { ref } from 'vue'
import Card from '../shared/Card.vue'

import placeholderImg from '@/assets/img/placeholder-team.jpeg'

const data = ref([
  { img: placeholderImg, title: 'Ridwan Adam', description: 'CEO Quantum Rekatama' },
  { img: placeholderImg, title: 'Ridwan Adam', description: 'CEO Quantum Rekatama' },
  { img: placeholderImg, title: 'Ridwan Adam', description: 'CEO Quantum Rekatama' },
  { img: placeholderImg, title: 'Ridwan Adam', description: 'CEO Quantum Rekatama' },
  { img: placeholderImg, title: 'Ridwan Adam', description: 'CEO Quantum Rekatama' },
])
</script>

<template>
  <SectionLayout class-names="flex-col">
    <h1 class="w-full text-4xl font-bold capitalize text-center">Team Kami</h1>
    <div class="w-full max-w-5xl grid grid-cols-5 gap-12">
      <div v-for="(item, index) in data" :key="index" class="col-span-1">
        <Card :img="item.img" :title="item.title" :description="item.description" />
      </div>
    </div>
  </SectionLayout>
</template>
