<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const scrollToSection = (e, href) => {
  e.preventDefault()
  closeMenu()
  const element = document.querySelector(href)
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
</script>

<template>
  <div class="sm:hidden">
    <button
      @click="toggleMenu"
      class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label="Toggle menu"
    >
      <svg
        v-if="!isOpen"
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      @click="closeMenu"
    ></div>

    <nav
      :class="[
        'fixed right-0 top-0 z-50 h-full w-64 transform border-l border-slate-200/50 bg-white/80 backdrop-blur-md shadow-xl transition-transform duration-300 dark:border-slate-800/50 dark:bg-slate-950/80',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <div class="flex h-full flex-col p-6">
        <div class="mb-8 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-50">Menu</h2>
          <button
            @click="closeMenu"
            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul class="space-y-2">
          <li>
            <a
              href="#about"
              @click="(e) => scrollToSection(e, '#about')"
              class="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              @click="(e) => scrollToSection(e, '#skills')"
              class="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              @click="(e) => scrollToSection(e, '#projects')"
              class="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              @click="(e) => scrollToSection(e, '#experience')"
              class="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              @click="(e) => scrollToSection(e, '#contact')"
              class="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
