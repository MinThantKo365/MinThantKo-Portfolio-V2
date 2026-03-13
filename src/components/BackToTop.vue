<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-all duration-300 hover:bg-primary-600 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-500"
    aria-label="Back to top"
  >
  <i class="fa-solid fa-chevron-up"></i>
  </button>
</template>
