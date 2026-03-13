<script setup>
import { onMounted, ref, watch } from 'vue'
import ThemeToggle from './components/ThemeToggle.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'
import MobileMenu from './components/MobileMenu.vue'

// Simple light / dark mode management:
// - initial value from localStorage or system preference
// - persisted to localStorage
// - synchronised to <html> class for Tailwind's `darkMode: 'class'`
const theme = ref('dark')

// Smooth scroll with offset for sticky header
const scrollToSection = (e) => {
  e.preventDefault()
  const targetId = e.target.getAttribute('href')
  if (targetId && targetId.startsWith('#')) {
    const element = document.querySelector(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }
}

onMounted(() => {
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    theme.value = stored
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = prefersDark ? 'dark' : 'light'
  }

  // Add smooth scroll to all anchor links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
})

watch(
  theme,
  (value) => {
    window.localStorage.setItem('theme', value)
    const root = document.documentElement
    const body = document.body
    if (value === 'dark') {
      root.classList.add('dark')
      body.classList.add('dark')
    } else {
      root.classList.remove('dark')
      body.classList.remove('dark')
    }
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="min-h-screen bg-white text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 selection:bg-primary-500/50 selection:text-white dark:selection:text-slate-50"
  >
    <!-- subtle global background gradients / motion -->
    <div
      class="pointer-events-none fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60 blur-3xl mix-blend-screen transition-opacity duration-300 dark:bg-radial-soft-dark dark:opacity-90"
    ></div>

    <header
      class="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-900/80 dark:bg-slate-950/80"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" class="group flex items-center gap-2">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-primary-600 ring-1 ring-slate-300 transition-colors dark:bg-slate-900/80 dark:text-primary-300 dark:ring-slate-700/80"
          >
            M
          </div>
          <div class="leading-tight">
            <p class="text-xs font-medium tracking-wide text-slate-900 dark:text-slate-50">Min Thant Ko</p>
            <p class="text-[11px] text-slate-600 dark:text-slate-400">Full Stack Developer</p>
          </div>
        </a>

        <nav class="hidden items-center gap-5 text-xs text-slate-600 sm:flex dark:text-slate-300">
          <a href="#about" @click="scrollToSection" class="transition-colors hover:text-slate-900 dark:hover:text-white">About</a>
          <a href="#skills" @click="scrollToSection" class="transition-colors hover:text-slate-900 dark:hover:text-white">Skills</a>
          <a href="#projects" @click="scrollToSection" class="transition-colors hover:text-slate-900 dark:hover:text-white">Projects</a>
          <a href="#experience" @click="scrollToSection" class="transition-colors hover:text-slate-900 dark:hover:text-white">Experience</a>
          <a href="#contact" @click="scrollToSection" class="transition-colors hover:text-slate-900 dark:hover:text-white">Contact</a>
        </nav>

        <div class="flex items-center gap-3">
          <ThemeToggle v-model="theme" />
          <MobileMenu />
        </div>
      </div>
    </header>

    <main class="relative z-10">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>

    <BackToTop />
  </div>
</template>
