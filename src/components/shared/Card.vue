<script setup>
import { ref, useSlots } from 'vue'

const props = defineProps({
  img: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  classnames: {
    type: String,
    required: false,
  },
})

const slots = useSlots()

const layoutClass = ref('w-full flex flex-col justify-center items-center gap-4')
const additionalClass = `${layoutClass} ${props.classnames ? props.classnames : ''}`
</script>

<template>
  <div :class="additionalClass">
    <div v-if="!!props.img" class="image-wrapper rounded-lg">
      <img :src="props.img" alt="card_image" />
    </div>
    <div class="w-full text-center mt-6 space-y-2">
      <h1 class="font-bold">{{ props.title }}</h1>
      <p class="text-muted text-sm">{{ props.description }}</p>
    </div>
    <slot v-if="slots.content" name="content" />
    <div v-if="slots.footer" class="w-full"><slot name="footer" /></div>
  </div>
</template>

<style lang="css" scoped>
.image-wrapper {
  overflow: hidden;
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
