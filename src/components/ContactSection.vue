<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import TiltCard from './ui/TiltCard.vue'

defineProps({
  email: { type: String, default: 'mr.minthantko@gmail.com' },
  phone: { type: String, default: '+95 9 401841741' },
  socials: {
    type: Array,
    default: () => [
      { label: 'Facebook', href: 'https://www.facebook.com/share/19dpo7BhMU/?mibextid=wwXIfr', icon: 'facebook' },
      { label: 'GitHub', href: 'https://github.com/MinThantKo365', icon: 'github' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/min-thant-ko-05549a35a/', icon: 'linkedin' },
      { label: 'Telegram', href: 'https://t.me/MTK365', icon: 'telegram' },
    ],
  },
})

const getIcon = (iconName) => {
  const icons = {
    facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    github: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    telegram: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  }
  return icons[iconName] || ''
}
</script>

<template>
  <section id="contact" class="glass-card glow-border relative px-6 py-10 sm:px-10">
    <SectionHeader
      title="Contact"
      subtitle="Let's talk about your next project or collaboration."
    />

    <div class="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <div class="space-y-6">
        <div class="reveal">
          <h3 class="mb-3 text-base font-semibold text-brand-text-light dark:text-brand-text-dark">Get in Touch</h3>
          <p class="body-text mb-4 text-brand-text-light/75 dark:text-brand-text-dark/75">
            Reach out directly at
            <a
              :href="`mailto:${email}`"
              class="font-medium text-primary-600 underline-offset-2 transition-colors hover:text-primary-500 hover:underline dark:text-primary-300"
              data-cursor="link"
            >{{ email }}</a>
          </p>
          <!-- <p class="text-brand-text-light/75 dark:text-brand-text-dark/75">
            Phone:
            <span class="font-medium">{{ phone }}</span>
          </p> -->
        </div>

        <div class="reveal">
          <h3 class="mb-4 text-base font-semibold text-brand-text-light dark:text-brand-text-dark">Connect with Me</h3>
          <div class="grid gap-3 sm:grid-cols-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex min-h-[44px] items-center gap-3 rounded-xl border border-primary-500/20 bg-white/40 px-5 py-3.5 transition-all duration-300 hover:border-primary-500/40 hover:bg-primary-500/10 hover:shadow-glow dark:bg-brand-surface/40"
              data-cursor="link"
            >
              <svg
                class="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-500 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path :d="getIcon(social.icon)" />
              </svg>
              <span class="text-sm font-medium text-brand-text-light group-hover:text-primary-600 dark:text-brand-text-dark dark:group-hover:text-primary-300">
                {{ social.label }}
              </span>
            </a>
          </div>
        </div>

        <div class="reveal pt-2">
          <a
            href="../assets/MinThantKo_CV.pdf"
            download="MinThantKo_CV.pdf"
            target="_blank"
            class="btn-primary"
            data-cursor="button"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download My Resume
          </a>
        </div>
      </div>

      <TiltCard>
        <div
          class="reveal rounded-2xl border border-primary-500/20 bg-white/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/30 hover:shadow-glow dark:bg-brand-surface/40"
        >
          <h3 class="mb-4 text-lg font-semibold text-brand-text-light dark:text-brand-text-dark">Let's Work Together</h3>
          <p class="mb-6 text-sm leading-relaxed text-brand-text-light/70 dark:text-brand-text-dark/70">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the social links or email me directly.
          </p>
          <div class="space-y-3">
            <div class="group flex items-center gap-3 rounded-xl border border-primary-500/15 bg-primary-500/5 p-4 transition-all duration-300 hover:border-primary-500/30 hover:bg-primary-500/10">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/15 text-primary-600 dark:text-primary-300">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-sm text-brand-text-light/80 dark:text-brand-text-dark/80">{{ email }}</span>
            </div>
            <div class="group flex items-center gap-3 rounded-xl border border-primary-500/15 bg-primary-500/5 p-4 transition-all duration-300 hover:border-primary-500/30 hover:bg-primary-500/10">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/15 text-primary-600 dark:text-primary-300">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span class="text-sm text-brand-text-light/80 dark:text-brand-text-dark/80">{{ phone }}</span>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  </section>
</template>
