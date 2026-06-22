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

const PARTICLE_COUNT_DESKTOP = 60
const PARTICLE_COUNT_MOBILE = 20

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.radius = Math.random() * 1.5 + 0.5
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
      this.x -= dx * 0.008
      this.y -= dy * 0.008
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(61, 122, 82, 0.45)'
    ctx.fill()
  }
}

const initParticles = (canvas) => {
  const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP
  particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height))
}

const drawConnections = (ctx) => {
  const maxDist = isMobile ? 80 : 120
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * 0.15
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(61, 122, 82, ${alpha})`
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
    <!-- Aurora layers -->
    <div class="absolute inset-0 animate-aurora-shift opacity-60 dark:opacity-80">
      <div
        class="absolute -left-1/4 -top-1/4 h-[60vh] w-[60vw] rounded-full bg-primary-500/20 blur-[100px] animate-blob-1"
      ></div>
      <div
        class="absolute -right-1/4 top-1/4 h-[50vh] w-[50vw] rounded-full bg-primary-300/15 blur-[120px] animate-blob-2"
      ></div>
      <div
        class="absolute bottom-0 left-1/3 h-[40vh] w-[40vw] rounded-full bg-primary-900/10 blur-[80px] animate-blob-3 dark:bg-primary-500/10"
      ></div>
    </div>

    <!-- Gradient mesh overlay -->
    <div
      class="absolute inset-0 opacity-30 dark:opacity-20"
      style="background: radial-gradient(ellipse at 20% 50%, rgba(61,122,82,0.14) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(196,98,45,0.1) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(232,185,35,0.08) 0%, transparent 50%)"
    ></div>

    <!-- Particle canvas -->
    <canvas
      v-if="!prefersReduced"
      ref="canvasRef"
      class="absolute inset-0 h-full w-full opacity-40 dark:opacity-60"
    ></canvas>

    <!-- Grid overlay -->
    <div
      class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
      style="background-image: linear-gradient(rgba(61,122,82,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(61,122,82,0.3) 1px, transparent 1px); background-size: 60px 60px"
    ></div>
  </div>
</template>
