<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: false,
  },
  classname: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
})

const emit = defineEmits(['button-click'])

const handleClick = () => {
  emit('button-click')
}

const layoutClass = ref(
  'min-w-sm flex justify-start items-center gap-2 px-3 py-1.5 rounded transition-all ease-in',
)
const additionClass = computed(() => {
  let temp = layoutClass
  switch (props.color) {
    case 'primary':
      temp = `${layoutClass.value} + " " + ${'bg-primary text-primary-foreground cursor-pointer hover:opacity-75'}`
      break
    case 'secondary':
      temp = `${layoutClass.value} + " " + ${'bg-secondary text-secondary-foreground cursor-pointer hover:opacity-75'}`
      break
    case 'accent':
      temp = `${layoutClass.value} + " " + ${'bg-accent text-accent-foreground cursor-pointer hover:opacity-75'}`
      break
    default:
      temp = layoutClass.value
      break
  }

  if (props.disabled) {
    temp = `${layoutClass.value} + " " + ${'bg-muted text-muted-foreground cursor-not-allowed'}`
  }

  if (props.classname) {
    temp += ' ' + props.classname
  }

  return temp
})
</script>

<template>
  <button :class="additionClass" @click="handleClick" :disabled="props.disabled">
    <slot />
  </button>
</template>
