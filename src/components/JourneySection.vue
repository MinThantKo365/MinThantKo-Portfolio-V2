<script setup>
import { computed } from 'vue'

const props = defineProps({
  chapters: {
    type: Array,
    default: () => [
      {
        year: '2022',
        label: 'Foundations',
        events: [
          {
            period: 'Early 2022',
            title: 'Matriculation Examination',
            place: '',
            summary: 'Sat for the Matriculation Examination — the first major gate on the path into IT.',
          },
          {
            period: 'Summer 2022',
            title: 'A+ & NE Classes',
            place: 'YGN Net',
            summary: 'Spent the summer building foundational IT skills through A+ and Network Essentials training.',
          },
          {
            period: '2022',
            title: 'Passed Matriculation',
            place: '',
            summary: 'Cleared the Matriculation Examination and stepped fully onto the computing track.',
          },
          {
            period: '2022 – 2023',
            title: 'NCC Level 4 Diploma in Computing',
            place: 'Twinkle College',
            summary: 'Built a strong computing foundation through coursework covering systems, networks, databases, and practical development.',
            learned: [
              'Database management',
              'Network System (Theory & Lab)',
              'Computerized System',
              'C# Development',
              'Excel VBA',
              'Microsoft Office Solution',
            ],
          },
        ],
      },
      {
        year: '2023',
        label: 'Expanding skills',
        events: [
          {
            period: '2023',
            title: 'Python OOP Batch 2',
            place: "Let's Learn Programming Myanmar",
            summary: 'Deepened object-oriented programming skills with Python in a focused, hands-on batch.',
          },
          {
            period: '2023',
            title: 'SQL Class',
            place: 'Udemy',
            summary: 'Learned structured query design and database fundamentals through dedicated SQL coursework.',
          },
          {
            period: '2023',
            title: 'Data Analytics Training',
            place: 'ASEAN Data Science Explorers',
            summary: 'Trained in data analytics with ASEAN Data Science Explorers — connecting code to insight.',
          },
          {
            period: '2023',
            title: 'PHP OOP & Fundamentals',
            place: "Let's Learn Programming Myanmar",
            summary: 'Strengthened PHP fundamentals and object-oriented programming for web development. I attended this class for the need of L5DC.',
          },
          {
            period: '2023 – 2024',
            title: 'NCC Level 5 Diploma in Computing',
            place: 'M.S.T College',
            summary: 'Advanced into full-stack web development, databases, networking, and security through the NCC Level 5 Diploma.',
            learned: [
              'Website Full Stack Development',
              'PHP Projects',
              'Laravel',
              'JavaScript, Ajax, jQuery',
              'Database Administration',
              'Core Networking System',
              'Network Security',
            ],
          },
        ],
      },
      {
        year: '2024',
        label: 'Full-stack & AI career path',
        events: [
          {
            period: '2024',
            title: 'Machine Learning Class',
            place: 'Simbolo',
            summary: 'Explored machine learning concepts and practice through Simbolo’s training program.',
          },
          {
            period: '2024',
            title: 'M.S.T College’s React.js Class',
            place: 'M.S.T College',
            summary: 'Learned React.js and built a project using React.js. Gained a strong foundation of React.js and its core concepts.',
          },
          {
            period: '2024',
            title: 'Web Development Full Stack',
            place: 'Code Lab · A–Z Batch 11',
            summary: 'Completed full-stack training covering Laravel, Vue.js, and server deployment in Code Lab’s A–Z Class Batch 11.',
            learned: [
              'HTML, CSS, JavaScript, Bootstrap',
              'Laravel',
              'Vue.js',
              'Git & GitHub',
              'Server Deployment',
            ],
          },
          {
            period: '2024',
            title: 'Freelance Intern',
            place: 'Local tech company',
            summary: 'Worked as a freelance intern at a local tech company, designing and building databases for real project needs.',
          },
          {
            period: '2024 – 2025',
            title: 'B.Sc. (Hons) Computing',
            place: 'University of Greenwich (UK)',
            summary: 'Pursued an honours computing degree through the University of Greenwich pathway via KMD College, deepening both technical craft and professional skills.',
            learned: [
              'Advanced Laravel',
              'Database Management',
              'Teamwork',
              'API Development',
              'Android Development with Kotlin',
              'React Native',
              'UI/UX',
              'Management Skills',
              'Git & GitHub',
            ],
          },
        ],
      },
      {
        year: '2025',
        label: 'Career Development',
        events: [
          {
            period: '2025',
            title: 'AI Developer Internship',
            place: 'My Day Thu Kywal',
            summary:
              'Developed AI image classification and text recognition models. Worked with Python, PyTorch, Transformers, TensorFlow, FastAPI, and related tools.',
            learned: [
              'Teamwork',
              'AI models',
              'Data Management',
              'AI training',
            ],
          },
          {
            period: '2025',
            title: 'Graduated B.Sc. (Hons) Computing — First Class',
            place: 'University of Greenwich (UK)',
            summary:
              'Graduated with First Class honours in B.Sc. (Hons) Computing — a major academic achievement and milestone on the journey.',
          },
          {
            period: 'Jul 2025 – Present',
            title: 'Web Developer',
            place: 'Global Technology Group (GlobalNet)',
            summary:
              'Joined Global Technology Group as a Web Developer in July, contributing to real-world web systems in a professional team environment.',
            learnedLabel: 'Skill improvement',
            learned: [
              'Website Development',
              'WordPress Development',
              'Backend Development',
              'Teamwork & Collaboration',
              'Database Management',
              'Communication',
              'Problem Solving',
              'Real-World Project Experience',
              'Professional Work Experience',
              'System Development & Maintenance',
            ],
          },
        ],
      },
      {
        year: '2026',
        label: 'Career Growth Path',
        events: [
          {
            period: '2026',
            title: 'AWS Cloud Computing Class',
            place: 'DevKtOps',
            summary:
              'I studied cloud because I want to grow as a backend developer — and solid backend work needs cloud knowledge too. I’m also aiming for a career path into DevOps or Cloud Engineering. Through DevKtOps’ AWS class, I’m building toward the AWS Certified Cloud Practitioner path and putting core services into practice.',
            learned: [
              'Amazon S3',
              'Amazon EC2',
              'IAM Policies',
              'Amazon SES (Mail)',
              'Amazon VPC',
              'Cloud Computing Fundamentals',
            ],
          },
          {
            period: '2026',
            title: 'Build DBMS Project',
            place: 'Freelance',
            summary:
              'Redesigned and rebuilt a Database Management System for a private company, replacing an existing system developed with Django and PostgreSQL. The project involved restructuring the database architecture, improving data organization, and designing database diagrams to support system updates, scalability, and future development.',
          },
        ],
      },
    ],
  },
})

