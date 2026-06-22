<script setup>
import MagneticButton from './ui/MagneticButton.vue'

const props = defineProps({
  name: { type: String, default: 'Min Thant Ko' },
  title: { type: String, default: 'Full Stack Developer | AI Developer' },
  subtitle: {
    type: String,
    default:
      'Full Stack Developer currently building web applications and exploring cloud computing, with a strong focus on Laravel, Vue.js, and scalable backend systems.',
  },
})

const socials = [
  { label: 'GitHub', href: 'https://github.com/MinThantKo365', icon: 'fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/min-thant-ko-05549a35a/', icon: 'fa-linkedin' },
  { label: 'Telegram', href: 'https://t.me/MTK365', icon: 'fa-telegram' },
]
</script>

<template>
  <section
    id="hero"
    class="glass-card glow-border relative overflow-hidden px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
  >
    <!-- Floating decorative elements -->
    <div class="pointer-events-none absolute right-10 top-20 h-20 w-20 rounded-2xl border border-primary-500/20 bg-primary-500/5 animate-float-slow"></div>
    <div class="pointer-events-none absolute bottom-16 left-8 h-14 w-14 rounded-full border border-primary-300/20 bg-primary-300/10 animate-float-medium"></div>

    <div class="relative z-10 flex flex-col items-center gap-10 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)] lg:items-center lg:gap-14">
      <!-- Profile image — first on mobile -->
      <div
        class="reveal-scale order-1 mx-auto flex h-48 w-48 items-center justify-center overflow-visible sm:h-56 sm:w-56 lg:order-2 lg:h-72 lg:w-72"
      >
        <div class="relative h-full w-full animate-float-slow">
          <div class="shining-wave-border"></div>
          <div class="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] shadow-soft-xl dark:shadow-glow">
            <img
              src="/me.jpg"
              alt="Min Thant Ko"
              class="h-full w-full object-cover"
              loading="eager"
              width="400"
              height="400"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg-dark/50 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="order-2 space-y-6 text-center lg:order-1 lg:text-left sm:space-y-8">
        <p
          class="reveal inline-flex items-center gap-2 rounded-full border border-primary-500/25 bg-primary-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-700 dark:text-primary-200"
        >
          <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-500"></span>
          Available for new opportunities
        </p>

        <div class="space-y-4">
          <h1 class="reveal hero-title">
            <span class="gradient-text">{{ name }}</span>
          </h1>
          <p
            class="reveal text-base font-semibold uppercase tracking-[0.2em] text-primary-600 transition-all duration-500 dark:text-primary-300 sm:text-lg"
            data-cursor="text"
          >
            {{ title }}
          </p>
          <p class="reveal body-text mx-auto max-w-xl text-brand-text-light/70 dark:text-brand-text-dark/70 lg:mx-0">
            {{ subtitle }}
          </p>
        </div>

        <div class="reveal flex flex-wrap items-center justify-center gap-3 lg:justify-start sm:gap-4">
          <MagneticButton href="#projects" class="btn-primary">
            View Projects
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </MagneticButton>
          <MagneticButton href="#contact" class="btn-secondary">
            Contact Me
          </MagneticButton>
        </div>

        <div class="reveal flex items-center justify-center gap-3 lg:justify-start">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-500/20 bg-primary-500/10 text-primary-700 transition-all duration-300 hover:border-primary-500/50 hover:bg-primary-500/20 hover:shadow-glow dark:text-primary-300"
            :aria-label="social.label"
            data-cursor="link"
          >
            <i :class="['fab', social.icon]"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
