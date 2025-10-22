<script setup>
import { ref } from 'vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import Card from '@/components/shared/Card.vue'
import Button from '@/components/shared/Button.vue'
import placeholderImg from '@/assets/img/placeholder-team.jpeg'

const title = ref('Proyek Kami')
const data = ref([
  { img: placeholderImg, title: 'Proyek Satu', description: 'CEO Quantum Rekatama' },
  { img: placeholderImg, title: 'Proyek Dua', description: 'CEO Quantum Rekatama' },
  { img: placeholderImg, title: 'Proyek Tiga', description: 'CEO Quantum Rekatama' },
])
</script>

<template>
  <SectionLayout class-names="flex-col">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold text-secondary capitalize">{{ title }}</h1>
    </div>
    <div class="w-full max-w-5xl grid grid-cols-3 gap-12">
      <div v-for="(item, index) in data" :key="index" class="col-span-1">
        <Card :img="item.img" :title="item.title" :description="item.description" />
      </div>
    </div>
    <Button
      classname="font-semibold px-12 capitalize"
      label="lihat lebih banyak"
      color="accent"
    ></Button>
  </SectionLayout>
</template>
