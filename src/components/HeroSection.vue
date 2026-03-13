<script setup>
const props = defineProps({
  name: { type: String, default: 'Min Thant Ko' },
  title: { type: String, default: 'Full Stack Developer | AI Developer' },
  subtitle: {
    type: String,
    default:
      'Full Stack Developer currently building web applications and exploring cloud computing, with a strong focus on Laravel, Vue.js, and scalable backend systems.',
  },
})
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-12 shadow-soft-lg transition-colors duration-300 dark:border-slate-800/70 dark:from-slate-900/80 dark:via-slate-950 dark:to-black sm:px-10 sm:py-16 lg:px-14 lg:py-20"
  >
    <!-- background orbs / gradient blobs -->
    <div
      class="pointer-events-none absolute -left-40 -top-40 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -right-44 top-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl"
    ></div>

    <!-- animated grid overlay -->
    <div
      class="pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_top,_black,_transparent_65%)]"
    >
      <div
        class="animate-[spin_30s_linear_infinite] bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.22)_1px,_transparent_1px)] bg-[size:22px_22px] h-full w-full"
      ></div>
    </div>

    <div class="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)] lg:items-center lg:gap-12">
      <div class="space-y-6 sm:space-y-8">
        <p
          class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 shadow-lg shadow-emerald-500/20 backdrop-blur transition-colors dark:bg-slate-900/70 dark:text-emerald-200/90"
        >
          <span
            class="h-1.5 w-1.5 animate-[pulse_1.4s_ease-in-out_infinite] rounded-full bg-emerald-400"
          ></span>
          Available for new opportunities
        </p>

        <div class="space-y-4 sm:space-y-5">
          <h1
            class="text-balance text-3xl font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {{ name }}
          </h1>
          <p class="text-base font-medium uppercase tracking-[0.25em] text-primary-600 transition-colors dark:text-primary-200/80 sm:text-lg">
            {{ title }}
          </p>
          <p class="max-w-xl text-sm text-slate-600 transition-colors dark:text-slate-300 sm:text-base md:text-lg">
            {{ subtitle }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-[0_18px_45px_rgba(37,99,235,0.55)] transition-all hover:-translate-y-1 hover:scale-105 hover:bg-primary-400 hover:shadow-[0_24px_60px_rgba(37,99,235,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm focus-visible:ring-offset-slate-950"
          >
            View Projects
            <span
              class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-400/90 text-[11px] transition-transform group-hover:translate-x-0.5"
              ><i class="fa-solid fa-angle-right"></i></span
            >
          </a>

          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-700 shadow-lg transition-all hover:-translate-y-1 hover:scale-105 hover:border-primary-400/80 hover:bg-slate-100 hover:text-slate-900 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 sm:px-5 sm:py-3 sm:text-sm focus-visible:ring-offset-white dark:border-slate-600/80 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
          >
            Contact Me
          </a>
        </div>

      </div>

      <div
        class="relative mx-auto flex h-56 w-56 items-center justify-center overflow-visible rounded-[2.5rem] sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-[20rem] lg:w-[20rem]"
      >
        <div class="shining-wave-border"></div>
        <div class="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] bg-slate-50 shadow-[0_24px_80px_rgba(0,0,0,0.15)] backdrop-blur-sm dark:bg-slate-900/60 dark:shadow-[0_24px_80px_rgba(15,23,42,0.7)]">
          <img
            src="/me.jpg"
            alt="Min Thant Ko"
            class="h-full w-full object-cover"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

