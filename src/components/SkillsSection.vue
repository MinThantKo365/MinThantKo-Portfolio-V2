<script setup>
const props = defineProps({
  skills: {
    type: Array,
    default: () => [
      {
        category: 'Programming Languages',
        items: ['PHP', 'Python', 'JavaScript', 'C# (basic)'],
      },
      {
        category: 'Web Technologies',
        items: ['Laravel', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Vue.js'],
      },
      {
        category: 'Databases & Tools',
        items: ['MySQL', 'VS Code', 'Cursor', 'Git / GitHub', 'Cisco Packet Tracer (basic)', 'StarUML'],
      },
      {
        category: 'Operating Systems',
        items: ['Windows', 'Linux (basic)'],
      },
    ],
  },
})
</script>

<template>
  <section id="skills" class="relative rounded-3xl border border-slate-200 bg-white px-6 py-10 transition-colors dark:border-slate-800/70 dark:bg-slate-950/80 sm:px-10">
    <div class="mb-6 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50 sm:text-xl">Skills & Tech Stack</h2>
        <p class="text-sm text-slate-600 transition-colors dark:text-slate-400">A snapshot of the tools and technologies I work with daily.</p>
      </div>
      <span class="hidden text-xs text-slate-500 transition-colors dark:text-slate-500 sm:inline">Always learning & iterating</span>
    </div>

    <div class="grid gap-4 sm:gap-5 sm:grid-cols-2 md:grid-cols-3">
      <article
        v-for="group in skills"
        :key="group.category"
        class="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary-400/70 hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-50 hover:shadow-2xl hover:shadow-primary-500/20 dark:border-slate-800/70 dark:from-slate-900/70 dark:to-slate-950 dark:shadow-slate-950/70 dark:hover:border-primary-500/60 dark:hover:from-slate-900/90 dark:hover:to-slate-900/80"
      >
        <div
          class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/15 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        ></div>
        <h3 class="mb-3 text-sm font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50">
          {{ group.category }}
        </h3>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="item in group.items"
            :key="item"
            class="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-700 transition group-hover:border-primary-400/70 group-hover:text-primary-600 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200 dark:group-hover:text-primary-100"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

