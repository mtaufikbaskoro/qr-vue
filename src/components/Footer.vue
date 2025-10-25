<script setup>
import { ref } from 'vue'

const contacts = ref([
  { type: 'phone', value: '+(62)81360019875', url: '' },
  { type: 'mail', value: 'test@mail.test', url: '' },
  {
    type: 'address',
    value:
      'Komplek Classic 1 No. B-7. Jl. Abdul hakim Pasar 1 Setiabudi. Medan Selayang Kota Medan.',
    url: '',
  },
])
</script>

<template>
  <footer id="contacts" class="w-full max-w-5xl flex justify-between items-end my-8">
    <div class="flex flex-col justify-end items-start gap-4">
      <h1 class="text-7xl text-secondary font-bold uppercase">qr</h1>
      <p class="text-sm">Copyright © 2025 Quantum Rekatama</p>
    </div>
    <div class="flex flex-col justify-center items-end gap-4 text-sm">
      <h6 class="font-semibold">Hubungi melalui :</h6>
      <div class="space-x-2" v-for="(contact, index) in contacts" :key="index">
        <span>{{ contact.value }}</span>
        <font-awesome-icon v-if="contact.type === 'mail'" :icon="['far', 'envelope']" />
        <font-awesome-icon v-else-if="contact.type === 'phone'" :icon="['fas', 'phone']" />
        <font-awesome-icon v-else-if="contact.type === 'address'" :icon="['far', 'map']" />
      </div>
    </div>
  </footer>
</template>
