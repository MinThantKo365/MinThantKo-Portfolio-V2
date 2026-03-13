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
  <footer class="mt-8 border-t border-slate-200 pt-6 transition-colors dark:border-slate-800/80">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-xs text-slate-500 transition-colors dark:text-slate-500">
        © {{ new Date().getFullYear() }} Min Thant Ko. Full Stack Developer passionate about creating elegant and
        functional digital experiences.
      </p>

      <nav class="flex flex-wrap gap-3 text-xs">
        <a
          v-for="item in socials"
          :key="item.label"
          :href="item.href"
          class="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-700 transition hover:border-primary-400/80 hover:bg-slate-100 hover:text-primary-600 dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-300 dark:hover:text-primary-100"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-primary-400"></span>
          {{ item.label }}
        </a>
      </nav>
    </div>
  </footer>
</template>

