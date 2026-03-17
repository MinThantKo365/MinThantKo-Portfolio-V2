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

// Navigation links for easier maintenance
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]
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
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-else
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <nav
      :class="[
        'menu-drawer fixed inset-0 z-50 flex flex-col transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
     
    >
      <div class="flex flex-1 flex-col p-6"  id="dark-menu-drawer">
        <div class="mb-8 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
            class="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-primary-600 ring-1 ring-slate-300 transition-colors dark:bg-slate-900/80 dark:text-primary-300 dark:ring-slate-700/80"
          >
            M
          </div>
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-50">​Min Thant Ko</h2>
          </div>
          <button
            @click="closeMenu"
            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul class="space-y-2">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click="(e) => scrollToSection(e, link.href)"
              class="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.menu-drawer {
  /* Light mode: very soft, bright transparent sheet */
  background: rgba(255, 255, 255, 0.88); /* mostly white, lightly transparent */
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.dark .menu-drawer {
  /* Dark mode: deep slate, but a bit more transparent so it doesn't feel fully black */
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

#dark-menu-drawer {
  /* Light mode: white */
  background: #ffffff;
}

.dark #dark-menu-drawer {
  /* Dark mode: deep slate */
  background: #0f172a;
}
</style>