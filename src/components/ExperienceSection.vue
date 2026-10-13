<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionHeader from './ui/SectionHeader.vue'

defineProps({
  hideHeader: { type: Boolean, default: false },
  experiences: {
    type: Array,
    default: () => [
      {
        role: "Where I've worked, and what I've done",
        company: 'My Day Thu Kywal · Global Technology Company',
        period: 'Web Developer & AI Developer',
        summary:
          'Building and maintaining web platforms while developing and integrating AI models — contributing across frontend, backend, data, and system support in an on-site team environment.',
        projects: [
          {
            title: 'Image Classification',
            frameworks: ['TensorFlow', 'PyTorch', 'Transformers'],
            highlights: [
              'Built and trained image classification models with TensorFlow, PyTorch, and Transformers to deliver higher confidence scores and stronger overall accuracy.',
              'Improved model performance through structured dataset work — analysis, cleaning, preprocessing, and feature preparation.',
              'Applied deep learning techniques to automate image and data classification for real business use cases.',
            ],
          },
          {
            title: 'AI API Integration',
            frameworks: ['FastAPI'],
            highlights: [
              'Integrated trained AI models with FastAPI to serve real-time image classification and prediction results.',
              'Exposed practical ML endpoints that connected model inference to company applications and internal workflows.',
              'Applied machine learning and deep learning techniques to ship reliable, production-ready AI features.',
            ],
          },
          {
            title: 'HR Recruitment Platform',
            frameworks: ['Laravel', 'Vue.js', 'AWS S3', 'Typeform', 'MySQL'],
            highlights: [
              'Developed an end-to-end HR recruitment platform covering applicant tracking, vacancy management, job allocation, and employee onboarding workflows.',
              'Streamlined applicant processing with multi-stage status workflows, CAT 1/2/3 permission controls, advanced filtering, audit logs, and Excel-based reporting.',
              'Built interactive dashboards for recruitment KPIs, manpower distribution, vacancies, job allocation, and employee metrics to support data-driven HR decisions.',
              'Delivered organisation chart and manpower modules with employee allocation, vacancy tracking, unmatched employee detection, and structured organisational data management.',
              'Implemented role and category-based access control for Admin, HR, HRO, and User roles to protect sensitive recruitment and employee information.',
              'Integrated AWS S3 for secure storage and retrieval of applicant CVs, organisation chart documents, and other HR-related files.',
              'Automated applicant intake through Typeform webhooks and built Excel import/export workflows for faster HR data processing.',
              'Designed relational database structures for applicants, vacancies, employees, departments, teams, positions, and recruitment activities to keep interconnected modules consistent.',
              'Automated post-hiring job allocation and employee record synchronisation, reducing manual HR data entry and improving recruitment-to-employee efficiency.',
            ],
          },
          {
            title: 'KPI Management Platform',
            frameworks: ['Laravel', 'MySQL', 'Excel / CSV'],
            highlights: [
              'Developed a comprehensive employee performance system supporting monthly and 6-month appraisal cycles, multi-level evaluations, KPI scoring, and performance reporting.',
              'Implemented structured appraisal workflows across employees, HODs, appraisers, peers, HR, HRB, and Admin with role-specific scoring and approval processes.',
              'Built KPI dashboards, department result matrices, employee performance reports, completion tracking, and Excel/CSV exports for HR performance analysis.',
              'Implemented role-based access for Admin, HR, HRB, ADM, and User roles, including resigned-account blocking, first-login password changes, and controlled appraisal access.',
              'Delivered employee and user management covering organisational assignments, HOD relationships, job descriptions, KPI eligibility, employee status, and admin account control.',
              'Built Excel/CSV import workflows for employee data, KPI relationships, attendance, and disciplinary records, with validation and updates to keep data accurate.',
              'Implemented digital job description confirmation with electronic signatures and PDF job-sheet generation as a prerequisite for KPI appraisal participation.',
              'Developed monthly and 6-month appraisal tracking to monitor self-assessment, HOD review, and outstanding submissions across departments.',
              'Automated KPI reports, employee rosters, department matrices, feedback reports, and completion summaries with Excel/CSV export capabilities.',
              'Shipped bilingual user guides, Myanmar-language FAQs, feedback collection, and in-app support features to improve adoption and everyday usability.',
            ],
          },
          {
            title: 'Tour & Travel Web Application',
            frameworks: ['Laravel', 'MySQL', 'Stripe', 'Bootstrap 5'],
            highlights: [
              'Developed a Laravel-based tour and travel web application with MySQL, Stripe payment integration, and Bootstrap 5 for responsive design.',
              'Implemented user authentication and authorization features for secure access to the application.',
              'Integrated Stripe payment gateway for seamless booking and payment processing.',
              'Designed and implemented a responsive user interface using Bootstrap 5, ensuring a consistent experience across devices.',
              'Built backend functionality for managing tours, bookings, and user accounts, including CRUD operations and data validation.',
              'Developed a booking management system with email notifications and confirmation workflows for users and administrators.',
              'Implemented search and filtering capabilities for tours based on location, price, and availability.',
              'Created an admin dashboard for managing tours, travel information, bookings, and user accounts with role-based access control.',
            ],
          },
          {
            title: 'Moonvale University Backend System',
            frameworks: ['Laravel', 'MySQL'],
            highlights: [
              'Developed a Laravel-based backend system with Restful API for Moonvale University, managing student records, course registrations, library systems, and academic data.',
              'Implemented user authentication and authorization features for secure access to the application.',
              'Designed and implemented database schemas and relationships to support student, course, and academic data management.',
              'Built backend functionality for managing student records, course registrations, library systems, and academic data, including CRUD operations and data validation.',
              'Created Restful API endpoints for integration with frontend applications and third-party services.',
              'Developed 75% of the backend system using Laravel and independently completed 100% of the database design. Collaborated with a team of three developers who contributed to the remaining 25% of backend development, ensuring effective teamwork and successful project delivery.',
            ],
          },
          {
            title: 'Appointment Scheduler',
            frameworks: ['Laravel 12', 'PHP', 'Blade', 'Bootstrap 5'],
            highlights: [
              'Developed a Laravel 12 appointment scheduling platform with PHP, Blade, and Bootstrap 5, establishing the core architecture and user-facing workflows.',
              'Built responsive login and registration interfaces with form validation, password recovery navigation, and user account management flows.',
              'Designed a custom dark-themed interface with Bootstrap 5, custom CSS, branded assets, and reusable Blade layouts for a consistent experience.',
              'Configured Laravel routing, controllers, Blade templates, and Vite-based asset management for a maintainable full-stack application structure.',
              'Implemented shared Blade layouts and reusable UI structures to reduce duplication and keep styling consistent across pages.',
            ],
          },
        ],
        responsibilities: [
          {
            title: 'Web Application Development',
            detail:
              'Developed, maintained, and enhanced web applications and internal digital platforms, contributing to both frontend and backend development.',
          },
          {
            title: 'AI Model Development',
            detail:
              'Developed and trained AI classification models using structured datasets to automate image and data classification tasks.',
          },
          {
            title: 'Backend & API Development',
            detail:
              'Built and integrated backend functionality, REST APIs, and third-party services to support business requirements and improve system capabilities.',
          },
          {
            title: 'Database Management',
            detail:
              'Designed and maintained database structures, tables, and relationships while writing SQL queries, reports, and data validation processes to ensure data accuracy.',
          },
          {
            title: 'System Optimisation',
            detail:
              'Improved application performance, system functionality, and user experience through code optimisation, system enhancements, and efficient data processing.',
          },
          {
            title: 'Debugging & Technical Support',
            detail:
              'Diagnosed and resolved application bugs, system errors, and technical issues while providing ongoing support and maintenance for existing systems.',
          },
          {
            title: 'System Maintenance',
            detail:
              'Performed regular system updates, enhancements, and maintenance to ensure reliable operation of company applications and internal platforms.',
          },
          {
            title: 'System Analysis',
            detail:
              'Participated in requirement gathering, system analysis, and project discussions to translate business requirements into practical technical solutions.',
          },
          {
            title: 'Data Analysis & Preprocessing',
            detail:
              'Performed data analysis, cleaning, preprocessing, and feature preparation to improve dataset quality and model performance.',
          },
          {
            title: 'AI Application Integration',
            detail:
              'Integrated trained AI models into applications and APIs to enable practical AI-driven functionality.',
          },
          {
            title: 'Team Collaboration',
            detail:
              'Collaborated with senior developers, designers, and cross-functional teams throughout the development lifecycle, contributing to project planning, implementation, testing, and deployment.',
          },
          {
            title: 'Documentation & Reporting',
            detail:
              'Prepared technical documentation, development progress reports, and system-related materials to support effective project communication and maintenance.',
          },
        ],
      },
    ],
  },
})

