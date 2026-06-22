<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="fade-up">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="mono-grayscale fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary-500/30 bg-primary-500 text-white shadow-glow transition-all duration-300 hover:scale-110 hover:bg-primary-400 hover:shadow-glow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-brand-bg-dark"
      aria-label="Back to top"
      data-cursor="button"
    >
      <i class="fa-solid fa-chevron-up"></i>
    </button>
  </Transition>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