const totalEvents = computed(() =>
  props.chapters.reduce((sum, chapter) => sum + chapter.events.length, 0),
)
</script>

<template>
  <section id="journey" class="relative space-y-14 sm:space-y-20">
    <div class="reveal flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-6">
      <p class="max-w-md text-sm text-[color:var(--color-muted)]">
        Chapters of my journey, ordered by year.
      </p>
      <p class="font-display text-sm tracking-wide text-[color:var(--color-accent)]">
        {{ chapters.length }} years · {{ totalEvents }} milestones
      </p>
    </div>

    <div
      v-for="(chapter, chapterIndex) in chapters"
      :key="chapter.year"
      class="year-chapter reveal relative"
      :style="{ transitionDelay: `${chapterIndex * 100}ms` }"
    >
      <header class="year-banner relative mb-6 overflow-hidden border border-[color:var(--color-border)] sm:mb-8">
        <div class="year-banner-fog pointer-events-none absolute inset-0" aria-hidden="true"></div>
        <div class="relative z-10 flex flex-col gap-2 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-8">
          <div>
            <p class="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
              Chapter {{ String(chapterIndex + 1).padStart(2, '0') }} · {{ chapter.label }}
            </p>
            <h2 class="year-display font-display font-semibold tracking-tight text-[color:var(--color-text)]">
              {{ chapter.year }}
            </h2>
          </div>
          <p class="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
            {{ chapter.events.length }} {{ chapter.events.length === 1 ? 'milestone' : 'milestones' }}
          </p>
        </div>
      </header>

      <ol class="relative border border-[color:var(--color-border)] bg-[color:var(--color-border)]">
        <li
          v-for="(event, eventIndex) in chapter.events"
          :key="`${chapter.year}-${event.title}`"
          class="event-row group grid gap-3 bg-[color:var(--color-card)] p-5 transition-colors duration-300 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 sm:p-6"
        >
          <div class="border-b border-[color:var(--color-border)] pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
            <span class="font-display text-lg font-semibold text-[color:var(--color-primary)]">
              {{ String(eventIndex + 1).padStart(2, '0') }}
            </span>
            <p class="mt-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-muted)]">
              {{ event.period }}
            </p>
          </div>

          <div class="min-w-0">
            <div class="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 class="font-display text-lg font-semibold text-[color:var(--color-text)] sm:text-xl">
                {{ event.title }}
              </h3>
              <span
                v-if="event.place"
                class="text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-accent)]"
              >
                {{ event.place }}
              </span>
            </div>
            <p class="max-w-2xl text-sm leading-relaxed text-[color:var(--color-muted)]">
              {{ event.summary }}
            </p>

            <div v-if="event.learned?.length" class="learned-block mt-5 max-w-2xl border-t border-[color:var(--color-border)] pt-4">
              <p class="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                {{ event.learnedLabel || 'What I studied' }}
              </p>
              <ul class="learned-grid">
                <li
                  v-for="(topic, topicIndex) in event.learned"
                  :key="topic"
                  class="learned-item"
                >
                  <span class="learned-index" aria-hidden="true">{{ String(topicIndex + 1).padStart(2, '0') }}</span>
                  <span class="learned-topic">{{ topic }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <aside class="continue-block reveal relative overflow-hidden">
      <div class="continue-fog pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div class="relative z-10 flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-20">
        <p class="mb-8 text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
          Chapter open
        </p>

        <div class="continue-stage relative flex flex-col items-center">
          <p class="continue-title font-display font-semibold tracking-tight text-[color:var(--color-text)]">
            To be continued
          </p>
          <span class="continue-ground-shadow" aria-hidden="true"></span>
        </div>

        <p class="mt-10 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)] sm:text-base">
          The path keeps moving — more learning, building, and chapters still ahead.
        </p>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.year-display {
  font-size: clamp(3.5rem, 12vw, 7rem);
  line-height: 0.9;
}

.year-banner {
  background: color-mix(in srgb, var(--color-card) 75%, var(--color-primary) 8%);
}

.year-banner-fog {
  background:
    radial-gradient(ellipse 60% 80% at 90% 20%, rgba(154, 107, 63, 0.16), transparent 55%),
    radial-gradient(ellipse 50% 70% at 10% 90%, rgba(47, 95, 90, 0.14), transparent 50%);
}

.event-row + .event-row {
  border-top: 1px solid var(--color-border);
}

.event-row:hover {
  background: color-mix(in srgb, var(--color-card) 80%, var(--color-primary) 12%);
}

.learned-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 640px) {
  .learned-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.learned-item {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
}

.learned-index {
  flex-shrink: 0;
  font-family: Fraunces, Georgia, serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-primary);
}

