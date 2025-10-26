<script setup>
import { ref } from 'vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import Card from '@/components/shared/Card.vue'
import imageOne from '@/assets/img/Genset350kVASilentTypeKantorBupatiPidieJayaAceh.jpeg'
import imageTwo from '@/assets/img/GensetsilentType500kVARSUDKabPIJAY.jpeg'
import imageThree from '@/assets/img/VidioTronDinasSyariatIslamKabPIJAY.jpeg'

const title = ref('Proyek Kami')
const data = ref([
  {
    img: imageOne,
    title: 'Pemasangan Genset 350 kVA Silent Type - Kantor Bupati Pidie Jaya, Aceh',
    description:
      'Instalasi genset 350 kVA silent type sebagai sumber listrik cadangan untuk mendukung kelancaran operasional pemerintahan dengan daya handal dan suara minim.',
  },
  {
    img: imageTwo,
    title: 'Pemasangan Genset 500 kVA Silent Type - RSUD Kabupaten Pidie Jaya, Aceh',
    description:
      'Penyediaan dan instalasi genset 500 kVA silent type sebagai pasokan listrik cadangan yang andal, memastikan operasional rumah sakit tetap berjalan tanpa gangguan dengan tingkat kebisingan rendah.',
  },
  {
    img: imageThree,
    title: 'Pemasangan Videotron - Dinas Syariat Islam Kabupaten Pidie Jaya, Aceh',
    description:
      'Instalasi videotron sebagai media informasi dan publikasi kegiatan, mendukung penyampaian pesan dengan tampilan visual yang jelas dan menarik.',
  },
])
</script>

<template>
  <SectionLayout class-names="flex-col">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold text-secondary capitalize">{{ title }}</h1>
    </div>
    <div class="w-full max-w-sm md:max-w-4xl lg:max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div v-for="(item, index) in data" :key="index" class="col-span-1">
        <Card
          classnames="bg-white text-slate-700 p-4 rounded min-h-full shadow-lg"
          :img="item.img"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </SectionLayout>
</template>
