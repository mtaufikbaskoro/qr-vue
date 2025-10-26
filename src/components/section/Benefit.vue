<script setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
import { ref } from 'vue'

const data = ref([
  {
    title: 'Kualitas Terbaik',
    description:
      'Komitmen pada standar kualitas tinggi dengan pengawasan ketat di setiap tahap pekerjaan, memastikan hasil yang optimal dan tahan lama.',
    icon: ['fas', 'medal'],
    color: 'bg-secondary text-secondary-foreground',
    class: 'col-span-1',
  },
  {
    title: 'Inovasi dan Teknologi',
    description:
      'Menghadirkan solusi berbasis inovasi dengan penerapan teknologi mutakhir untuk menjawab tantangan pembangunan modern.',
    icon: ['fas', 'microchip'],
    color: 'bg-accent text-accent-foreground',
    class: 'col-span-1',
  },
  {
    title: 'Efisiensi Operasional',
    description:
      'Setiap proyek dirancang dengan perencanaan matang untuk menghemat waktu, biaya, dan sumber daya tanpa mengurangi kualitas.',
    icon: ['fas', 'clock'],
    color: 'bg-secondary text-secondary-foreground',
    class: 'col-span-1',
  },
  {
    title: 'Keberlanjutan',
    description:
      'Berorientasi pada solusi ramah lingkungan dan berkelanjutan, mendukung pembangunan infrastruktur dan energi masa depan.',
    icon: ['fas', 'leaf'],
    color: 'bg-accent text-accent-foreground',
    class: 'col-span-1',
  },
  {
    title: 'Tim Profesional',
    description:
      'Didukung tenaga ahli berpengalaman di bidang sipil, mekanikal, dan elektrikal (CME) yang siap memberikan solusi terbaik.',
    icon: ['fas', 'people-group'],
    color: 'bg-secondary text-secondary-foreground',
    class: 'col-span-1',
  },
  {
    title: 'Mitra Tepercaya',
    description:
      'Lebih dari sekadar penyedia jasa, QR menjadi mitra strategis yang mendampingi klien dalam mencapai kesuksesan setiap proyek.',
    icon: ['fas', 'handshake'],
    color: 'bg-accent text-accent-foreground',
    class: 'col-span-1',
  },
])
</script>

<template>
  <SectionLayout class-names="flex-col">
    <h1 class="w-full text-4xl font-bold capitalize lg:text-center">Kenapa Harus dengan QR?</h1>
    <div
      class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12"
    >
      <div v-for="(value, index) in data" :key="index" :class="`space-y-4 ${value.class}`">
        <div>
          <font-awesome-icon :class="`p-3.5 ${value.color} rounded text-xl`" :icon="value.icon" />
        </div>
        <h1 class="text-xl font-bold capitalize">{{ value.title }}</h1>
        <p class="text-muted text-sm">{{ value.description }}</p>
      </div>
    </div>
  </SectionLayout>
</template>
