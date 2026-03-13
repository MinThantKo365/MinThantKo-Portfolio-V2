<script setup>
const props = defineProps({
  bio: {
    type: String,
    default:
      'I am a Full Stack Developer with hands-on experience in web application development, system design, and collaborative team environments. I am currently working while also studying AWS Cloud Computing to move toward a Cloud Engineer and System Engineer career path. I hold a B.Sc. (Hons) in Computing from the University of Greenwich, along with NCC Level 4 and Level 5 Diplomas in Computing.',
  },
  highlights: {
    type: Array,
    default: () => [
      'B.Sc. (Hons) in Computing from the University of Greenwich (UK) via KMD College.',
      'NCC Level 5 Diploma in Computing from M.S.T College, with experience in system analysis, web development, and database design.',
      'NCC Level 4 Diploma in Computing from Twinkle College, covering programming, computer systems, and networking fundamentals.',
    ],
  },
})
</script>

<template>
  <section id="about" class="relative rounded-3xl border border-slate-200 bg-white px-6 py-10 transition-colors dark:border-slate-800/70 dark:bg-slate-950/80 sm:px-10">
    <div class="mb-6 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50 sm:text-xl">About Me</h2>
        <p class="text-sm text-slate-600 transition-colors dark:text-slate-400">A quick snapshot of who I am and how I work.</p>
      </div>
      <span
        class="hidden rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-700 transition-colors dark:bg-slate-900/80 dark:text-slate-300 sm:inline-flex"
        >Overview</span
      >
    </div>

    <div class="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)]">
      <p class="max-w-xl text-sm leading-relaxed text-slate-700 transition-colors dark:text-slate-200 sm:text-[15px]">
        {{ bio }}
      </p>

      <div
        class="relative rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary-400/60 hover:shadow-2xl hover:shadow-primary-500/20 dark:border-slate-800/70 dark:from-slate-900/70 dark:to-slate-950 dark:shadow-slate-900/60 dark:hover:border-primary-500/60"
      >
        <div class="mb-4 flex items-center justify-between gap-4">
          <p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors dark:text-slate-400">Highlights</p>
          <span class="text-[11px] text-slate-400 transition-colors dark:text-slate-500">Education Background</span>
        </div>

        <ul class="space-y-3 text-xs text-slate-700 transition-colors dark:text-slate-200">
          <li v-for="item in highlights" :key="item" class="flex gap-3">
            <span class="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-primary-400 to-emerald-400">
            </span>
            <span class="leading-relaxed">
              {{ item }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

