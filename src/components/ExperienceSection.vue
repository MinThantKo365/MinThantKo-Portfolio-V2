<script setup>
const props = defineProps({
  experiences: {
    type: Array,
    default: () => [
      {
        role: 'Junior Web Developer',
        company: 'Global Technology Company · Full-time',
        period: 'Jul 2025 – Present · Yangon, Myanmar · On-site',
        summary:
          'Developing and maintaining web applications as part of a global technology team, contributing to frontend and backend features in an on-site environment.',
      },
      {
        role: 'AI Developer (Internship)',
        company: 'My Day Thu Kywal',
        period: 'Apr 2025 – Jul 2025 · On-site',
        summary:
          'Worked as an AI Developer intern, supporting AI-driven features and tools while collaborating with the engineering team.',
      },
    ],
  },
})
</script>

<template>
  <section
    id="experience"
    class="relative rounded-3xl border border-slate-200 bg-white px-6 py-10 transition-colors dark:border-slate-800/70 dark:bg-slate-950/80 sm:px-10"
  >
    <div class="mb-6 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50 sm:text-xl">Work Experience</h2>
        <p class="text-sm text-slate-600 transition-colors dark:text-slate-400">Recent roles and responsibilities.</p>
      </div>
    </div>

    <ol class="space-y-4 border-l border-slate-300 pl-4 transition-colors dark:border-slate-800/80 sm:pl-5">
      <li
        v-for="item in experiences"
        :key="item.role + item.company"
        class="group relative rounded-2xl border-2 border-transparent bg-gradient-to-br from-slate-50 to-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary-400/60 hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-50 hover:shadow-xl hover:shadow-primary-500/20 dark:from-slate-900/40 dark:to-slate-950 dark:hover:border-primary-500/60 dark:hover:from-slate-900/80 dark:hover:to-slate-900/60"
      >
        <span
          class="absolute -left-[9px] top-4 h-3 w-3 rounded-full border border-white bg-gradient-to-br from-primary-400 to-emerald-400 shadow-[0_0_0_4px_rgba(255,255,255,0.95)] transition-colors dark:border-slate-900/80 dark:shadow-[0_0_0_4px_rgba(15,23,42,0.95)]"
        ></span>
        <header class="mb-1 flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h3 class="text-sm font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50">
              {{ item.role }}
            </h3>
            <p class="text-xs text-slate-600 transition-colors dark:text-slate-400">
              {{ item.company }}
            </p>
          </div>
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500 transition-colors dark:text-slate-400">
            {{ item.period }}
          </p>
        </header>
        <p class="text-xs leading-relaxed text-slate-700 transition-colors dark:text-slate-300">
          {{ item.summary }}
        </p>
      </li>
    </ol>
  </section>
</template>

