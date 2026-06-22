<script setup>
const props = defineProps({
  socials: {
    type: Array,
    default: () => [
      { label: 'Facebook', href: 'https://www.facebook.com/share/19dpo7BhMU/?mibextid=wwXIfr' },
      { label: 'GitHub', href: 'https://github.com/MinThantKo365' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/min-thant-ko-05549a35a/' },
      { label: 'Telegram', href: 'https://t.me/MTK365' },
    ],
  },
})
</script>

<template>
  <footer class="reveal mt-4 border-t border-primary-500/15 pt-8">
    <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-sm text-brand-text-light/50 dark:text-brand-text-dark/50">
        © {{ new Date().getFullYear() }} Min Thant Ko. Full Stack Developer passionate about creating elegant and
        functional digital experiences.
      </p>

      <nav class="flex flex-wrap gap-2" aria-label="Social links">
        <a
          v-for="item in socials"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-text-light/70 transition-all duration-300 hover:border-primary-500/40 hover:bg-primary-500/15 hover:text-primary-600 hover:shadow-glow dark:text-brand-text-dark/70 dark:hover:text-primary-300"
          data-cursor="link"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-primary-500 shadow-glow"></span>
          {{ item.label }}
        </a>
      </nav>
    </div>
  </footer>
</template>
