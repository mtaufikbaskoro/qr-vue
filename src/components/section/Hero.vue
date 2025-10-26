<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import heroImage from '@/assets/svg/undraw_electricity.svg'
import { ref } from 'vue'

const title = ref('quantum rekatama')
const description = ref(
  'Perusahaan yang bergerak di bidang rekayasa sipil, mekanikal, dan elektrikal (CME) dengan komitmen tinggi terhadap inovasi dan keberlanjutan.',
)
</script>

<template>
  <SectionLayout class-names="flex-col lg:flex-row">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold text-secondary capitalize">{{ title }}</h1>
      <p class="max-w-lg text-muted text-justify">{{ description }}</p>
    </div>
    <img :src="heroImage" alt="hero_image" width="434" height="434" />
  </SectionLayout>
</template>
