<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const scrollToSection = (e, href) => {
  e.preventDefault()
  closeMenu()

  const element = document.querySelector(href)
  if (element) {
    const headerOffset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

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
      class="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-500/25 bg-primary-500/10 text-primary-700 transition-all duration-300 hover:border-primary-500/40 hover:bg-primary-500/20 hover:shadow-glow dark:text-primary-300"
      aria-label="Toggle menu"
      :aria-expanded="isOpen"
      data-cursor="button"
    >
      <svg v-if="!isOpen" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <Teleport to="body">
      <!-- Backdrop -->
      <Transition name="fade">
        <div
          v-if="isOpen"
          class="mono-grayscale fixed inset-0 z-40 bg-brand-bg-dark/40 backdrop-blur-sm"
          @click="closeMenu"
        ></div>
      </Transition>

      <!-- Drawer -->
      <nav
        :class="[
          'menu-drawer mono-grayscale fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col transform transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ]"
        aria-label="Mobile navigation"
      >
        <div class="flex flex-1 flex-col p-6 pt-8">
          <div class="mb-10 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-300 text-sm font-bold text-white shadow-glow">
                M
              </div>
              <h2 class="text-lg font-semibold text-brand-text-light dark:text-brand-text-dark">Min Thant Ko</h2>
            </div>
            <button
              @click="closeMenu"
              class="flex h-11 w-11 items-center justify-center rounded-xl text-brand-text-light/60 transition-colors hover:bg-primary-500/10 dark:text-brand-text-dark/60"
              aria-label="Close menu"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul class="space-y-2">
            <li v-for="(link, index) in navLinks" :key="link.href">
              <a
                :href="link.href"
                @click="(e) => scrollToSection(e, link.href)"
                class="flex min-h-[44px] items-center rounded-xl px-4 py-3 text-base font-medium text-brand-text-light/80 transition-all duration-300 hover:bg-primary-500/10 hover:text-primary-600 dark:text-brand-text-dark/80 dark:hover:text-primary-300"
                :style="{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Teleport>
  </div>
</template>

<style scoped>
.menu-drawer {
  background: rgba(245, 240, 232, 0.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-left: 1px solid rgba(61, 122, 82, 0.16);
  box-shadow: -8px 0 40px rgba(26, 36, 32, 0.08);
}

.dark .menu-drawer {
  background: rgba(18, 36, 25, 0.97);
  border-left-color: rgba(168, 209, 184, 0.1);
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.4);
}

.theme-monochrome .menu-drawer {
  background: rgba(10, 10, 10, 0.98);
  border-left-color: rgba(212, 212, 212, 0.12);
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.55);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