.learned-topic {
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-text);
  opacity: 0.88;
}

.continue-block {
  background: transparent;
}

.continue-fog {
  background:
    radial-gradient(ellipse 70% 50% at 50% 85%, rgba(10, 14, 20, 0.08), transparent 60%),
    radial-gradient(ellipse 50% 40% at 50% 20%, rgba(154, 107, 63, 0.1), transparent 55%);
}

.continue-stage {
  perspective: 600px;
}

.continue-title {
  position: relative;
  z-index: 1;
  font-size: clamp(2.4rem, 8vw, 4.5rem);
  line-height: 0.95;
  text-shadow:
    0 1px 0 color-mix(in srgb, var(--color-text) 12%, transparent),
    0 14px 28px color-mix(in srgb, var(--color-text) 10%, transparent);
  transform: translateY(-6px);
  animation: continue-float 5s ease-in-out infinite;
}

.continue-ground-shadow {
  display: block;
  width: min(78vw, 26rem);
  height: 1.6rem;
  margin-top: -0.15rem;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    color-mix(in srgb, var(--color-text) 28%, transparent) 0%,
    color-mix(in srgb, var(--color-text) 12%, transparent) 42%,
    transparent 72%
  );
  filter: blur(2px);
  transform: scaleY(0.55);
  animation: continue-shadow 5s ease-in-out infinite;
}

.dark .continue-ground-shadow,
.theme-monochrome .continue-ground-shadow {
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.22) 45%,
    transparent 72%
  );
}

@keyframes continue-float {
  0%,
  100% {
    transform: translateY(-6px);
  }
  50% {
    transform: translateY(-12px);
  }
}

@keyframes continue-shadow {
  0%,
  100% {
    transform: scaleY(0.55) scaleX(1);
    opacity: 0.75;
  }
  50% {
    transform: scaleY(0.45) scaleX(0.88);
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .continue-title,
  .continue-ground-shadow {
    animation: none;
  }

  .continue-title {
    transform: none;
  }
}
</style>
