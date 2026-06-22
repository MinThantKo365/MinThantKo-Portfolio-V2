<script setup>
import { ref } from 'vue'

const props = defineProps({
  tag: { type: String, default: 'button' },
  href: { type: String, default: '' },
  magnetic: { type: Boolean, default: true },
})

const emit = defineEmits(['click'])

const elRef = ref(null)

const onMouseMove = (e) => {
  if (!props.magnetic || window.matchMedia('(pointer: coarse)').matches) return
  const el = elRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
}

const onMouseLeave = () => {
  const el = elRef.value
  if (!el) return
  el.style.transform = 'translate(0, 0)'
}

const onClick = (e) => {
  const el = elRef.value
  if (!el) return
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
    :is="href ? 'a' : tag"
    ref="elRef"
    :href="href || undefined"
    class="ripple-container relative inline-flex transition-transform duration-300 ease-out"
    data-cursor="button"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @click="onClick"
  >
    <slot />
  </component>
</template>
