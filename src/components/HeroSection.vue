<script setup>
import MagneticButton from './ui/MagneticButton.vue'

defineProps({
  name: { type: String, default: 'Min Thant Ko' },
  title: { type: String, default: 'Full Stack Developer · AI Developer' },
  subtitle: {
    type: String,
    default:
      'Building web systems with Laravel and Vue, with hands-on AWS cloud training toward systems and cloud engineering.',
  },
})

const socials = [
  { label: 'GitHub', href: 'https://github.com/MinThantKo365', icon: 'fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/min-thant-ko-05549a35a/', icon: 'fa-linkedin' },
  { label: 'Telegram', href: 'https://t.me/MTK365', icon: 'fa-telegram' },
]
</script>

<template>
  <section id="hero" class="hero-plane relative -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
    <div class="hero-mist pointer-events-none absolute inset-0" aria-hidden="true"></div>

    <div class="relative z-10 grid min-h-[calc(100svh-7rem)] items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
      <div class="hero-portrait relative order-1 min-h-[38vh] sm:min-h-[44vh] lg:order-2 lg:min-h-full">
        <div class="absolute inset-0">
          <img
            src="/me.jpg"
            alt="Min Thant Ko"
            class="h-full w-full object-cover object-[center_18%]"
            loading="eager"
            width="900"
            height="1100"
          />
          <div class="hero-portrait-veil absolute inset-0"></div>
        </div>
      </div>

      <div class="order-2 flex flex-col justify-end px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:order-1 lg:px-8 lg:pb-20">
        <p class="reveal mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
          Available for new opportunities
        </p>

        <h1 class="reveal hero-title mb-5">
          {{ name }}
        </h1>

        <p
          class="reveal mb-4 max-w-md font-sans text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-primary)] sm:text-base"
          data-cursor="text"
        >
          {{ title }}
        </p>

        <p class="reveal body-text mb-8 max-w-lg text-[color:var(--color-muted)]">
          {{ subtitle }}
        </p>

        <div class="reveal mb-8 flex flex-wrap items-center gap-3">
          <MagneticButton to="/projects" class="btn-primary">
            View Projects
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </MagneticButton>
          <MagneticButton to="/contact" class="btn-secondary">
            Contact Me
          </MagneticButton>
        </div>

        <div class="reveal flex items-center gap-2">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-11 w-11 items-center justify-center border border-[color:var(--color-border)] text-[color:var(--color-muted)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            :aria-label="social.label"
            data-cursor="link"
          >
            <i :class="['fab', social.icon]"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="ornament-rule relative z-10 mx-4 mb-2 sm:mx-6 lg:mx-8" aria-hidden="true">
      <span class="font-display text-xs tracking-[0.35em]">★</span>
    </div>
  </section>
</template>

<style scoped>
.hero-plane {
  background:
    radial-gradient(ellipse 80% 60% at 15% 80%, var(--color-fog), transparent 55%),
    linear-gradient(180deg, transparent 40%, var(--color-bg) 100%);
}

.hero-mist {
  background:
    radial-gradient(ellipse 50% 40% at 70% 20%, rgba(154, 107, 63, 0.12), transparent 60%),
    radial-gradient(ellipse 40% 50% at 10% 30%, rgba(47, 95, 90, 0.14), transparent 55%);
  animation: fog-drift 22s ease-in-out infinite alternate;
}

.hero-portrait-veil {
  background:
    linear-gradient(180deg, transparent 45%, var(--color-bg) 100%),
    linear-gradient(0deg, transparent 70%, rgba(10, 14, 20, 0.2) 100%);
}

@media (min-width: 1024px) {
  .hero-portrait-veil {
    background:
      linear-gradient(90deg, var(--color-bg) 0%, transparent 28%),
      linear-gradient(180deg, transparent 55%, var(--color-bg) 100%),
      linear-gradient(0deg, transparent 70%, rgba(10, 14, 20, 0.25) 100%);
  }

  .dark .hero-portrait-veil {
    background:
      linear-gradient(90deg, var(--color-bg) 0%, transparent 32%),
      linear-gradient(180deg, transparent 50%, var(--color-bg) 100%),
      linear-gradient(0deg, transparent 65%, rgba(10, 14, 20, 0.45) 100%);
  }
}
</style>
