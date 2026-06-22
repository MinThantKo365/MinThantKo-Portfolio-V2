<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'
import AnimatedBackground from './components/effects/AnimatedBackground.vue'
import CustomCursor from './components/effects/CustomCursor.vue'
import ScrollProgress from './components/effects/ScrollProgress.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'
import { useTheme } from './composables/useTheme.js'

const { theme } = useTheme()

useScrollReveal()
</script>

<template>
  <div class="relative min-h-screen text-brand-text-light transition-colors duration-theme dark:text-brand-text-dark">
    <ScrollProgress />
    <AnimatedBackground class="mono-grayscale" />
    <CustomCursor />

    <Navbar v-model:theme="theme" />

    <main class="mono-grayscale relative z-10 pt-28 sm:pt-32">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-10 sm:gap-8 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>

    <BackToTop />
  </div>
</template>
