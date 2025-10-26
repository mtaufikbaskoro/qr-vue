<script setup>
import { ref } from 'vue'

const props = defineProps({
  classNames: {
    type: String,
    required: false,
  },
})

const layoutClass = ref(
  'relative w-full max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12',
)

const additionalClass = `${layoutClass.value} ${props.classNames}`
</script>

<template>
  <div :class="additionalClass">
    <slot />
  </div>
</template>
