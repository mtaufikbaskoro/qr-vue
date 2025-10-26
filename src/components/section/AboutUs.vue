<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import Button from '../shared/Button.vue'
import image from '@/assets/img/american-public-power-unsplash.jpg'
import { ref } from 'vue'

const title = ref('tentang QR')
const firstParagraph = ref(
  'QR bertujuan untuk Menjadi Perusahaan terdepan dalam penyediaan solusi rekayasa CME (Civil, Mechanical, Electrical) yang inovatif dan berkelanjutan, mendorong kemajuan infrastruktur dan energi masa depan.',
)
const secondParagraph = ref(
  'Dengan misi untuk menerapkan standar kualitas tertinggi dan teknologi rekayasa mukhtahir untuk setiap proyek CME, memastikan efisiensi operasional dan hasil yang optimal bagi pelanggan.',
)
const imageAlt = ref('american-public-power-unsplash')
</script>

<template>
  <SectionLayout class-names="flex-col lg:flex-row">
    <div class="py-16 space-y-8">
      <div class="space-y-4">
        <h1 class="text-4xl font-bold capitalize">{{ title }}</h1>
        <p class="max-w-lg text-justify">{{ firstParagraph }}</p>
        <p class="max-w-lg text-justify">{{ secondParagraph }}</p>
      </div>
      <a href="#contacts" class="block">
        <Button classname="font-semibold px-12 uppercase" color="accent">hubungi kami</Button>
      </a>
    </div>
    <div class="image-wrapper -my-16 rounded shadow-lg">
      <img :src="image" :alt="imageAlt" />
    </div>
  </SectionLayout>
</template>

<style lang="css" scoped>
.image-wrapper {
  aspect-ratio: 4 / 3;
  width: 434px;
  height: 534px;
  overflow: hidden;
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
