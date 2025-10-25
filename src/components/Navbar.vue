<script setup>
import { ref, computed } from 'vue'
import { routes } from '@/router'

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

const computeMenu = computed(() => {
  let data = menu.value
  data.map((item, index) => {
    item.href = routes[index] ? routes[index].path : '/'
    if (item.label === 'Kontak') item.href = '#contacts'
  })
  return data
})

console.log(computeMenu)

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
      <li v-for="(item, index) in computeMenu" :key="index">
        <router-link
          v-if="item.href[0] !== '#'"
          :to="item.href"
          :class="menuClass(item.isActive)"
          >{{ item.label }}</router-link
        >
        <a v-else :href="item.href" :class="menuClass(item.isActive)">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>
