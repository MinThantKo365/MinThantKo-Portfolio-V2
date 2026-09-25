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
  { id: 'dark', label: 'Dark', icon: 'fa-moon', title: 'Night palette' },
  { id: 'monochrome', label: 'B&W', icon: 'fa-circle-half-stroke', title: 'Black & white' },
]

const activeIndex = computed(() => modes.findIndex((m) => m.id === props.modelValue))

const setMode = (id) => emit('update:modelValue', id)
</script>

<template>
  <div
    class="relative inline-flex h-10 w-full items-center border border-[color:var(--color-border)] bg-[color:var(--color-primary)]/8 p-1 sm:w-auto"
    role="group"
    aria-label="Theme mode"
  >
    <span
      class="absolute inset-y-1 bg-[color:var(--color-primary)] transition-all duration-500 ease-out"
      :style="{
        width: `calc(${100 / modes.length}% - 4px)`,
        left: `calc(${(activeIndex * 100) / modes.length}% + 2px)`,
      }"
    ></span>

    <button
      v-for="mode in modes"
      :key="mode.id"
      type="button"
      class="relative z-10 flex min-w-0 flex-1 items-center justify-center gap-1 px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 sm:min-w-[2.75rem] sm:flex-none"
      :class="
        modelValue === mode.id
          ? 'text-[#f4f7f6]'
          : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]'
      "
      :aria-label="mode.title"
      :aria-pressed="modelValue === mode.id"
      :title="mode.title"
      data-cursor="button"
      @click="setMode(mode.id)"
    >
      <i :class="['fa-solid text-[9px]', mode.icon]" aria-hidden="true"></i>
      <span>{{ mode.label }}</span>
    </button>
  </div>
</template>
