<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import MobileMenu from './MobileMenu.vue'

defineProps({
  theme: { type: String, required: true },
})

const emit = defineEmits(['update:theme'])

const isScrolled = ref(false)
const activeSection = ref('hero')

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

const scrollToSection = (e, href) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    const headerOffset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40

  const sections = ['contact', 'experience', 'projects', 'skills', 'about', 'hero']
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= 150) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
    <div
      class="glass-nav mono-grayscale mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 transition-all duration-500 ease-out sm:px-6"
      :class="isScrolled ? 'py-2.5 shadow-glass-light dark:shadow-glass-dark' : 'py-3.5'"
    >
      <a href="#hero" class="group flex items-center gap-3" @click="(e) => scrollToSection(e, '#hero')">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-300 text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:scale-105"
        >
          M
        </div>
        <div class="leading-tight transition-opacity duration-300" :class="isScrolled ? 'hidden sm:block' : 'block'">
          <p class="text-sm font-semibold">
            <span class="gradient-text">Min</span><span class="text-brand-gold">`s</span>
          </p>
          <p class="text-[11px] text-primary-700/70 dark:text-primary-300/70">Portfolio Website</p>
        </div>
      </a>

      <nav class="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="relative rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-300"
          :class="
            activeSection === link.id
              ? 'text-primary-600 dark:text-primary-300'
              : 'text-brand-text-light/70 hover:text-brand-text-light dark:text-brand-text-dark/70 dark:hover:text-brand-text-dark'
          "
          @click="(e) => scrollToSection(e, link.href)"
        >
          {{ link.name }}
          <span
            v-if="activeSection === link.id"
            class="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary-500 shadow-glow"
          ></span>
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <ThemeToggle :model-value="theme" @update:model-value="emit('update:theme', $event)" />
        <MobileMenu />
      </div>
    </div>
  </header>
</template>
