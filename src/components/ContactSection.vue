<script setup>
import { computed } from 'vue'

const props = defineProps({
  hideHeader: { type: Boolean, default: false },
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

const phoneHref = computed(() => `tel:${props.phone.replace(/[\s()-]/g, '')}`)

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
  <section id="contact" class="relative">
    <div class="grid gap-10 border border-[color:var(--color-border)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <div class="space-y-8 p-6 sm:p-8 lg:p-10">
        <div class="reveal">
          <h3 class="mb-3 font-display text-xl font-semibold">Get in Touch</h3>
          <p class="body-text text-[color:var(--color-muted)]">
            Reach out directly at
            <a
              :href="`mailto:${email}`"
              class="font-medium text-[color:var(--color-accent)] underline-offset-4 transition-colors hover:underline"
              data-cursor="link"
            >{{ email }}</a>
          </p>
        </div>

        <div class="reveal">
          <h3 class="mb-4 font-display text-xl font-semibold">Connect</h3>
          <div class="grid gap-px border border-[color:var(--color-border)] bg-[color:var(--color-border)] sm:grid-cols-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link group flex min-h-[52px] items-center gap-3 px-5 py-3.5 transition-colors"
              data-cursor="link"
            >
              <svg
                class="h-5 w-5 text-[color:var(--color-primary)] transition-colors group-hover:text-[color:var(--color-accent)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path :d="getIcon(social.icon)" />
              </svg>
              <span class="text-sm font-medium">{{ social.label }}</span>
            </a>
          </div>
        </div>

        <div class="reveal">
          <a
            href="/MinThantKo_CV.pdf"
            download="MinThantKo_CV.pdf"
            target="_blank"
            class="btn-primary"
            data-cursor="button"
          >
            <i class="fas fa-file-arrow-down"></i>
            Download Resume
          </a>
        </div>
      </div>

      <div class="reveal contact-aside relative flex flex-col justify-end overflow-hidden p-6 sm:p-8 lg:p-10">
        <div class="contact-fog pointer-events-none absolute inset-0" aria-hidden="true"></div>
        <div class="relative z-10 space-y-6">
          <p class="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
            Signal open
          </p>
          <h3 class="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Let’s build something that lasts.
          </h3>
          <p class="max-w-sm text-sm leading-relaxed text-[color:var(--color-muted)]">
            Open to new projects, creative ideas, and roles where careful engineering meets clear craft.
          </p>
          <div class="space-y-3 border-t border-[color:var(--color-border)] pt-5">
            <a
              :href="`mailto:${email}`"
              class="block text-sm text-[color:var(--color-text)]/85 transition-colors hover:text-[color:var(--color-accent)]"
              data-cursor="link"
            >{{ email }}</a>
            <a
              :href="phoneHref"
              class="block text-sm text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-accent)]"
              data-cursor="link"
            >{{ phone }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-aside {
  background: color-mix(in srgb, var(--color-card) 70%, var(--color-primary) 8%);
  border-top: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  .contact-aside {
    border-top: none;
    border-left: 1px solid var(--color-border);
  }
}

.contact-fog {
  background:
    radial-gradient(ellipse 70% 50% at 80% 20%, rgba(154, 107, 63, 0.16), transparent 55%),
    radial-gradient(ellipse 60% 60% at 10% 90%, rgba(47, 95, 90, 0.18), transparent 50%);
  animation: fog-drift 20s ease-in-out infinite alternate;
}

.social-link {
  background: var(--color-card);
}

.social-link:hover {
  background: color-mix(in srgb, var(--color-card) 80%, var(--color-primary) 12%);
}
</style>
