<script setup>
import SectionHeader from './ui/SectionHeader.vue'

defineProps({
  bio: {
    type: String,
    default:
      'I am a Full Stack Developer with hands-on experience in web application development, system design, and collaborative team environments. I have completed AWS Cloud Computing classes and can work with core AWS services as I move toward a Cloud Engineer and System Engineer career path. I hold a B.Sc. (Hons) in Computing from the University of Greenwich, along with NCC Level 4 and Level 5 Diplomas in Computing.',
  },
  highlights: {
    type: Array,
    default: () => [
      'B.Sc. (Hons) in Computing from the University of Greenwich (UK) via KMD College.',
      'AWS Cloud Computing class — trained in core AWS services and cloud fundamentals.',
      'NCC Level 5 Diploma in Computing from M.S.T College, with experience in system analysis, web development, and database design.',
      'NCC Level 4 Diploma in Computing from Twinkle College, covering programming, computer systems, and networking fundamentals.',
    ],
  },
})
</script>

<template>
  <section id="about" class="about-section relative">
    <SectionHeader
      title="About"
      subtitle="A clear map of who I am and how I work."
      badge="Origins"
    />

    <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-start lg:gap-14">
      <div class="reveal relative">
        <div class="about-frame relative overflow-hidden">
          <img
            src="/me.jpg"
            alt="Min Thant Ko"
            class="aspect-[4/5] w-full object-cover"
            loading="lazy"
            width="420"
            height="525"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)]/70 via-transparent to-transparent"></div>
        </div>
        <div class="profile-badge absolute -bottom-3 left-4 px-4 py-3 backdrop-blur-md sm:left-auto sm:right-4">
          <p class="font-display text-sm font-semibold">Min Thant Ko</p>
          <p class="text-[10px] uppercase tracking-[0.18em] opacity-70">Full Stack Developer</p>
        </div>
      </div>

      <div class="space-y-8">
        <p class="reveal body-text leading-relaxed text-[color:var(--color-muted)]">
          {{ bio }}
        </p>

        <div class="reveal border-t border-[color:var(--color-border)] pt-6">
          <div class="mb-5 flex items-baseline justify-between gap-4">
            <p class="text-[11px] font-medium uppercase tracking-[0.24em] text-[color:var(--color-accent)]">
              Education
            </p>
            <span class="text-[11px] text-[color:var(--color-muted)]">Foundations</span>
          </div>
          <ul class="space-y-5">
            <li v-for="item in highlights" :key="item" class="flex gap-4">
              <span class="mt-2 h-px w-6 flex-shrink-0 bg-[color:var(--color-accent)]"></span>
              <span class="text-sm leading-relaxed text-[color:var(--color-text)]/85">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-frame {
  border: 1px solid var(--color-border);
  box-shadow: 0 20px 50px rgba(10, 14, 20, 0.12);
}
</style>
