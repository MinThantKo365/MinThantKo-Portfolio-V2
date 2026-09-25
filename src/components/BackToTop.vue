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
      class="mono-grayscale fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center border border-[color:var(--color-border)] bg-[color:var(--color-primary)] text-[#f4f7f6] shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]"
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
