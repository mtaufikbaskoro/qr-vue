<script setup>
import { ref } from 'vue'

const layoutClass = ref(
  'w-full max-w-5xl flex justify-between items-center px-6 py-2.5 rounded bg-primary text-primary-foreground shadow-lg',
)

const linkClass = ref('font-semibold px-2 py-1.5 rounded transition-all ease-in')
const linkHoverClass = ref('hover:bg-accent hover:text-accent-foreground')

const menu = ref([
  { label: 'Beranda', href: '/', isActive: false },
  { label: 'Portofolio', href: '/', isActive: false },
  { label: 'Kontak', href: '/', isActive: false },
])

const menuClass = (isActive) => {
  return [
    linkClass.value,
    linkHoverClass.value,
    isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground',
  ].join(' ')
}
</script>

<template>
  <nav :class="layoutClass">
    <h1 class="uppercase text-3xl font-bold text-secondary">qr</h1>
    <ul class="flex justify-center items-center gap-8">
      <li v-for="(item, index) in menu" :key="index">
        <a :href="item.href" :class="menuClass(item.isActive)">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>
