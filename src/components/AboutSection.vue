<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import TiltCard from './ui/TiltCard.vue'

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
  <section id="about" class="glass-card glow-border relative px-6 py-10 sm:px-10">
    <SectionHeader
      title="About Me"
      subtitle="A quick snapshot of who I am and how I work."
      badge="Overview"
    />

    <div class="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:items-start">
      <!-- Profile visual -->
      <div class="reveal relative mx-auto w-full max-w-xs lg:mx-0">
        <div class="relative overflow-hidden rounded-3xl border border-primary-500/20 shadow-soft-xl">
          <img
            src="/me.jpg"
            alt="Min Thant Ko"
            class="aspect-[4/5] w-full object-cover"
            loading="lazy"
            width="320"
            height="400"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-bg-dark/60 via-transparent to-transparent"></div>
        </div>
        <div
          class="profile-badge absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 shadow-glass-light backdrop-blur-xl dark:shadow-glass-dark"
        >
          <p class="text-xs font-semibold">Min Thant Ko</p>
          <p class="text-[10px] opacity-70">Full Stack Developer</p>
        </div>
      </div>

      <div class="space-y-6">
        <p class="reveal body-text leading-relaxed text-brand-text-light/80 dark:text-brand-text-dark/80">
          {{ bio }}
        </p>

        <TiltCard>
          <div
            class="reveal rounded-2xl border border-primary-500/20 bg-white/40 p-6 transition-all duration-300 hover:border-primary-500/40 hover:shadow-glow dark:bg-brand-surface/40"
          >
            <div class="mb-4 flex items-center justify-between gap-4">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Highlights</p>
              <span class="text-[11px] text-brand-text-light/50 dark:text-brand-text-dark/50">Education Background</span>
            </div>
            <ul class="space-y-4">
              <li v-for="item in highlights" :key="item" class="flex gap-3">
                <span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-primary-500 to-primary-300 shadow-glow"></span>
                <span class="text-sm leading-relaxed text-brand-text-light/80 dark:text-brand-text-dark/80">{{ item }}</span>
              </li>
            </ul>
          </div>
        </TiltCard>
      </div>
    </div>
  </section>
</template>
