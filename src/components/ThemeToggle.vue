<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const modes = [
  { id: 'light', label: 'Light', icon: 'fa-sun', title: 'Light mode' },
  { id: 'dark', label: 'Dark', icon: 'fa-moon', title: 'Profile colors (dark)' },
  { id: 'monochrome', label: 'B&W', icon: 'fa-circle-half-stroke', title: 'Black & white' },
]

const activeIndex = computed(() => modes.findIndex((m) => m.id === props.modelValue))

const setMode = (id) => emit('update:modelValue', id)
</script>

<template>
  <div
    class="relative inline-flex h-10 items-center rounded-full border border-primary-500/25 bg-primary-500/10 p-1 transition-all duration-500 hover:border-primary-500/40 hover:shadow-glow"
    role="group"
    aria-label="Theme mode"
  >
    <span
      class="absolute inset-y-1 rounded-full bg-gradient-to-tr from-primary-800 to-primary-500 shadow-soft-lg transition-all duration-500 ease-out"
      :style="{
        width: `calc(${100 / modes.length}% - 4px)`,
        left: `calc(${(activeIndex * 100) / modes.length}% + 2px)`,
      }"
    ></span>

    <button
      v-for="mode in modes"
      :key="mode.id"
      type="button"
      class="relative z-10 flex min-w-[2.75rem] items-center justify-center gap-1 rounded-full px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
      :class="
        modelValue === mode.id
          ? 'text-brand-50'
          : 'text-brand-text-light/50 dark:text-brand-text-dark/50 hover:text-brand-text-light/70 dark:hover:text-brand-text-dark/70'
      "
      :aria-label="mode.title"
      :aria-pressed="modelValue === mode.id"
      :title="mode.title"
      data-cursor="button"
      @click="setMode(mode.id)"
    >
      <i :class="['fa-solid text-[9px]', mode.icon]" aria-hidden="true"></i>
      <span class="hidden min-[420px]:inline">{{ mode.label }}</span>
    </button>
  </div>
</template>
