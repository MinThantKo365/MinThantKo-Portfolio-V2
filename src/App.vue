<script setup>
import { watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'
import AnimatedBackground from './components/effects/AnimatedBackground.vue'
import CustomCursor from './components/effects/CustomCursor.vue'
import ScrollProgress from './components/effects/ScrollProgress.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'
import { useTheme } from './composables/useTheme.js'

const { theme } = useTheme()
const route = useRoute()
const { observe } = useScrollReveal()

const revealPage = async () => {
  await nextTick()
  requestAnimationFrame(() => {
    observe()
  })
}

watch(
  () => route.fullPath,
  () => {
    revealPage()
  },
  { immediate: true },
)
</script>

<template>
  <div class="site-shell relative min-h-screen text-[var(--color-text)] transition-colors duration-theme">
    <ScrollProgress />
    <AnimatedBackground class="mono-grayscale" />
    <CustomCursor />

    <Navbar v-model:theme="theme" />

    <main class="mono-grayscale relative z-10">
      <RouterView v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in" @after-enter="observe">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>

      <div class="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <FooterSection />
      </div>
    </main>

    <BackToTop />
  </div>
</template>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
