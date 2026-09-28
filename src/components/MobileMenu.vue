<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

defineProps({
  theme: { type: String, required: true },
})

const emit = defineEmits(['update:theme'])

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Journey', to: '/journey' },
  { name: 'Contact', to: '/contact' },
]
</script>

<template>
  <div class="sm:hidden">
    <button
      @click="toggleMenu"
      class="flex h-11 w-11 items-center justify-center border border-[color:var(--color-border)] bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
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
      <Transition name="fade">
        <div
          v-if="isOpen"
          class="mono-grayscale fixed inset-0 z-40 bg-[color:var(--color-bg)]/50 backdrop-blur-sm"
          @click="closeMenu"
        ></div>
      </Transition>

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
              <div class="flex h-10 w-10 items-center justify-center border border-[color:var(--color-accent)]/40 bg-[color:var(--color-primary)]/15 font-display text-sm font-semibold text-[color:var(--color-primary)]">
                M
              </div>
              <h2 class="font-display text-lg font-semibold">Min Thant Ko</h2>
            </div>
            <button
              @click="closeMenu"
              class="flex h-11 w-11 items-center justify-center text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-text)]"
              aria-label="Close menu"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul class="space-y-1">
            <li v-for="(link, index) in navLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                @click="closeMenu"
                class="flex min-h-[48px] items-center border-b border-[color:var(--color-border)] px-1 py-3 font-display text-xl font-medium text-[color:var(--color-text)]/85 transition-colors hover:text-[color:var(--color-accent)]"
                :style="{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>

          <div class="mt-auto border-t border-[color:var(--color-border)] pt-6">
            <p class="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
              Theme
            </p>
            <ThemeToggle
              class="w-full"
              :model-value="theme"
              @update:model-value="emit('update:theme', $event)"
            />
          </div>
        </div>
      </nav>
    </Teleport>
  </div>
</template>

<style scoped>
.menu-drawer {
  background: rgba(220, 226, 232, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-left: 1px solid rgba(47, 95, 90, 0.16);
  box-shadow: -8px 0 40px rgba(10, 14, 20, 0.08);
}

.dark .menu-drawer {
  background: rgba(10, 14, 20, 0.97);
  border-left-color: rgba(107, 155, 148, 0.12);
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.45);
}

.theme-monochrome .menu-drawer {
  background: rgba(10, 10, 10, 0.98);
  border-left-color: rgba(212, 212, 212, 0.12);
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
