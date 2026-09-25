<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useIsTouchDevice, useReducedMotion } from '../../composables/useDevice.js'

const canvasRef = ref(null)
const { isTouch } = useIsTouchDevice()
const { prefersReduced } = useReducedMotion()

let animationId = null
let particles = []
let mouse = { x: -1000, y: -1000 }
let isMobile = false

const PARTICLE_COUNT_DESKTOP = 48
const PARTICLE_COUNT_MOBILE = 16

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.25
    this.vy = (Math.random() - 0.5) * 0.25
    this.radius = Math.random() * 1.2 + 0.3
  }

  update(w, h) {
    this.x += this.vx
    this.y += this.vy
    if (this.x < 0 || this.x > w) this.vx *= -1
    if (this.y < 0 || this.y > h) this.vy *= -1

    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 120 && !isMobile) {
      this.x -= dx * 0.006
      this.y -= dy * 0.006
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(107, 155, 148, 0.4)'
    ctx.fill()
  }
}

const initParticles = (canvas) => {
  const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP
  particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height))
}

const drawConnections = (ctx) => {
  const maxDist = isMobile ? 70 : 110
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * 0.12
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(154, 107, 63, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
  }
}

const animate = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach((p) => {
    p.update(canvas.width, canvas.height)
    p.draw(ctx)
  })
  drawConnections(ctx)
  animationId = requestAnimationFrame(animate)
}

const resize = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  isMobile = window.innerWidth < 768
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  initParticles(canvas)
}

const onMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

onMounted(() => {
  if (prefersReduced.value) return

  resize()
  animate()
  window.addEventListener('resize', resize)
  if (!isTouch.value) {
    window.addEventListener('mousemove', onMouseMove)
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <div class="mono-grayscale pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div class="absolute inset-0 animate-fog-drift opacity-70 dark:opacity-90">
      <div
        class="absolute -left-1/4 -top-1/4 h-[55vh] w-[55vw] rounded-full bg-primary-500/15 blur-[110px] animate-blob-1"
      ></div>
      <div
        class="absolute -right-1/4 top-1/4 h-[45vh] w-[45vw] rounded-full bg-brand-accent/10 blur-[120px] animate-blob-2"
      ></div>
      <div
        class="absolute bottom-0 left-1/3 h-[38vh] w-[38vw] rounded-full bg-primary-300/10 blur-[90px] animate-blob-3"
      ></div>
    </div>

    <div
      class="absolute inset-0 opacity-40 dark:opacity-25"
      style="background: radial-gradient(ellipse at 18% 55%, rgba(47,95,90,0.14) 0%, transparent 50%), radial-gradient(ellipse at 82% 18%, rgba(154,107,63,0.1) 0%, transparent 48%)"
    ></div>

    <canvas
      v-if="!prefersReduced"
      ref="canvasRef"
      class="absolute inset-0 h-full w-full opacity-35 dark:opacity-55"
    ></canvas>

    <div
      class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
      style="background-image: linear-gradient(rgba(107,155,148,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(107,155,148,0.35) 1px, transparent 1px); background-size: 72px 72px"
    ></div>
  </div>
</template>
