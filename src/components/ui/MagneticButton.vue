<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  tag: { type: String, default: 'button' },
  href: { type: String, default: '' },
  to: { type: [String, Object], default: '' },
  magnetic: { type: Boolean, default: true },
})

const emit = defineEmits(['click'])

const elRef = ref(null)

const componentTag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return props.tag
})

const getEl = () => {
  const el = elRef.value
  if (!el) return null
  return el.$el ?? el
}

const onMouseMove = (e) => {
  if (!props.magnetic || window.matchMedia('(pointer: coarse)').matches) return
  const el = getEl()
  if (!el || !el.getBoundingClientRect) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
}

const onMouseLeave = () => {
  const el = getEl()
  if (!el) return
  el.style.transform = 'translate(0, 0)'
}

const onClick = (e) => {
  const el = getEl()
  if (!el || !el.getBoundingClientRect) {
    emit('click', e)
    return
  }
  const rect = el.getBoundingClientRect()
  const ripple = document.createElement('span')
  ripple.className = 'ripple'
  const size = Math.max(rect.width, rect.height)
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`
  el.appendChild(ripple)
  setTimeout(() => ripple.remove(), 600)
  emit('click', e)
}
</script>

<template>
  <component
    :is="componentTag"
    ref="elRef"
    :href="href || undefined"
    :to="to || undefined"
    class="ripple-container relative inline-flex overflow-hidden transition-transform duration-300 ease-out"
    data-cursor="button"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<style>
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(47, 95, 90, 0.3);
  transform: scale(0);
  animation: ripple-anim 0.6s ease-out forwards;
  pointer-events: none;
}

.theme-monochrome .ripple {
  background: rgba(163, 163, 163, 0.35);
}

@keyframes ripple-anim {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