const timelineRef = ref(null)
const lineHeight = ref(0)
const openProjectKey = ref(null)

const projectKey = (expIndex, projectIndex) => `${expIndex}-${projectIndex}`

const toggleProject = (key) => {
  openProjectKey.value = openProjectKey.value === key ? null : key
}

const updateTimeline = () => {
  if (!timelineRef.value) return
  const rect = timelineRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const start = rect.top
  const total = rect.height
  const scrolled = windowHeight * 0.6 - start
  lineHeight.value = Math.max(0, Math.min(scrolled, total))
}

onMounted(() => {
  window.addEventListener('scroll', updateTimeline, { passive: true })
  updateTimeline()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateTimeline)
})
</script>

<template>
  <section id="experience" class="relative space-y-10 sm:space-y-12">
    <SectionHeader
      v-if="!hideHeader"
      title="Work Experience"
      subtitle="Roles, systems, and the work behind them."
      badge="Career"
    />

    <div ref="timelineRef" class="relative pl-8 sm:pl-12">
      <div class="absolute left-3 top-0 h-full w-px bg-[color:var(--color-border)] sm:left-5"></div>
      <div
        class="timeline-line absolute left-3 sm:left-5"
        :style="{ height: `${lineHeight}px` }"
      ></div>

      <ol class="space-y-8">
        <li v-for="(item, index) in experiences" :key="item.role + item.company">
          <article
            class="reveal relative border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-5 transition-colors duration-300 hover:border-[color:var(--color-accent)]/50 sm:p-6"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <header class="mb-4 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 class="font-display text-lg font-semibold text-[color:var(--color-text)] sm:text-xl">
                  {{ item.role }}
                </h3>
                <p class="mt-1 text-sm text-[color:var(--color-muted)]">{{ item.company }}</p>
              </div>
              <p class="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                {{ item.period }}
              </p>
            </header>

            <p v-if="item.summary" class="mb-5 text-sm leading-relaxed text-[color:var(--color-muted)]">
              {{ item.summary }}
            </p>

            <div v-if="item.responsibilities?.length" class="border-t border-[color:var(--color-border)] pt-5">
              <p class="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Responsibilities
              </p>
              <ul class="space-y-4">
                <li
                  v-for="(duty, dutyIndex) in item.responsibilities"
                  :key="duty.title"
                  class="responsibility-item flex gap-3 sm:gap-4"
                >
                  <span
                    class="mt-0.5 flex-shrink-0 font-display text-xs font-semibold tracking-wide text-[color:var(--color-primary)]"
                    aria-hidden="true"
                  >
                    {{ String(dutyIndex + 1).padStart(2, '0') }}
                  </span>
                  <div class="min-w-0">
                    <p class="font-display text-sm font-semibold text-[color:var(--color-text)]">
                      {{ duty.title }}
                    </p>
                    <p class="mt-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {{ duty.detail }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </li>
      </ol>
    </div>

    <div
      v-for="(item, index) in experiences"
      :key="`projects-${item.company}`"
      class="reveal"
      :style="{ transitionDelay: `${(index + 1) * 100}ms` }"
    >
      <div v-if="item.projects?.length" class="border-t border-[color:var(--color-border)] pt-8">
        <p class="mb-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
          Projects &amp; Tasks
        </p>
      

        <ul class="grid gap-3">
          <li
            v-for="(project, projectIndex) in item.projects"
            :key="project.title"
            class="project-expand group/card border border-[color:var(--color-border)] bg-[color:var(--color-card)] transition-colors duration-300 hover:border-[color:var(--color-accent)]/55"
            :class="{ 'is-open': openProjectKey === projectKey(index, projectIndex) }"
            @mouseenter="openProjectKey = projectKey(index, projectIndex)"
            @mouseleave="openProjectKey = null"
          >
            <button
              type="button"
              class="flex w-full items-start justify-between gap-3 px-4 py-4 text-left"
              :aria-expanded="openProjectKey === projectKey(index, projectIndex)"
              @click="toggleProject(projectKey(index, projectIndex))"
            >
              <div class="min-w-0">
                <p class="font-display text-base font-semibold text-[color:var(--color-text)]">
                  {{ project.title }}
                </p>
                <p class="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-muted)]">
                  {{ project.frameworks.join(' · ') }}
                </p>
              </div>
              <span
                class="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center border border-[color:var(--color-border)] text-[color:var(--color-primary)] transition-transform duration-300 group-hover/card:border-[color:var(--color-accent)] group-hover/card:text-[color:var(--color-accent)]"
                :class="{ 'rotate-180': openProjectKey === projectKey(index, projectIndex) }"
                aria-hidden="true"
              >
                <i class="fa-solid fa-chevron-down text-[10px]"></i>
              </span>
            </button>

            <div
              class="project-panel grid transition-[grid-template-rows] duration-350 ease-out"
              :class="
                openProjectKey === projectKey(index, projectIndex)
                  ? 'grid-rows-[1fr]'
                  : 'grid-rows-[0fr]'
              "
            >
              <div class="overflow-hidden">
                <ul class="space-y-3 border-t border-[color:var(--color-border)] px-4 pb-4 pt-3">
                  <li
                    v-for="highlight in project.highlights"
                    :key="highlight"
                    class="flex gap-3 text-sm leading-relaxed text-[color:var(--color-muted)]"
                  >
                    <span
                      class="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--color-accent)]"
                      aria-hidden="true"
                    ></span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.duration-350 {
  transition-duration: 350ms;
}

@media (hover: hover) and (pointer: fine) {
  .project-expand:hover .project-panel {
    grid-template-rows: 1fr;
  }

  .project-expand:hover .rotate-180,
  .project-expand:hover span[aria-hidden='true'] {
    transform: rotate(180deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-panel {
    transition: none;
  }
}
</style>
